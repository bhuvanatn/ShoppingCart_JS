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

                cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');

                cartItem.innerHTML =
                       `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                        <div class="item-text">
                        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price" class="mb-0">${parseInt(item.price)}</span>
                        </div>
                        <a href="#" id='cart-item-remove' class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                        </a>`
                const cart = document.getElementById("cart");
                const total = document.querySelector(".cart-total-container")
                cart.insertBefore(cartItem, total);
                showTotal();
                console.log(item);
                console.log(partpath);
            }
        });
    })
    i =0;
    function showTotal(){
        const items = document.querySelectorAll(".cart-item-price");
        const total = [];
    
        items.forEach(function(item){
            total.push(parseInt(parseInt(item.textContent)));
        });
        const totalprice = total.reduce(function(total, item){
            total += item;
            return total;
        })
        console.log("Total", totalprice);
        document.getElementById("cart-total").textContent = totalprice;
        document.querySelector(".item-total").textContent = totalprice;
        document.getElementById("item-count").textContent = total.length;
    }
})();
