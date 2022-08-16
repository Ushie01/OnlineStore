import React from 'react';
import { useLocation } from "react-router-dom";

const PaymentStatus = () => {

    const search = useLocation().search;
    const transaction_id = new URLSearchParams(search).get('transaction_id');
    const tx_ref = new URLSearchParams(search).get('tx_ref');
    const status = new URLSearchParams(search).get('status');

    const Transaction = { transaction_id, tx_ref, status };
    console.log(Transaction);

    // const fetchData = async () => {
    //     if (req.query.status === 'successful') {
    //         const transactionDetails = await Transaction.find({ ref: req.query.tx_ref });
    //         const response = await flw.Transaction.verify({ id: req.query.transaction_id });
    //         if (
    //             response.data.status === "successful"
    //             && response.data.amount === transactionDetails.amount
    //             && response.data.currency === "NGN") {
    //              console.log("Successful Payment!!!")
    //         } else {
    //              console.log("Failed Payment!!!")
    //         }
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);



    return (
        <div>
            <h1>Items page</h1>
            <p>{transaction_id}</p>
            <p>{tx_ref}</p>
            <p>{status}</p>
        </div>
    );
};

export default PaymentStatus;