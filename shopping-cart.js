export function calculateTotal(cart){
    if(cart.length===0){
        return 0;
    }

    const firstItem=cart[0]
    return firstItem.unitPrice * firstItem.quantity ;
}

//test quantity >0
//test severals items