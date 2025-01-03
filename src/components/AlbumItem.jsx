
const AlbumItem = ({name, image, desc, id}) => {
  return (
    <div className="min-w-[100px] p-1 px-5 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt=""/>
        <p className="font-semibold mt-1 mb-1">{name}</p>
        <p className="text-slate-200 text-[11px]">{desc}</p>

    </div>
  )
}

export default AlbumItem