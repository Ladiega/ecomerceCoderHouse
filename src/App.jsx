import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

//REACT-ROUTER-DOM PACKAGE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//PAGES
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => {  
  return (
    <Router>
    <main>
      <NavBar />
      <ItemListContainer greeting={'Saludo con una prop'} />
    </main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/detail/:id" element={ <DetailPage/>} />
      </Routes>  
  </Router>
  )  
};
export default App
