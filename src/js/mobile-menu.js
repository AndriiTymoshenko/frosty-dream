(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const nav = document.querySelectorAll('.menu-container__item');
    const buyNowBtn = document.querySelectorAll('.button-buynow');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
        openMenuBtn.classList.toggle('is-open'); // Then remove

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    for (var i = 0; i < nav.length; i++) {
        nav[i].onclick = function (e) {
            e.preventDefault();
            mobileMenu.classList.remove('is-open');
        };
    }

    for (var i = 0; i < nav.length; i++) {
        buyNowBtn[i].onclick = function (e) {
            e.preventDefault();
            mobileMenu.classList.remove('is-open');
        };
    }

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        openMenuBtn.classList.remove('is-open');
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();
