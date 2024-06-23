import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return(
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
        <h2 className='nothing'>Тут поки порожньо</h2>
        </div>
    )
}

function Header (props) {
    let [cardOpen, setCardOpen] = useState(false)

    return (
        <header>
            <div className="header-content">
                <span className='logo'>Game Store</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                <FaShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`}/>

                {cardOpen && (
                    <div className='shop-card'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()
                        }
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}

export default Header;
