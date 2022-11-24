export function getItemPrice(array, id) {
    let itemPrice = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
           itemPrice = array[i].price * array[i].amount
        }
    } 
    return itemPrice 
}

export function getTotalPrice(array) {
    let totalPrice = 0;
    for (let i = 0; i < array.length; i++) {        
        totalPrice = totalPrice + (array[i].price *array[i].amount)        
    }
    
    return totalPrice
}

export function checkToken() {
    const token = JSON.parse(localStorage.getItem('isLogin'));
    if(token == true) {
        return true
    }
    return false
}