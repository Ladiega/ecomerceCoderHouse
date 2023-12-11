import CardWidget from "../CartWidget/CartWidget";



export default function NavBar() {
  return (
    <nav className="">
      <ul className="p-2 flex gap-3 justify-between bg-slate-600 text-white ">
        <li className="p-3 mx-4 hover:bg-slate-700 rounded-sm"><a href="/">Item1</a></li>
        <li className="p-3 hover:bg-slate-700 rounded-sm"><a href="/">Item2</a></li>
        <li className="p-3 hover:bg-slate-700 rounded-sm"><a href="/">Item3</a></li>
        <li className="mx-4">
          <CardWidget />
        </li>
      </ul>
      
        
     
    </nav>
  )
}