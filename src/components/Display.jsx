import { Route, Routes } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"


const Display = () => {
  return (
    <div className="w-[100%] m-2 px-2 pt-1 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
        <Routes>
            <Route path="/" element={<DisplayHome />} />
            <Route path="/album/:id" element={<DisplayAlbum />} />
        </Routes>
    </div>
  )
}

export default Display