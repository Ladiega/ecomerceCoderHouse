import { useNavigate } from "react-router-dom"

export default function BackHome() {
  const navigate = useNavigate();

  return (
    <>
      <button className=" bg-slate-600 p-2 rounded-sm text-white hover:bg-slate-500" onClick={() => navigate('/')}>Regresar al Home</button>

    </>
  )
}