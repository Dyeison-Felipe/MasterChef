import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center bg-cyan-500 h-24">
      <div>
        <img className="w-20" src="/Logo_Master_Chef.svg" alt="Logotipo do site" />
      </div>

      <div>
        ₢ Copyright - todos dos direitors reservados 2024
      </div>

      <div className="flex gap-8">
        <CiInstagram className="w-10 h-10"/>
        <CiFacebook className="w-10 h-10" />
        <FaWhatsapp className="w-10 h-10" />
      </div>
    </footer>
  )
}
