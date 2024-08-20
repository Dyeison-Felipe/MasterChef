import { Button } from "../../types/navbarButton";

export default function NavbarButton({ text, icon, onClick }: Button) {
  return (
    <button className="navbarButton" onClick={onClick}>  {text} {icon} </button>
  )
}
