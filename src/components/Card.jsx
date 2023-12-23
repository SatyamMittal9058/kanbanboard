import { useSelector } from "react-redux";

const Card = (props) => {
    const  users  = useSelector((store) => store.organise.users);
    const { data } = props;
    const user=users.filter((user)=>user.id===data.userId);
    console.log(user[0].name);
    return (
        <div className="border border-gray-200 p-3 m-1 shadow-lg ">
            <div className="flex justify-between">
                <h1>{data.id}</h1>
                <h1 className="rounded-full text-center w-7 h-7 border border-gray-200 bg-blue-500">{user[0].name.split("").slice(0,1)}</h1>
            </div>
            <p>{data.title}</p>
        </div>
    )
}
export default Card;