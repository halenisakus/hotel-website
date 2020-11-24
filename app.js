const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const activitiesMenu = document.querySelector('#activities-page');
    const usersMenu = document.querySelector('#users-page');
    const contactMenu = document.querySelector('#contact-page');


    let scrollPos = window.scrollY;
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        activitiesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        activitiesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        usersMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4500) {
        usersMenu.classList.add('highlight');
        contactMenu.classList.remove('highlight');
        activitiesMenu.classList.remove('highlight');

        return;
    } else if (window.innerWidth > 960 && scrollPos < 5000) {
        contactMenu.classList.add('highlight');
        usersMenu.classList.remove('highlight');

        return;
    }


    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

const nav = document.querySelector('navbar');

window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;

    if (offset > 200)
        nav.classList.add('scroll')
    else
        nav.classList.remove('scroll')
});

function formKontrol() {
    _ad = document.getElementById("ad").value;
    _email = document.getElementById("email").value;
    _telefon = document.getElementById("telefon").value;
    _giris = document.getElementById("giris").value;
    _cikis = document.getElementById("cikis").value;

    if (_ad == "" || _email == "" || _telefon == "" || _giris == "" || _cikis == "")
        alert("Lütfen tüm alanları doldurunuz.");
    else {
        if (_cikis < _giris)
            alert("Lütfen giriş ve çıkış tarihlerini kontrol ediniz.");
        else
            alert("Tebrikler");
    }
}

_map = document.getElementById("id");

function initMap() {
    const uluru = {
        lat: -25.344,
        lng: 131.036
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        _map: map,
    });
}