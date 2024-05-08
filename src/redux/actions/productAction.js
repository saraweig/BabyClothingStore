export const addQty = (index) => {
    return{
        type : "ADDQTY",
        payload: index
    }
}
export const decreaseQty = (index) => {
    return{
        type : "DECREASEQTY",
        payload: index
    }
}

