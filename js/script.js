document.addEventListener('DOMContentLoaded',function(){

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    const btn = document.querySelector('.navbar-toggler')
    const themeToggle = document.getElementById('theme-toggle')
    const htmlElement = document.documentElement
    const body = document.body

    // Initialize dark mode based on localStorage or system preference
    function initializeDarkMode() {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            enableDarkMode()
        } else {
            disableDarkMode()
        }
    }

    // Enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark')
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
            themeToggle.title = 'Switch to light mode'
        }
    }

    // Disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode')
        localStorage.setItem('theme', 'light')
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
            themeToggle.title = 'Switch to dark mode'
        }
    }

    // Toggle dark mode
    function toggleDarkMode() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode()
        } else {
            enableDarkMode()
        }
    }

    // Add event listener to theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode)
    }

    function addShadow(){
        if (window.scrollY>=200) {
            nav.classList.add('shadow-bg')
        }
        else if(window.scrollY==0){
            nav.classList.remove('shadow-bg')
        }

    }
    function addShadowClick (){
        nav.classList.add('shadow-bg')
    }

    allNavItems.forEach(item => item.addEventListener('click',()=> navList.classList.remove('show')))
    btn.addEventListener('click', addShadowClick)

    window.addEventListener('scroll', addShadow)

    // Initialize dark mode on page load
    initializeDarkMode()

})