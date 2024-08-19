import { Button } from "../../types/navbarButton";

export default function NavbarButton({ text, icon }: Button) {
  return (
    <button className="navbarButton">{text} {icon}</button>
  )
}
