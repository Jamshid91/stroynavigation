const lang = document.querySelector('.lang-active'),
      langLists = document.querySelectorAll('.lang-list li'),
      menuBurger = document.querySelector('.menu-burger'),
      mobileMenu = document.querySelector('.mobile-menu'),
      body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('change');
    mobileMenu.classList.toggle('showMobileMenu');
    body.classList.toggle('bodyStopScroll')
});


lang.addEventListener('click', () => {
    lang.parentElement.classList.toggle('showLang')
});

langLists.forEach(list => {
    list.addEventListener('click', () => {
        langLists.forEach(elem => {
            elem.classList.remove('active')
        })
        lang.textContent = list.textContent;
        list.parentElement.parentElement.classList.remove('showLang');
        list.classList.add('active');
    });
})

document.addEventListener('click', (e) => {
    lang.parentElement.contains(e.target) || lang.parentElement.classList.remove('showLang')
});


// Search

const search_btn = document.querySelector('.search-btn');
const searchInp = document.querySelector('.search-inp');
const loader = document.querySelector('.loader');


search_btn.addEventListener('click', () => {
    if(searchInp.value != '') {
        loader.classList.remove('hidden');
        setTimeout(() => {
            window.location= "profil.html";
        }, 1000);
    } else {
        alert('Введите действительное имя пользователя')
    }
})