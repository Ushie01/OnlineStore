import React, { useEffect } from "react";
import { getOrderDetails } from "../../../helpers/api";
import { Link } from "react-router-dom";
import Yes from '../../../assets/Yes.svg';
import No from '../../../assets/No.svg';

function Orderlist() {
  const [order, setOrder] = React.useState();
  const [loading, setLoading] = React.useState(false);


  const fetchData = async () => {
    const data = await getOrderDetails();
    setOrder(data);
  }
  
  useEffect(() => {
    setLoading(true)
    if (loading) {
      fetchData();
    }

    return () => setLoading(false)
  }, [loading]);

  return (
    <div>
      <div className="container">
        <div className="row ttable">
          <h1>Product</h1>
        </div>
        <hr />
        <div className="container">
          <div className="row" style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USER</th>
                  <th>DATE</th>
                  <th>PRICE</th>
                  <th>PAID AT</th>
                  <th>DELIVERED</th>
                  <th>EDIT</th>
                </tr>
              </thead>
              {order?.orders?.map((orderDetail, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      {/* {orderDetail?.orderItems?.map((item) => (
                        <div className="">
                          <p>{item?.name}</p>
                          <p>{item?.price}</p>
                        </div>
                      ))} */}
                      {orderDetail._id}
                    </td>
                    <th></th>
                    <td>{orderDetail.updatedAt}</td>
                    <td>{orderDetail.totalPrice}</td>
                        {
                          orderDetail.isPaid 
                          ?
                        <td><img src={Yes} alt={Yes} /></td>
                          :
                          <td><img src={No} alt={No}/></td>
                        }
                        {
                          orderDetail.isDelivered
                          ?
                          <td><img src={Yes} alt={Yes} /></td>
                          :
                          <td><img src={No} alt={No}/></td>
                        }
                    <td>
                      <Link to={`/Admin/Orderlist/${orderDetail._id}`}>
                         <button style={{color:"green"}} >Details</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderlist;

// import React, { Component } from 'react'
// import { getOrderDetails } from '../../../helpers/api';

// class Orderlist extends Component {
//   state = { order: [] };

//   componentDidMount() {
//     this.onTermSubmit()
//   }

//   onTermSubmit = async () => {
//     const response = await getOrderDetails()
//     this.setState({ order: response });
//     console.log({ order: response });
//   };

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default Orderlist;
