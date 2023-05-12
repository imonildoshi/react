import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/nav'
import QueryCom from "./components/query";
import Admin from "./components/admin";
import Profile from "./components/profile";
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          {/* <Route index element={<QueryCom />} /> */}
         
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/query" element={<QueryCom/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}