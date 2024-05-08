
import { Route, Routes } from 'react-router-dom';
import Home from"./Home"
import Outwair from "./outwair";
import Cart from "./myCart"
import Payment from "./payment"
import Blankets from './blankets';
import Footies from './footies';
import Accessories from './accessories';
import Pajamas from './pajamas';
import Sets from './sets';

export default function Navigator() {
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Outwair" element={<Outwair />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/Payment" element={<Payment />}/>
            <Route exact path="/Blankets & Swaddles" element={<Blankets />}/>
            <Route exact path="/Footies" element={<Footies />}/>
            <Route exact path="/Accessories" element={<Accessories />}/>
            <Route exact path="/Pajamas" element={<Pajamas />}/>
            <Route exact path="/Sets" element={<Sets />}/>
        </Routes>
        </>
   );
};