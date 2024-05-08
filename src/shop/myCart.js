import { UseSelector, useSelector , useDispatch} from "react-redux";
import {decreaseQty} from "../redux/actions/productAction"
import {addQty} from "../redux/actions/productAction"
import { useNavigate } from "react-router-dom";
import {deleteFromCart, minus, plus} from "../redux/actions/cartAction"
export default function Cart(){
    const cart = useSelector((state) =>state.cartReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <>
        <p>My Cart</p>
        <div id="cards">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Remove</th>
                </tr>
            </thead>
        <tbody>
        {cart.map((item, index) => (
                <tr key={item}>
                    <td><h5 class="card-title">{item.name}</h5></td>
                    <td><img src={item.image} style={{"height":"100px"}} alt={item.name} ></img></td>
                    <td class="card-text">price: {item.price}$</td>
                    <td class="card-text">
                        <button  onClick={() => 
                            {
                            dispatch(minus(item));
                            dispatch(addQty(index))}}
                        class="btn btn-outline-dark">-</button> 
                        {item.cartQty} 
                        <button  class="btn btn-outline-dark" 
                        onClick={(e) => {e.preventDefault();
                         dispatch(plus(item)); 
                         dispatch(decreaseQty(index));}}>+</button></td>
                    <td><button onClick={() => 
                        {
                         dispatch(deleteFromCart(item));
                        }}class="btn btn-outline-dark">x</button></td>
                </tr>
          ))}
          </tbody>
          </table>
          </div>
          <button  class="b btn btn-outline-dark" onClick={()=>(window.confirm("are you done with your order?") == false) ? navigate("/Cart") : navigate("/Payment")}>go to payment</button>
        </>        
)
}

