import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="px-5 md:px-0 py-5 md:py-10 max-w-[45rem] mx-auto">
      <ul className="flex">
        <li className="text-2xl font-bold z-20">
          {/* <Image src="/logo1.png" alt="logo" width={100} height="100" /> */}
          Zetsu
        </li>

        <li className="flex-1"></li>

        <li className="mr-5">
          <Image src="/images/User.svg" alt="user" width={24} height={24} />
        </li>

        <li>
          <Image src="/images/Shopping.svg" alt="user" width={24} height={24} />
        </li>
      </ul>
    </nav>
  );
}
