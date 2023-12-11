import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";



const App = () => {  
  return (
    <main>    
      <NavBar />
      <ItemListContainer greeting={'Saludo'} />
    </main>
  )  
};
export default App