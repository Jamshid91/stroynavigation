const searchBtn = document.querySelector('.searchBtn'),
      searchClose = document.querySelector('.search-close'),
      searchBox = document.querySelector('.search-box');


searchBtn.addEventListener('click', () => {
    searchBox.classList.add('showSearch');
    body.classList.add('bodyStopScroll');
});

searchClose.addEventListener('click', () => {
    searchBox.classList.remove('showSearch');
    body.classList.remove('bodyStopScroll');
});