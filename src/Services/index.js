export const getCart = () => {
    console.log("...")
    let data = localStorage.getItem("cart")
    if (data) {
        data = JSON.parse(data)
    } else {
        data = []
    }
    return data;
}

const updateCart = (x = []) => {
    let data = JSON.stringify(x);
    localStorage.setItem("cart", data)
    return getCart()
}

export const addCart = (x) => {
    let data = getCart();
    data.push(x)
    return updateCart(data);
}

export const removeCart = (x) => {
    let data = getCart();
    data = data.filter(item => item.id != x.id)
    return updateCart(data);
}


export default {
    getCart,
    addCart,
    removeCart
}