// @ts-ignore
const sidebarBg = document.getElementById("sidebar_bg")
const sidebar = document.getElementById("sidebar")
const sidebarBtn = document.getElementById('sidebarBtn')


sidebarBtn?.addEventListener('click', function () {
    sidebarBg?.classList.toggle("sidebar_bg_active")
    sidebar?.classList.toggle("sidebar_active")
})

sidebarBg?.addEventListener('click', function (event) {
    sidebarBg?.classList.toggle("sidebar_bg_active")
    sidebar?.classList.toggle("sidebar_active")
})

sidebar?.addEventListener("click", function(event) {
    event.stopPropagation()
})