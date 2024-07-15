import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex justify-between text-blue-700 mx-6">
      <li className=" ">
        <Link href="/">Home</Link>
      </li>
      <li className=" ">
        <Link href="/about">About</Link>
      </li>
      <li className="">
        <Link href="/cabins">Cabins</Link>
      </li>
      <li className="">
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
}
export default Navigation;
