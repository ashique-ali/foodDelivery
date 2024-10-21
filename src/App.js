import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/pages/Homepage';
import Dashboard from './Components/Admin/adminDashboard';
import Addproduct from './Components/Admin/addProduct';
import Productlist from './Components/Admin/productList';
import Orderlist from './Components/Admin/orderList';
import ProductPage from './Components/pages/productPage/pdoductpage';
import { useEffect, useState } from 'react';
import loader from '../src/assets/loader.gif';

const routeData = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/product/:id',
    element: <ProductPage />
  },
  {
    path: '/admin',
    element: <Dashboard />,
    children: [
      {
        path: 'addproduct/:id',
        element: <Addproduct />
      },
      {
        path: 'productlist',
        element: <Productlist />
      },
      {
        path: 'orderlist',
        element: <Orderlist />
      }
    ]
  },
];
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div>
        {loading ? (
          <div className="loader d-flex align-items-center m-auto" style={{ width: "300px", height: "100vh" }}>
            <img className="w-100" src={loader} alt="loader" />
          </div>
        ) : (
          <BrowserRouter>
            <Routes>
              {routeData.map((item, index) => (
                <Route key={index} path={item.path} element={item.element}>
                  {item.children?.map((child, idx) => (
                    <Route key={idx} path={child.path} element={child.element} />
                  ))}
                </Route>
              ))}
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
