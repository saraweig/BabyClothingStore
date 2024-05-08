export const addToCart = (product) =>{
    return{
        type : "ADDTOCART",
        product
    }
}
export const deleteFromCart =(product)=> {
    return{
        type : "DELETEFROMCART",
        product
    }
}

export const plus =(product)=> {
    return{
        type : "PLUS",
        product
    }
}

export const minus =(product)=> {
    return{
        type : "MINUS",
        product
    }
}


