function init() {
    const $hamBtn = document.getElementById('🍔-btn')
    $hamBtn.addEventListener('click', () => {
        const $navMobile = document.getElementById('nav-hamburger')
        $navMobile.toggleAttribute('open')
    })
}

init()