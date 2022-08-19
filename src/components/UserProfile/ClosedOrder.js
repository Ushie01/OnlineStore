import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { myOrders } from '../../helpers/api';
import order from '../../assets/order.svg';
import Yes from '../../assets/Yes.svg';
import No from '../../assets/No.svg'

const ClosedOrder = () => {
    const [orders, setOrders] = useState([]);
    const fetchOrders = async () => {
        const getOrder = await myOrders();
        setOrders(getOrder);
    }

    useEffect(() => {
        fetchOrders()
    }, []);


    return (
        <>
            {orders.length ?
                <div>
                    {orders?.map((value, index) => (
                        <div>
                            {value.isPaid === true && value.isDelivered ?
                                <div className='profile'>
                                    {
                                        value?.orderItems?.map((val) => (
                                            <div className='accountDet'>
                                                <header key={index}>
                                                    <img src={`http://store-betta.herokuapp.com${val.image}`}
                                                        alt={value.image}
                                                        className='summary-Image'
                                                    />
                                                    <div className='summary-Body'>
                                                        <p className='value-name val-name'>{val.name}</p>
                                                        <p className='value-price'>&#x20A6;{val.price}</p>
                                                        <p className='value-quantity'>{`Qty: ${val.qty}`}</p>
                                                        <p className='value-name'>Paid: {val.isPaid === true ? <img src={Yes} alt={Yes} /> : <img src={No} alt={No} />} </p>
                                                        <p className='value-quantity value-quantity-o'>{`Order ID: ${value._id}`}</p>
                                                        <p className='value-name'>{`Created At: ${value.createdAt}`}</p>
                                                    </div>
                                                </header>
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                ""}
                        </div>
                    ))}
                </div>
                :
                <div className=''>
                    <img src={order} alt={order} className="emptyInbox" />
                    <p className='emptyInboxP'>You have placed no orders yet!</p>
                    <p className='emptyInboxPP'>All your orders will be saved here for you to access their state anytime.</p>
                    <div className='continuebutton'>
                        <Link to="/PostDetails">
                            <button id="continueShopping"> CONTINUE SHOPPING </button>
                        </Link>
                    </div>
                </div>

            }
      </>

  )
}

export default ClosedOrder
