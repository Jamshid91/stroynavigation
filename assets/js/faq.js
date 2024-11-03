const faqs = document.querySelectorAll('.item-head');


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('showFaq')
    });
});