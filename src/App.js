import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/pages/Homepage';
import Dashboard from './Components/Admin/adminDashboard';
import Addproduct from './Components/Admin/addProduct';
import Productlist from './Components/Admin/productList';
import Orderlist from './Components/Admin/orderList';
import ProductPage from './Components/pages/productPage/pdoductpage';

const routeData = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/category/:id',
    element: <ProductPage />
  },
  {
    path: '/admin',
    element: <Dashboard />,
    children: [
      {
        path: 'addproduct',
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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
