const user = {
    name : "sridhar",
    active : true,
    cart : [],
    purchases : []
};
// add items to cart
// add 3% of tax
//buy item cart --> purchase
//empty cart

const compose  = (f, g) => (...data) => f(g(...data));

const x = purchaseItem(
    emptyCart,
    buyItems,
    addtaxToItem, 
    addItemToCart
)(user, {name : "laptop", price : 200})

console.log(x);

function purchaseItem (...fns)  {
    return fns.reduce(compose);
}

function addItemToCart(user, item)  {
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart : updatedCart});
}

function addtaxToItem(user)  {
    const  {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map( item => {
        return {
            name : name,
            price : item.price * taxRate

        }
    } )
    return Object.assign({}, user, {cart : updatedCart})
}

function buyItems(user)  {
    const {cart} = user;

    return Object.assign({}, user, {purchases : cart});
}

function emptyCart(user)  {
    return Object.assign({}, user, {cart : []});
}