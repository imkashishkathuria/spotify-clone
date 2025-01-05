import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({name, desc, image, id}) => {

    const {playWithId} = useContext(PlayerContext);
  return (
    <div onClick={()=>playWithId(id)} className="min-w-[180px] p-1 px-5 rounded cursor-pointer hover:bg-[#ffffff26]">
    <img className="rounded w-[600px]" src={image} alt=""/>
    <p className="font-semibold mt-1 mb-1">{name}</p>
    <p className="text-slate-200 text-[11px]">{desc}</p>

    </div>
  )
}

export default SongItem