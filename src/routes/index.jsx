import { createBrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import {
  Cart,
  CompletePayment,
  Checkout,
  Home,
  Login,
  Menu,
  Register,
} from '../containers';
import { Header } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />,
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />,
      </>
    ),
  },
  {
    path: '/carrinho',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/complete',
    element: <CompletePayment />,
  },
]);
