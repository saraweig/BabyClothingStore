import { UseSelector, useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartAction"
import { decreaseQty } from "../redux/actions/productAction"
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import boyset from '../images/website/צילום מסך 2023-12-06 142557.png'
import girlset from '../images/website/צילום מסך 2023-12-06 142335.png'
export default function Sets() {
    const outwair = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [ind, setind] = useState(1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img src={boyset} style={{"width":"100%", "height":"330px","display":"block","margin-left": "auto", "margin-right": "auto","marginTop":"50px", "marginBottom":"50px"}}></img>
            <img src={girlset} style={{"width":"100%", "height":"330px","display":"block","margin-left": "auto", "margin-right": "auto","marginTop":"50px", "marginBottom":"50px"}}></img>
            <div id="wrap">
                {outwair.map((item, index) => (
                     (item.id >= 600 && item.id < 700) ? (
                    <div class="card" style={{ "width": "19rem;" }}>
                        <img src={item.image} alt={item.name} style={{"height":"300px", "width":"300px"}}></img>
                        <div class="card-body">
                            <p class="card-text">price: {item.price}$</p>
                            <button class="btn btn-outline-secondary" onClick={() => { handleShow(); setind(index) }}>More details</button>
                        </div>
                    </div>) : null

                ))}</div>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title className="fontDiv shasow">{outwair[ind].name}</Modal.Title>
                    <img src={outwair[ind].image} alt={outwair[ind].image} style={{"height":"200px", "width":"200px"}}></img>
                </Modal.Header>
                <Modal.Body className="fontButtonds">
                    <b> price:</b> {outwair[ind].price}
                    <br></br>
                    <b> description:</b> {outwair[ind].description}
                </Modal.Body>
                <Modal.Footer>
                    <button class="btn btn-outline-secondary" variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button class="btn btn-outline-secondary" variant="secondary" onClick={() => { dispatch(addToCart(outwair[ind])); dispatch(decreaseQty(ind)) }}>
                        Add to cart
                    </button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

