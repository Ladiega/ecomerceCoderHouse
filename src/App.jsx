import { useState, useEffect } from "react";

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

import CardItems from "./components/CardItems/Carditems";

//Firebase
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from 'firebase/firestore'

const App = () => {  
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    const getIcons = async () => {
      const q = query(collection(db, 'items'));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " =>", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemsData(docs);
    };
    
    getIcons();    
  }, []);

  return (
    <Router>
    <main>
      <NavBar />
        <ItemListContainer greeting={''} />
        {itemsData.map((items) => {
          return <CardItems itemsData={items} key={items.id}/>
        })}
       
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
