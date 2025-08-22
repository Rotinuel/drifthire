import Image from "next/image";
import Logo from "../public/logo.png";

export default function Home() {
  return (
    <>
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Image src={Logo} alt="logo" width="205" height="75" className="cursor-pointer" priority />
        <div className="">Right side</div>
      </div>
    </nav>
    <div className="text-center align-center">Welcome to Drift Hire</div>
    </>
    
  );
}
