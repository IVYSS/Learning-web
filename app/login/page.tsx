"use client";

import { FcGoogleIcon } from "@/src/components/icons/icon";
import Link from "next/link";
import { mockIconButton } from "@/src/lib/api/mockDataHomepage";

export default function login() {
  return (
    <div className="w-[550px] p-[20px]">
      <p className="text-[24px]">Login</p>
      <div className="text-[16px] text-gray-2">
        New use ?{" "}
        <Link href={""} className="text-blue-3">
          Register Now
        </Link>
      </div>

      <Link
        href={""}
        className="w-full rounded-md bg-white  h-10 text-foreground mt-6 flex items-center justify-center gap-4 border-white-5 border bg-white-2 hover:opacity-80"
      >
        <FcGoogleIcon className="h-[30px] w-[30px]" />
        Continue with google
      </Link>
      <div className="flex w-full justify-center items-center mt-4 gap-5">
        {mockIconButton.map((social, id) => {
          return (
            <Link
              href={social.src}
              key={id}
              className="rounded-full w-9.5 h-9.5 border-white-5 border text-center justify-center p-1.5 hover:opacity-80"
            >
              {social.icon ?? id}
            </Link>
          );
        })}
      </div>
      <div className="relative flex py-5 items-center text-[14px]">
        <div className="grow border-t border-white-4"></div>
        <span className="shrink mx-4 text-white-4">or</span>
        <div className="grow border-t border-white-4"></div>
      </div>
    </div>
  );
}
