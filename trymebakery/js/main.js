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
    if(product != "cakes") {
        document.body.querySelector(`.gallery`).style.display = "none";
    } else {
        document.body.querySelector(`.gallery`).style.display = "flex";
    }

    slide.querySelector('.pricelist').classList.add('visible');

    fbq('track', 'ViewContent', {
        content_name: 'Slider Interaction',
        content_category: product
       });

}

window.addEventListener('resize', function () {
    slideProductPosition();
    initializeSlickPostition();
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
    });

    var mySwiperReview = new Swiper('.review-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1.25,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        allowTouchMove: true,

        // If we need pagination
        scrollbar: {
            el: '.review-scrollbar',
            draggable: false,
            dragClass: 'scrollbar-elem'
        },

        breakpoints: {
            812: {
                direction: 'horizontal',
                slidesPerView: 2,
                slidesPerGroup: 2,
                watchSlidesVisibility: true,
                spaceBetween: 30,
                allowTouchMove: true
            },
            1024: {
                direction: 'horizontal',
                slidesPerView: 3,
                slidesPerGroup: 3,
                watchSlidesVisibility: true,
                spaceBetween: 30,
                allowTouchMove: true
            },
            1366: {
                direction: 'horizontal',
                slidesPerView: 4,
                slidesPerGroup: 4,
                watchSlidesVisibility: true,
                spaceBetween: 30,
                allowTouchMove: true
            }
        }



    });

    var mySwiperInsta = new Swiper('.insta-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1.25,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        allowTouchMove: true,

        // If we need pagination
        scrollbar: {
            el: '.insta-scrollbar',
            draggable: false,
            dragClass: 'scrollbar-insta-elem'
        },

        breakpoints: {
            812: {
                direction: 'horizontal',
                slidesPerView: 2,
                slidesPerGroup: 2,
                watchSlidesVisibility: true,
                spaceBetween: 30,
                allowTouchMove: true
            },
            1024: {
                direction: 'horizontal',
                slidesPerView: 3,
                slidesPerGroup: 3,
                watchSlidesVisibility: true,
                spaceBetween: 30,
                allowTouchMove: true
            },
            1366: {
                direction: 'horizontal',
                slidesPerView: 4,
                slidesPerGroup: 4,
                watchSlidesVisibility: true,
                spaceBetween: 30,
                allowTouchMove: true
            }
        }



    })
});



document.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('product-var')) {
        const currentActiveProduct = document.body.querySelector('.product-var.active');
        let slide = document.body.querySelector(`.slides[data-category='${currentActiveProduct.dataset.category}']`);
        slide.querySelector('.pricelist').classList.remove('visible');
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
        fbq('track', 'ViewContent', {
            content_name: 'Interaction with More Info Button',
            content_category: target.parentElement.querySelector('img').alt
           });
           console.log('ViewContent',target.parentElement.querySelector('img').alt);
    } else if (target.classList.contains('cross')) {
        let hover = target.parentElement;
        let btn = hover.nextElementSibling;
        let btnDisable = btn.nextElementSibling;
        btnDisable.style.display = 'none';
        btn.style.display = 'block';
        hover.style.opacity = '0';
    } else if (target.classList.contains('anchor-item')) {
        let item = target.dataset.anchor;
        let block = document.body.querySelector(`.container[data-anchor='${item}']`);
        if(!block) {
            block = document.body.querySelector(`.pricelist.visible[data-anchor='${item}']`);
        }

        block.scrollIntoView({behavior: "smooth"})
    
    } else if (target.classList.contains('arrow-up')) {
        document.querySelector('.header').scrollIntoView({behavior: "smooth"});
    }
    
    if (target.classList.contains('order') || target.classList.contains('quick-buy') ) {
        fbq('track', 'Contact');
        window.location.href = target.querySelector('a').href;
    } else if(target.parentElement.classList.contains('order') || target.parentElement.classList.contains('quick-buy')) {
        fbq('track', 'Contact');
    }
});

document.addEventListener('scroll', function(e){
    let arrow = document.querySelector('.arrow-up');
    if(document.getElementById('scroll-breakpoint-price').getBoundingClientRect().y <= 100) {
        document.querySelectorAll('.background-plant-price').forEach(function(el){
            el.style.animationPlayState = 'running';
        })
    } else if(document.getElementById('scroll-breakpoint-step').getBoundingClientRect().y <= 50) {
        document.querySelectorAll('.background-plant-step').forEach(function(el){
            el.style.animationPlayState = 'running';
        });

    } 
    
    if(window.scrollY > 1000) {
        arrow.style.opacity = '1';
    } else {
        arrow.style.opacity = '0';
    }

})

