import logo from "../assets/shopnow.png";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

import { FaFacebook } from "react-icons/fa";
function Footer() {
    return (
        <div  className=" container-fluid footer bg-primary text-light pt-2 d-flex flex-wrap justify-content-around text-center " > 
          <div className="row p-2">
            <div className="col-12 col-sm-3">
                <img src={logo} alt="logo" className="w-50" />
            </div>
            <div className="col-12 col-sm-3">
                <h3>Online Shopping</h3>
                <ul >
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Electronics</li>
                    <li>Home</li>
                    <li>Login</li>
                    <li>SingUp</li>
                    
                </ul>
            </div>
            <div className="col-12 col-sm-3">
                <h3>Let Us Help You</h3>
                <ul>
                    <li>Your Account </li>
                    <li>Returns Center</li>
                    <li>Product Safety </li>
                    <li>100% Purchase </li>
                    <li>Download</li>
                    <li>Login</li>
                    <li>SingUp</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="col-12 col-sm-3">
                <h3>Connect with us</h3>
                <ul>
                    <li>Facebook <FaFacebook /></li>
                    <li>Twitter <FaTwitter /> </li>
                    <li>Instagram <AiOutlineInstagram /> </li>
                  </ul>
            </div>
          </div>

        </div>
    )
}

export default Footer;