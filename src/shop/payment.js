import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
export default function Payment() {
    const navigate = useNavigate()
    const items = useSelector((state) =>state.cartReducer);
    var sum = 0;
    return (
        <>
            <p class="title">Your Order</p>
            <div id="table" class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => {
                            sum += item.cartQty * item.price;
                            return (
                                <tr key={item.id}>
                                    <td><img id="tblimg" src={item.image}></img></td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.cartQty}</td>
                                    <td>{item.cartQty * item.price}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td id="total">Total price:</td>
                            <td>{sum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <button class="b btn btn-outline-dark" onClick={() => (useEffect(() => (
                (window.confirm("are you done with your order?") == false) ? navigate("/Cart") : null), []))}>Pay Now</button > */}

            <button class="b btn btn-outline-dark">Pay Now</button>

        </>
    )
}

