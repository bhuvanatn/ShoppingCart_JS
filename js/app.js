(function () {
    console.log("Hi");
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");
    cartInfo.addEventListener("click", function () {
        cart.classList.toggle("show-cart");
    });
})();
//add items to cart

(function () {
    const cartBtn = document.querySelectorAll(".store-item-icon");
    console.log(cartBtn);
    cartBtn.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            if (e.target.parentElement.classList.contains("store-item-icon")) {
                let fullpath = e.target.parentElement.previousElementSibling.src;
                let pos = fullpath.indexOf("img") + 3;
                let partpath = fullpath.slice(pos);

                const item = {};
                item.img = `img-cart${partpath}`;
                item.name = e.target.parentElement.parentElement.
                    nextElementSibling.children[0].children[0].
                    textContent;

                item.price = e.target.parentElement.parentElement.
                    nextElementSibling.children[0].children[1].
                    textContent.slice(1).trim();




                console.log(item);
                console.log(partpath);
            }
        });
    })
})();