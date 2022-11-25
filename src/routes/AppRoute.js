import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuoteGenerator from '../pages/QuoteGenerator';
import Home from '../pages/Home';

const AppRoute = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/quote`} element={<QuoteGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute;