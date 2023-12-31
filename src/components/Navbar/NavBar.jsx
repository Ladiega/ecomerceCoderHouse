import CardWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="">
      <ul className="p-2 flex gap-3 justify-between bg-slate-600 text-white ">
        <li className="p-3 mx-4 hover:bg-slate-700 rounded-sm"><Link to="/">Home</Link></li>
        <li className="p-3 hover:bg-slate-700 rounded-sm"><Link to="/about">About</Link></li>
        <li className="p-3 hover:bg-slate-700 rounded-sm"><Link to="/contact">Contact</Link></li>
        <li className="mx-4">
          <CardWidget />
        </li>
        
      </ul>
      
        
     
    </nav>
  )
}