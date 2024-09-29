import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return (
        <div className="flex justify-between items-center ">
            <img className="w-16 h-16" src={LOGO_URL} />
            <h1 className="mr-36 font-bold">My Restaurants</h1>

        </div>
    );
};

export default Header;