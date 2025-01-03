import { useNavigate } from "react-router-dom"

const SongItem = ({name, desc, image, id}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/song/${id}`)} className="min-w-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
    <img className="rounded" src={image} alt=""/>
    <p className="font-semibold mt-1 mb-1">{name}</p>
    <p className="text-slate-200 text-[11px]">{desc}</p>

    </div>
  )
}

export default SongItem