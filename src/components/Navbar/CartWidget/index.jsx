import { Button } from "react-bootstrap";
import Cart from "../../../assets/icons/carrito.png";
import "./style.css";

function CartWidget() {
    return (
        <button className="btnCarro" type="button">
      <div className="Carrito">
        <img src={Cart} alt="cart" className="cart-icon"/>
      </div>
       6
      </button>
    );
  }
  
  export default CartWidget;  