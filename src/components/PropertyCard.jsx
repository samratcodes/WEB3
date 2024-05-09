import sampleImg from "../assets/realState.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { MdHouseSiding } from "react-icons/md";
import { PiMapPinArea } from "react-icons/pi";

const sampleData = {
  title: "OpulentOasis Residence",
  location: "Nepal Kathmandu",
  area: 162,
  rooms: 12,
  Beds: 3,
};
export default function PropertyCard() {
  return (
    <div className="flex flex-col bg-white p-3 max-w-sm items-center rounded-2xl hover:shadow-md">
      <div className="rounded-2xl overflow-hidden w-[96%] min-h-[230px]">
        <img src={sampleImg} alt="img" className="w-full h-full " />
      </div>
      <div className="flex flex-col w-[96%] gap-2 mt-4">
        <p className="font-bold font-inter ml-1">{sampleData.title}</p>
        <div className="flex  items-center gap-4 line-clamp-1 font-medium">
          <IoLocationOutline size={20} className="text-red-500" />{" "}
          <span>{sampleData.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <MdHouseSiding size={20} />
            <span>{sampleData.rooms} rooms</span>
          </div>
          <div className=" flex gap-2 items-center">
            <FaBed size={20} />
            <span>{sampleData.rooms} beds</span>
          </div>
          <div className=" flex gap-2 items-center">
            <PiMapPinArea size={20} />
            <span>{sampleData.rooms} sq feets</span>
          </div>
        </div>
      </div>
    </div>
  );
}
