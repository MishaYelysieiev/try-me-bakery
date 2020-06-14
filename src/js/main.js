function initializeSlickPostition() {
    const slick = document.body.querySelector('.slick');
    const activeProduct = document.body.querySelector('.product-var.active');
    let elemWidth = activeProduct.offsetWidth;
    slick.style.width = elemWidth + 50 + 'px';
    slick.style.left = activeProduct.offsetLeft + elemWidth / 2 + 'px';

}

function slideProductPosition(product) {

    if (!product) {
        const currentActiveProduct = document.body.querySelector('.product-var.active');
        product = currentActiveProduct.dataset.category
    }

    let slide = document.body.querySelector(`.slides[data-category='${product}']`);
    let distance = slide.offsetLeft;
    document.body.querySelector('#price-slider').style.left = -(distance) + 'px';


}

window.addEventListener('resize', function () {
    slideProductPosition();
});




document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initializeSlickPostition, 100);
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 4,
        slidesPerGroup: 4,
        watchSlidesVisibility: true,
        spaceBetween: 30,

        // If we need pagination
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: false,
            dragClass: 'scrollbar-elem'
          },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        breakpoints: {
            // when window width is >= 320px
            992: {
              spaceBetween: 20
            },

            768: {
                slidesPerView: 1.4,
                slidesPerGroup: 1
            },
            578: {
                slidesPerView: 1.4,
                slidesPerGroup: 1
            },
            480: {
                slidesPerView: 1.4,
                slidesPerGroup: 1
            },
            320: {
                slidesPerView: 1.4,
                slidesPerGroup: 1
            }

          }
    })
});



document.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('product-var')) {
        const currentActiveProduct = document.body.querySelector('.product-var.active');
        currentActiveProduct.classList.remove('active');
        target.classList.add('active');
        initializeSlickPostition();
        slideProductPosition(target.dataset.category);
    }
})