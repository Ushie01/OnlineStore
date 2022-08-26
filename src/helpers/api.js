const baseUrl = 'https://store-betta.herokuapp.com/api';
const baseUrL = 'https://api.facts.ng/v1';


//Login n Register Export
export const createUser = async (payload) => { 
    try {
        return await( await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}


export const getLoginUser = async (payload) => { 
    try {
        return await( await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const updateUserLoginDetails = async (payload) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/profile`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails.token}`,
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.error(error)
    }
}
//Product Export

export const getTopProductsDetails = async () => {
    try {
    return await( await fetch(`${baseUrl}/products/top`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}


export const getProducts = async () => {
    try {
    return await( await fetch(`${baseUrl}/products`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}


export const getSingleProductDetails = async (_id) => {
    try {
    return await( await fetch(`${baseUrl}/products/${_id}`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    }
    })).json()
    } catch (error) {
        console.error(error)
    } 
}


export const getProductsDetails = async () => { 
    try {
        return await( await fetch(`${baseUrl}/products/all`, {
        method: 'GET',
        headers: {
           'Content-type': 'application/json',
        }
    })).json()
    } catch (error) {
        console.error(error)
    }   
}


export const deleteProductsDetails  = async (_id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/products/${_id}`, {
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${parsedDetails.token}`,
        },
    })).json()
    } catch (error) {
        console.error(error)
    }   
}


export const updateProductsDetails = async (_id, payload) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails.token}`,
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.error(error)
    }
}


export const createProductsDetails = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/products`, {
        method: 'POST',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}


//User Export 
export const getUserDetails = async () => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        }
    })).json()
    } catch (error){
        console.error(error)
    }   
}


export const getUserProfile = async (_id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${_id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        }
    })).json()
    } catch (error){
        console.error(error)
    }   
}


export const updateUser = async (_id, payload) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails.token}`,
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.error(error)
    }
}



export const userDelete = async (_id) => {
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/users/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${parsedDetails.token}`,
            }
        })).json()
    } catch (error) {
        console.error(error)
    }
}

//Order Export
export const getOrderDetails = async () => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders/allorders`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        }
    })).json()
    } catch (error){
        console.error(error)
    }   
}

export const getSingleOrder = async (_id) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders/${_id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        }
    })).json()
    } catch (error){
        console.error(error)
    }   
}

export const myOrders = async () => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders/myOrders`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        }
    })).json()
    } catch (error){
        console.error(error)
    }   
}

export const postOrder = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/orders`, {
        method: 'POST',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}

export const upLoadFile = async (payload) => { 
    try {
        const userDetails = localStorage.getItem('user');
        const parsedDetails = JSON.parse(userDetails);
        return await( await fetch(`${baseUrl}/upload`, {
        method: 'POST',
            headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${parsedDetails.token}`,
        },
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}


// https://api.facts.ng/v1
export const getState = async () => {
    try {
        return await (await fetch(`${baseUrL}/states`, { 
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })).json()
    } catch (error) {
        console.error(error)
    }
}


export const getCity = async (_id) => {
    try {
        return await (await fetch(`${baseUrL}/states/${_id}`,{
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            }
        })).json()
    } catch (error) {
       console.error(error) 
    }
}


export const flutterWave = async (payload) => { 
    try {
        return await( await fetch("/v3/payments", {
        method: 'POST',
            headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer FLWSECK_TEST-f9a4c7c8c6ee1b256fa1904bc10c67c6-X',
            
        }, 
        body: JSON.stringify(payload)
    })).json()
    } catch (error) {
        console.error(error)
    }
}


export const FlutterPaymentStatus  = async (req, res) => {
    try {
        return await (await fetch(`/payment-callback`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer FLWSECK_TEST-f9a4c7c8c6ee1b256fa1904bc10c67c6-X',
            }
        })).json(req, res)
    } catch (error) {
       console.error(error) 
    }
}
// export const FlutterPaymentStatus
// app.get('/payment-callback', async (req, res) => {
//     if (req.query.status === 'successful') {
//         const transactionDetails = await Transaction.find({ref: req.query.tx_ref});
//         const response = await flw.Transaction.verify({id: req.query.transaction_id});
//         if (
//             response.data.status === "successful"
//             && response.data.amount === transactionDetails.amount
//             && response.data.currency === "NGN") {
//             // Success! Confirm the customer's payment
//         } else {
//             // Inform the customer their payment was unsuccessful
//         }
//     }
// );