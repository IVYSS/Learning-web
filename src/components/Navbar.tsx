import Image from "next/image";
import Link from "next/link";

export function Navbar({ tab }: { tab: string[] }) {
  return (
    <div>
      <div className="sticky flex justify-center text-center items-center px-6  w-full  h-12.5 border-b border-white-3 bg-white">
        <div className="h-full items-center justify-center object-center flex gap-6">
          <Image
            width={50}
            height={50}
            src={"https://media.geeksforgeeks.org/gfg-gg-logo.svg"}
            alt="logo"
          />

          <input
            className="w-62 border rounded-3xl border-green-2 h-9.25 p-2.5"
            placeholder="Search.."
          />
        </div>
        <ul className="flex flex-2 gap-10 pl-50">
          <li>
            <p>Courses</p>
          </li>
          <li>
            <p>Tutorials</p>
          </li>
          <li>
            <p>Interview Prep</p>
          </li>
        </ul>
        <ul className="flex-end flex gap-3 h-full  text-center justify-center items-center ">
          <li className="rounded-4xl bg-white-3 w-9 h-9 p-2 text-black">i</li>
          <li className="bg-black text-white rounded-md h-9.25 w-18.25  p-2 text-[14px]">
            <Link href={"/login"}>Sign In</Link>
          </li>
        </ul>
      </div>
      <div className="flex text-center justify-center text-[11px]">
        {tab.map((tab, id) => (
          <Link
            href={"/login"}
            className="bg-white p-[10px] mr-[15px] hover:text-green"
            key={id}
          >
            <p>{tab}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
