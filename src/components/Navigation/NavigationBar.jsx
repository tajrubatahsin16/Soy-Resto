import { IoFastFoodOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const NavigationBar = () => {
    return (
        <div className="navbar bg-base-100 justify-around">
            <div className="flex gap-28">
                <div className="form-control">
                    <input type="text" placeholder="Search menu..." className="input input-bordered w-24 md:w-auto" />
                </div>
                <div>
                    <h6 className="text-slate-400">Order No:</h6>
                    <h3 className="font-bold">#14802</h3>
                </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="gap-10">
                <button className="btn"><GrPowerReset></GrPowerReset>Reset Order</button>
                <button className="btn"><BsPencilSquare></BsPencilSquare>Create a Note</button>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex gap-1">
                <div className="rounded-full bg-red-400 p-2">
                    <IoFastFoodOutline style={{ color: "white", fontSize: "1.5rem" }}></IoFastFoodOutline>
                </div>
                <div>
                    <h2 className="font-bold hover:italic text-xl">Soy Resto</h2>
                    <p className="text-slate-400 text-sm">Mon, 12 Jan</p>
                </div>
                <IoIosArrowDown className="text-slate-600"></IoIosArrowDown>
            </div>
        </div>
    );
};

export default NavigationBar;