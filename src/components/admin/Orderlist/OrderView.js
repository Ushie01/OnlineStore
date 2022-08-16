import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getSingleOrder } from '../../../helpers/api';

const OrderView = () => {
  const [order, setOrder] = React.useState();
  const [loading, setLoading] = React.useState(false);
    const [orderId, setOrderId] = useState('');
    console.log(orderId);
    const { id } = useParams();

    const fetchData = async () => {
        const data = await getSingleOrder(id);
        setOrder(data);
        setOrderId(data._id);
    };
  
  useEffect(() => {
    setLoading(true)
    if (loading) {
      fetchData();
    }
    return () => setLoading(false)
  }, [loading]);
    
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 addProduct'>
            <div className='add-form'>
              <h1>{`Order Id : ${order?._id}`}</h1>
                <hr />
                <form>
                    <div>
                        <label className='form-label'>Address*</label>
                        <h1>{order?.shippingAddress?.address}</h1>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>City*</label>
                        <h1>{order?.shippingAddress?.city}</h1>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>Postal Code*</label>
                        <h1>{order?.shippingAddress?.postalCode}</h1>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>Country*</label>
                        <h1>{order?.shippingAddress?.country}</h1>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>Total Price*</label>
                        <h1>{order?.totalPrice}</h1>
                    </div>
                    <hr />
                    <div className=''>
                        <label className='form-label'>Order Items*</label>
                        <>
                          {order?.orderItems?.map((item, index) => (
                            <div key={index}>
                              <h1>{`Name: ${item.name}`}</h1>
                              <h1>{`Price: ${item.price}`}</h1>
                              <h1>{`Quantity: ${item.quantity}`}</h1>
                              <img src={`https://store-betta.herokuapp.com${item.image}`} alt={item.image} />
                            </div>
                          ))}
                        </>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>Payment Method*</label>
                        <h1>{order?.paymentMethod}</h1>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>Created At*</label>
                        <h1>{order?.createdAt}</h1>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>Updated At*</label>
                        <h1>{order?.updatedAt}</h1>
                    </div>
                    <hr />
                    <div>
                        <label className='form-label'>Delivered At*</label>
                        <h1>{order?.deliveredAt}</h1>
                    </div>
                    <hr />
                    <div className='row'>
                      <button id="saveButton"> OK  </button>
                    </div>
                </form>
            </div>
         </div>
        </div>
        </div>
    </div>
  )
}

export default OrderView
