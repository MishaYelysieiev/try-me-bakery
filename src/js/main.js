function initializeSlickPostition() {
    const slick = document.body.querySelector('.slick');
    const activeProduct = document.body.querySelector('.product-var.active');
    let elemWidth = activeProduct.offsetWidth;
    slick.style.width = elemWidth + 50 + 'px';
    slick.style.left = activeProduct.offsetLeft + elemWidth/2 +'px';

}

function slideProductPosition(product) {
    
    if (!product) {
        const currentActiveProduct = document.body.querySelector('.product-var.active');
        product = currentActiveProduct.dataset.category
    }

    let slide = document.body.querySelector(`.slides[data-category='${product}']`);
    let distance = slide.offsetLeft-1;
    document.body.querySelector('#price-slider').style.left = -(distance) + 'px';
    

}

window.addEventListener('resize', function (){
    slideProductPosition();
});




document.addEventListener('DOMContentLoaded',function(){
    setTimeout(initializeSlickPostition,100);

});

document.addEventListener('click', function(event){
    let target = event.target;
    if(target.classList.contains('product-var')) {
        const currentActiveProduct = document.body.querySelector('.product-var.active');
        currentActiveProduct.classList.remove('active');
        target.classList.add('active');
        initializeSlickPostition();
        slideProductPosition(target.dataset.category);
    }
})