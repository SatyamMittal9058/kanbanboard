import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { groupPriority, groupStatus, groupUsers } from "../utils/groupUtils";
import Card from "./Card";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Body = () => {

    const { grouping, tickets, ordering } = useSelector((store) => store.organise);
    const [data, setData] = useState([]);
    const handleGroup = () => {
        let groupStateData = [];
        if (grouping === 'User') {
            groupStateData = groupUsers(tickets);
        }
        else if (grouping === 'Priority') {
            groupStateData = groupPriority(tickets);
        } else {
            groupStateData = groupStatus(tickets);
        }
        const orderedGroupStateData = {};
        if (ordering === 'Title') {
            Object.keys(groupStateData).forEach((ticket) => {
                orderedGroupStateData[ticket] = groupStateData[ticket].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
            });
        } else {
            Object.keys(groupStateData).forEach((ticket) => {
                orderedGroupStateData[ticket] = groupStateData[ticket].sort((a, b) =>
                    b.priority - a.priority
                );
            });
        }
        setData(orderedGroupStateData);
    }
    useEffect(() => {
        handleGroup();
    }, [grouping, ordering, tickets]);
    console.log(data);
    
    return (
        <div>
            <div className="flex justify-between">
                {grouping==='Status' && Object.keys(data).map((status) => (
                    <div key={status} className="flex-1 p-4 ">
                        <h2 className="text-lg font-semibold">{status}</h2>
                        {data[status].map((ticket, i) => ( 
                             <Card key={i} data={ticket}/>
                        ))}

                    </div>
                ))};
                {grouping==='User' && Object.keys(data).map((status) => (
                    
                    <div key={status} className="flex-1 p-4 ">
                        <h2 className="text-lg font-semibold">{status}</h2>
                        {data[status].map((ticket, i) => ( 
                             <Card key={i} data={ticket}/>
                        ))}
                    </div>
                ))};
                {grouping==='Priority' && Object.keys(data).map((status) => (
                    <div key={status} className="flex-1 p-4 ">
                        <h2 className="text-lg font-semibold">{status}</h2>
                        {data[status].map((ticket, i) => ( 
                             <Card key={i} data={ticket}/>
                        ))}
                    </div>
                ))};
            </div>

        </div>
    )
}
export default Body;