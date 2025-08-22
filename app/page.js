import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="">left side</div>
        <div className="">Right side</div>
      </div>
    </nav>
    <div className="text-center align-center">Welcome to Drift Hire</div>
    </>
    
  );
}
