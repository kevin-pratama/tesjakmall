import {BrowserRouter, Routes, Route} from "react-router-dom";
import DeliveryPage from "./feature/Delivery/DeliveryPage";
import PaymentPage from "./feature/payment/PaymentPage";
import PreviewPage from "./feature/preview/PreviewPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<DeliveryPage />} />
    <Route path="/payment"element={<PaymentPage />} />
    <Route path="/preview"element={<PreviewPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
