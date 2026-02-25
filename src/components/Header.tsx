import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className=" pr-2 flex justify-between items-center bg-linear-to-b from-[#279dcd] to-[#c88767]">
        <img className="h-14" src="/hero.jpg" alt="quiz buzz hero image"/>
        <ModeToggle/>
    </div>
  )
}
