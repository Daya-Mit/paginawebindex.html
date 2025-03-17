let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;
        cartDiv.innerHTML += `<p>${product.name} - $${product.price} <button onclick="removeFromCart(${index})">Eliminar</button></p>`;
    });

    cartDiv.innerHTML += `<p>Total: $${total}</p>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}






var swiper = new Swiper (".mySwiper-2", {

    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nexEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        } 
    } 

});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
input.addEventListener('change', function() {
    let id = input.ariaValueMax;
    let thisSwiper = document.getElementById('swiper' + id);
    thisSwiper.swiper.update();
})


    

});




