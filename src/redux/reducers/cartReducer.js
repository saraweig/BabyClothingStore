const cart = [];
export  const cartReducer = (state = cart, action)=>{
    switch(action.type){
        case( "ADDTOCART"):
        {
            if (action.product.qty === 0) {
                alert("Not in stock")
                return state;
            }
            if (action.product.qty > 0) {
                action.product.cartQty++;
                if(!state.includes(action.product))
                    return [...state, action.product]
            }
            return state; 
       }
       case ("DELETEFROMCART"):{
        const cart = [...state];
        state.map((product) => (
            (product.id === action.product.id) ? cart[cart.indexOf(product)].qty += action.product.cartQty : null))
        state.map((product) => (
                (product.id === action.product.id) ? cart[cart.indexOf(product)].cartQty=0 : null))     
            return cart.filter((product) => product.id !== action.product.id)
       }
       case ("PLUS"):{
        console.log(action.product)
        if(action.product.cartQty === 10){
            console.log("no")
            alert("Not in stock");
            return state;
        }
        const cart = [...state]
        state.map((product) => (
            (product.id === action.product.id) ? cart[cart.indexOf(product)].cartQty++ : null
        ))
        return cart;
       }
       case("MINUS"):{
            const cart = [...state]
            state.map((product) =>(
                (product.id === action.product.id)? cart[cart.indexOf(product)].cartQty-- : null
            ))
            return cart.filter((item) => item.cartQty > 0)
       }
    }
    return state;
}