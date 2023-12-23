import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import { faCircleChevronDown, faCircleChevronUp, faSliders } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { addTickets, addUsers, groupingState, orderingState } from "../store/organiseSlice";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [load, setload] = useState(true);
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await axios('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        dispatch(addTickets(response.data.tickets));
        dispatch(addUsers(response.data.users));
    }
    useEffect(() => {
        if (load) {
            fetchData();
            setload(!load);
        }
    }, [])

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="bg-slate-100 p-5">
                <div className="">
                    <button
                        type="button"
                        className="justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-2xl bg-white text-md font-bold text-gray-700 hover:bg-gray-50 "
                        onClick={toggleDropdown}
                    >
                        <FontAwesomeIcon className="mx-1" icon={faSliders} />
                        Dropdown
                        {isOpen ? <FontAwesomeIcon className="mx-1" icon={faCircleChevronUp} /> : <FontAwesomeIcon className="mx-1" icon={faCircleChevronDown} />}
                    </button>

                    {isOpen && (
                        <div className="absolute w-60 rounded-md shadow-lg bg-white border border-gray-300">
                            <div className="p-4" >
                                <span className="flex justify-between m-1">
                                    <label className="font-bold text-gray-500" >Grouping</label>
                                    <select className="p-1 border border-gray-150 rounded-lg" onChange={(e)=>dispatch(groupingState(e.target.value))}>
                                        <option>Status</option>
                                        <option>User</option>
                                        <option>Priority</option>
                                    </select>
                                </span>
                                <span className="flex justify-between m-1">
                                    <label className="font-bold text-gray-500" >Ordering</label>
                                    <select className="p-1 border border-gray-150 rounded-lg" onChange={(e)=>dispatch(orderingState(e.target.value))}>
                                        <option>Priority</option>
                                        <option>Title</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}
export default Header;