import { useEffect, useState } from 'react';
import { getState } from '../../helpers/api';
import { getCity } from '../../helpers/api';
import { toast } from 'react-toastify';


export const useUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userDetail = localStorage.getItem('user');
        const user = JSON.parse(userDetail);
        if (user) {
            setUser(user);
        }
    }, []);
  
    return { user };
}; 


export const useAddress = () => {
    const [userAddress, setUserAddress] = useState({});

    useEffect(() => {
        const userDetail = localStorage.getItem('userAddress');
        const user = JSON.parse(userDetail);
        if (user) {
            setUserAddress(user);
        }
    }, []);
  
    return { userAddress };
}; 


export const useCart = () => {
    const [userCart, setUserCart] = useState([]);

    useEffect(() => {
        const userDetail = localStorage.getItem('cart');
        const user = JSON.parse(userDetail);
        if (user) {
            setUserCart(user);
        }
    }, []);

    return { userCart };
};


export const usePrice = () => {
    const [userPrice, setUserPrice] = useState({});

    useEffect(() => {
        const userDetail = localStorage.getItem('priceItem');
        const user = JSON.parse(userDetail);
        if (user) {
            setUserPrice(user);
        }
    }, []);

    return { userPrice };
};


export const useLocation = () => {
    const [state, setState] = useState([]);
    const [stateId, setStateId] = useState('');
    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getStateLocation = async () => {
        const requestState = await getState();
        setState(requestState);
    };


    useEffect(() => {
        setLoading(true)
        if (loading) {
            getStateLocation();
        }
        return () => setLoading(false)
    }, [loading]);


    const getCityLocation = async () => {
        const res = await getCity(stateId);
        setCity(res);
    }


    useEffect(() => {
        setLoading(true)
        if (loading) {
            getCityLocation();
        }

        return () => setLoading(false)
    }, [stateId])

    return { state, city, setStateId };
};


export const successToast = () => {
    toast.success('Successful Request!!! 😍', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};


export const failedToast = () => {
    toast.error('Failed Request!!! 😢', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};


export const cartToast = () => {
    toast.success('Added to Cart Successfully!!! 😍', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const alreadyAddCartToast = () => {
    toast.error('Item already added to Cart!!! 🥱', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};


export const cartDeletetToast = () => {
    toast.error('Item already added to Cart!!! 🥱', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}



 


