/**
 * Push project to an empty GitHub repo using the Git Database API (no git CLI, no npm deps).
 * Requires: GITHUB_TOKEN — classic PAT with `repo`, or fine-grained with Contents read/write.
 *
 * Usage: GITHUB_TOKEN=ghp_xxx node scripts/github-api-push.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const OWNER = "alannahatcitty";
const REPO = "is_final_project";
const BRANCH = "main";
const COMMIT_MSG = "Add final web project: Bootstrap site, scratch page, app, assets";

const API = `https://api.github.com/repos/${OWNER}/${REPO}`;

function walk(dir, base = root, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === ".git" || e.name === "node_modules") continue;
    const full = path.join(dir, e.name);
    const rel = path.relative(base, full).split(path.sep).join("/");
    if (e.isDirectory()) walk(full, base, out);
    else if (e.name !== ".DS_Store") out.push(rel);
  }
  return out;
}

async function gh(method, pathname, body) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const res = await fetch(`${API}${pathname}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${method} ${pathname} → ${res.status}\n${text}`);
  }
  return text ? JSON.parse(text) : {};
}

async function main() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) {
    console.error(
      "Set GITHUB_TOKEN to a classic PAT with “repo” scope:\n" +
        "  https://github.com/settings/tokens\n" +
        "Then:\n" +
        "  GITHUB_TOKEN=ghp_xxx node scripts/github-api-push.mjs"
    );
    process.exit(1);
  }

  // Fail fast if branch already exists (non-empty repo)
  try {
    await gh("GET", `/git/ref/heads/${BRANCH}`);
    console.error(
      `Branch ${BRANCH} already exists. Use git to push updates, or delete the branch on GitHub first.`
    );
    process.exit(1);
  } catch (e) {
    if (!String(e.message).includes("404")) throw e;
  }

  const files = walk(root);
  if (files.length === 0) {
    console.error("No files to upload.");
    process.exit(1);
  }

  console.log(`Uploading ${files.length} files...`);

  const treeEntries = [];
  for (const rel of files) {
    const full = path.join(root, rel);
    const buf = fs.readFileSync(full);
    const content = buf.toString("base64");
    const blob = await gh("POST", "/git/blobs", {
      content,
      encoding: "base64",
    });
    treeEntries.push({
      path: rel,
      mode: "100644",
      type: "blob",
      sha: blob.sha,
    });
  }

  const tree = await gh("POST", "/git/trees", { tree: treeEntries });
  const commit = await gh("POST", "/git/commits", {
    message: COMMIT_MSG,
    tree: tree.sha,
    parents: [],
  });

  await gh("POST", "/git/refs", {
    ref: `refs/heads/${BRANCH}`,
    sha: commit.sha,
  });

  console.log("Pushed initial commit to", `${BRANCH}.`);
  console.log("Repo: https://github.com/" + OWNER + "/" + REPO);
  console.log("Enable Pages: Settings → Pages → branch main, / (root).");
  console.log("Scratch: https://" + OWNER + ".github.io/" + REPO + "/scratch.html");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
