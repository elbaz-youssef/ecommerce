import logo from '@/assets/logo.png';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="logo" loading="lazy" />
            </Link>
        </div>
    )
}

export default Logo;