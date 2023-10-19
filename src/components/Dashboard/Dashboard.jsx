import MainItems from "../MainItems/MainItems";
import { BsPlusSquareDotted } from "react-icons/bs";
import { TiCalendarOutline } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa6";
import { PiChatsDuotone } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import img1 from '../../assets/propic.jpg';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="w-auto drawer-content bg-base-200">
                <MainItems></MainItems>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-20 min-h-full bg-white text-base-content gap-3">
                    <li><a><BsPlusSquareDotted style={{ fontSize: "1.5rem" }}></BsPlusSquareDotted></a></li>
                    <li><a><MdOutlineStickyNote2 style={{ fontSize: "1.5rem" }}></MdOutlineStickyNote2></a></li>
                    <li><a className="rounded-lg bg-red-400"><TiCalendarOutline style={{ fontSize: "1.5rem", color: "white" }}></TiCalendarOutline></a></li>
                    <li><a><AiOutlineClockCircle style={{ fontSize: "1.5rem" }}></AiOutlineClockCircle></a></li>
                    <li><a><FaChartLine style={{ fontSize: "1.5rem" }}></FaChartLine></a></li>
                    <li><a><PiChatsDuotone style={{ fontSize: "1.5rem" }}></PiChatsDuotone></a></li>
                    <li><a><GoPeople style={{ fontSize: "1.5rem" }}></GoPeople></a></li>
                    <div className="mt-44">
                        <li><a><IoSettingsOutline style={{ fontSize: "1.5rem" }}></IoSettingsOutline></a></li>
                        <li><a><img src={img1} alt="" width={"35px"} height={"5px"} className="rounded-full" /></a></li>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;