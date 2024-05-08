import { UseSelector, useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartAction"
import { decreaseQty } from "../redux/actions/productAction"
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';

export default function Footies() {
    const outwair = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [ind, setind] = useState(1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <p class="title">Our Collection</p>
            <div id="wrap">
                {outwair.map((item, index) => (
                     (item.id >= 300 && item.id < 400) ? (
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

