import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { getProductsDetails } from './helpers/api';
import NavBar from './components/NavBar'
import New from './pages/New/New'
import Home from './pages/Home/Home'
import SliderTwo from './pages/Home/SliderTwo'
import CarouselProduct from './components/CarouselProduct';
import UserViews from './pages/Home/UserViews.jsx'
import Cart from './components/Counter/Cart'
import About from './pages/About'
import Footer from './components/Footer'
import LoginForm from './pages/Contact';
import ProductDetails from './components/ProductDetails/ProductDetails'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'
import Signout from './pages/auth/Signout';
import Orderlist from './components/admin/Orderlist/Orderlist';
import Productslist from './components/admin/ProductUser/Productslist'
import Userlist from './components/admin/Userlist/Userlist';
import EditUser from './components/admin/Userlist/EditUser';
import EditProducts from './components/admin/ProductUser/EditProducts'
import CreateProducts from './components/admin/ProductUser/CreateProducts';
import Pagination from './components/Pagination';
import OrderView from './components/admin/Orderlist/OrderView';
import UserProfile from './components/UserProfile/UserProfile';
import Account from './components/UserProfile/Account';
import Order from './components/UserProfile/Order';
import Inbox from './components/UserProfile/Inbox';
import SavedItem from './components/UserProfile/SavedItem';
import CreateNewLogin from './pages/auth/CreateNewLogin';
import ClosedOrder from './components/UserProfile/ClosedOrder';
import OpenOrder from './components/UserProfile/OpenOrder';
import CheckOut from './components/Counter/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  //PAGINATION
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const products = await getProductsDetails();
    setData(products)
  }

  useEffect(() => {
    setLoading(true)
    if (loading) {
      fetchData();
    }
    return () => setLoading(false)
  }, [loading]);

  // console.log(user);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data?.products?.slice(indexOfFirstPost, indexOfLastPost)     
  // paginate func
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <> 
        <NavBar />
            <Routes>
                <Route path='/' element={<> <CarouselProduct /> <Home /> <SliderTwo /> <UserViews /> </> } />
                <Route path='/ProductDetails/:_id' element={<> <ProductDetails /> </>} />
                <Route path='/New' element={<><New 
                       data={data}
                       currentPost={currentPost} /> <Pagination 
                       postsPerPage={postsPerPage} 
                       totalPosts={data?.products?.length} 
                       paginate={paginate} /> </> }/>
                <Route path='/page/:number' element={<New />}/>
                <Route path='/About' element={ <About /> } />
                <Route path='/Contact' element={ <LoginForm /> } />  
                <Route path='/Admin/Orderlist' element={<Orderlist />} />
                <Route path='/Admin/Orderlist/:id'  element={<OrderView/>} />
                <Route path='/Admin/Productslist' element={<><Productslist 
                       currentPost={currentPost}/> <Pagination 
                       postsPerPage={postsPerPage} 
                       totalPosts={data?.products?.length} 
                       paginate={paginate} /></>} />
                <Route path='/Admin/ProductsList/EditProducts/:_id' element={<EditProducts />}/>
                <Route path='/Admin/ProductsList/CreateProducts' element={<CreateProducts />}/>      
                <Route path='/Admin/Userlist/EditUser/:id' element={<EditUser />}/>
                <Route path='/Admin/Userlist' element={<Userlist />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Signup" element={<Signup />}/>   
                <Route path="Signin" element={<Signin />} />   
                <Route path="/Signout" element={<Signout/>} />  
                <Route path='/CheckOut' element={<CheckOut />} />
                {/* <Route path='/PaymentStatus' element={<PaymentStatus />}/> */}
                <Route path='/UserProfile' element={<UserProfile />} >
                  <Route index='Account' element={<Account />}/>
                  <Route path='Account' element={<Account />}/>
                  <Route path='Order' element={<Order/>}>
                    <Route index="OpenOrder" element={<OpenOrder />} />
                    <Route path="OpenOrder" element={<OpenOrder />} />
                    <Route path='ClosedOrder' element={<ClosedOrder />}/>
                  </Route>
                  <Route path='Inbox' element={<Inbox />}/>
                  <Route path='SavedItem' element={<SavedItem />}/>
                </Route>
                <Route path='/createnewpassword' element={<CreateNewLogin />} />
                <Route path="*" element={<main><h1>There's nothing here!</h1></main>}/>
            </Routes> 
        <Footer />
    </>
  );
}

export default App

/**********Sanity Fetch************/
  
  // const [postData, setPost] = useState(null);
  //   useEffect(() => {
  //       sanityClient.fetch(`*[_type == "post"]{
  //           _id, title, slug, strike, span, mainImage{
  //               asset->{_id,url}
  //           },alt
  //       }`)
  //         .then((data) => setPost(data))
  //         .catch(console.error);

  //   }, []); 