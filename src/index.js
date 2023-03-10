import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Carrinho from './routes/Carrinho';
import App from './App';
import Theme from "./styles/Theme";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'
import { Provider} from 'react-redux';
import store from "./features/store";

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/carrinho',
        element: <Carrinho/>
      },
    ]
  }
])



root.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </Provider>
  </ThemeProvider>

);

