import Header from './components/Header.js'
import MainBanner from './components/MainBanner'
import MiddleBanner from './components/MiddleBanner'
import TrendingProducts from './components/TrendingProducts'
import Footer from './components/Footer'
import {OrdersContextProvider, useOrders} from './contexts/OrdersContext'

function App() {

  return (
    <>
      <OrdersContextProvider>
        <MainBanner />
        <Header/>
        <MiddleBanner />
        <TrendingProducts />
        <Footer /> 
      </OrdersContextProvider>
    </>
  );
}

export default App;
