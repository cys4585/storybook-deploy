import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardEnrollComplete from "./components/payment/CardEnrollComplete";
import CardEnrollForm from "./components/payment/CardEnrollForm";

function App() {
  return (
    <BrowserRouter basename={"/react-payments/"}>
      <Routes>
        <Route path="/" element={<CardEnrollForm />} />
        <Route path="/card-enroll-complete" element={<CardEnrollComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
