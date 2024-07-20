// Mobile navigation
const $hamBtn = document.getElementById('🍔-btn')
$hamBtn.addEventListener('click', () => {
    const $navMobile = document.getElementById('nav-hamburger')
    $navMobile.toggleAttribute('open')
})

window.addEventListener('click', (event) => {
    const $menuBtn = event.target.closest('#🍔-btn')
    if (!$menuBtn) {
        const $navMobile = document.getElementById('nav-hamburger')
        $navMobile.removeAttribute('open')
    }
})

// Scroll to top button
// Utiliser l'Intersection Observer pour détecter quand l'élément sentinelle est visible
let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $upBtn.style.display = "grid"
        } else {
            $upBtn.style.display = "none"
        }
    })
})

// Observer l'élément sentinelle
observer.observe(document.getElementById("VS"))

var $upBtn = document.getElementById("upBtn")
$upBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }) )

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $upBtn.style.display = "block"
    } else {
        $upBtn.style.display = "none"
    }
}