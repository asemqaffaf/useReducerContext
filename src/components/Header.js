import {

    Link
} from "react-router-dom";
const Header = () => {
    return (
        <div>
            <Link to='/home'>
                <p>
                    Home
            </p>
            </Link>
            
            <Link to='/aboutus'> 
                       <p>
                About-us
            </p>
            </Link>
            <Link to='/contactus'> 
                       <p>
                       Contact-Us
            </p>
            </Link>

        </div>
    );
}

export default Header;
