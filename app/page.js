import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";

export default function Home() {
  const navList = [
    {name: "Find Work", href: "#"},
    {name: "Find Worker", href: "#"},
    {name: "Services", href: "#"},
    {name: "Skills Tests", href: "#"},
    {name: "Blog", href: "#"},
    {name: "More Info", href: "#"},
  ]
  return (
    <>
      <nav className="fixed w-full h-16 shadow-xl bg-white">
        <div className="flex justify-between items-center w-full h-full px-0 md:px-28 gap-2">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src={Logo}
              alt="logo"
              width="180"
              height="180"
              className="cursor-pointer lg:w-48 lg:h-48 w-40 h-30"
              priority
            />
          </Link>
          <div className="hidden lg:flex gap-16 text-base font-semibold">
            {navList.map((item) => (
              <Link key={item.href} href={item.href}>{item.name}</Link>
            ))}
          </div>
          <div className="lg:mr-10 mr-18">
            <button className="px-4 py-2.5 md:px-8 md:py-3 rounded-lg bg-[#439fe4] text-white text-medium font-bold">Sign In</button>
          </div>
        </div>
      </nav>
      <div className="bg-white mt-120px">hello</div>
    </>
  );
}
