import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import logo from "../assets/dinuwanLogo.png"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={50} height ={33}
            alt="logo"/>
            </a>

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/shashika-dinuwan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin">
                <FaLinkedinIn/>

            </a>
            <a href="https://github.com/Shashikadinuwan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
                <FaGithub/>

            </a>
            <a href="https://www.instagram.com/dinuwan.lk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
                <FaInstagram/>

            </a>
            <a href="https://www.facebook.com/share/dYxkAvewPYFJN7qQ/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
                <FaFacebook/>

            </a>
        </div>

    </nav>
  )
}

export default Navbar
