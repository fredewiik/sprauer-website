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
let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'VS') {
                $upBtn.style.display = "grid"
            } else {
                $upBtn.style.display = "none"
            }
        }
    }, {
        root: null, // Utilise le viewport comme conteneur de défilement
        threshold: 0.5
    })
})

// Observer l'élément sentinelle
observer.observe(document.querySelector("header"))
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