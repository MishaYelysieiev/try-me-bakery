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

            320: {
                direction: 'vertical',
                slidesPerView: 8,
                slidesPerGroup: 8,
                shortSwipes: false,
                longSwipes: false,
                watchOverflow: true,
                allowTouchMove: false,
                spaceBetween: 60
            },
            480: {
                direction: 'vertical',
                slidesPerView: 8,
                slidesPerGroup: 8,
                shortSwipes: false,
                longSwipes: false,
                watchOverflow: true,
                allowTouchMove: false,
                spaceBetween: 60
            },

            578: {
                direction: 'vertical',
                slidesPerView: 8,
                slidesPerGroup: 8,
                shortSwipes: false,
                longSwipes: false,
                watchOverflow: true,
                allowTouchMove: false,
                spaceBetween: 60
            },


            813: {
                direction: 'horizontal',
                slidesPerView: 4,
                slidesPerGroup: 4,
                watchSlidesVisibility: true,
                spaceBetween: 20,
                allowTouchMove: true
            },


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
    } else if (target.classList.contains('more-info')) {
        target.style.display = 'none';
        let btn = target.nextElementSibling;
        let hover = target.previousElementSibling;
        btn.style.display = 'block';
        hover.style.opacity = '1';
    } else if (target.classList.contains('cross')) {
        let hover = target.parentElement;
        let btn = hover.nextElementSibling;
        let btnDisable = btn.nextElementSibling;
        btnDisable.style.display = 'none';
        btn.style.display = 'block';
        hover.style.opacity = '0';
    }
});

document.addEventListener('scroll', function(){
    if(document.getElementById('scroll-breakpoint-price').getBoundingClientRect().y <= 100) {
        document.querySelectorAll('.background-plant-price').forEach(function(el){
            el.style.animationPlayState = 'running';
        })
    } else if(document.getElementById('scroll-breakpoint-step').getBoundingClientRect().y <= 50) {
        document.querySelectorAll('.background-plant-step').forEach(function(el){
            el.style.animationPlayState = 'running';
        })
    }
})

