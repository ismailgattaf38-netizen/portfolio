const menu = document.getElementById("menu");
const action = document.getElementById("action");

function toggleMenu(forceClose = false) {
    const open = forceClose ? false : !action.classList.contains("is-active");
    menu.classList.toggle("is-active", open);
    action.classList.toggle("is-active", open);
    menu.setAttribute("aria-expanded", open);
    // يمنع تمرير الصفحة خلف القائمة المفتوحة
    document.body.style.overflow = open ? "hidden" : "";
}

menu.addEventListener("click", () => toggleMenu());

// إغلاق القائمة تلقائياً عند الضغط على أي رابط (كانت تبقى مفتوحة وتغطي الصفحة)
action.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => toggleMenu(true))
);

// إغلاق القائمة إذا كبرت الشاشة (مثلاً تدوير الهاتف) حتى لا يبقى القفل على التمرير
window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) toggleMenu(true);
});
