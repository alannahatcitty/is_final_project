/* Shared nav for index + resume. Active link: body[data-nav-active] */
(function () {
  var active = (document.body && document.body.getAttribute("data-nav-active")) || "home";
  var items = [
    { id: "home", href: "index.html", label: "Home" },
    { id: "resume", href: "resume.html", label: "Résumé" },
    { id: "scratch", href: "scratch.html", label: "Scratch" },
    { id: "app", href: "app.html", label: "Mini-game" },
  ];

  function fillNav() {
    var ul = document.getElementById("site-navbar-list");
    if (!ul) return;
    ul.innerHTML = "";
    items.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "nav-item";
      var a = document.createElement("a");
      a.className = "nav-link";
      a.href = item.href;
      a.textContent = item.label;
      if (active === item.id) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fillNav);
  } else {
    fillNav();
  }
})();
