"use client";

import { footerMockData } from "@/src/lib/api/mockDataHomepage";
import { TfiLocationPinIcon } from "@/src/components/icons/icon";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";

export function Footer() {
  return (
    <div className="w-full  text-[16px] bg-[#fffce1]">
      <div className=" border-t border-black-5 font-nunito px-10 pt-10 grid grid-cols-8 gap-2.5">
        <div className="col-span-2">
          <p className="text-[28px] font-bold">
            Keep in the loop with the GSAP® newsletter.
          </p>
          <div className="mt-2 flex flex-col gap-3">
            <div>
              <h3 className="font-bold text-[15px] mb-1.5 flex items-center gap-1.5">
                <TfiLocationPinIcon className="text-green-5 w-5 h-5" />
                Corporate &amp; Communications Address:
              </h3>
              <address className="pr-7 pl-4 text-black-6 text-[14px] not-italic">
                A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136, Noida,
                Uttar Pradesh (201305)
              </address>
            </div>

            <div>
              <h3 className="font-bold text-[15px] mb-1.5 flex items-center gap-1.5">
                <TfiLocationPinIcon className="text-green-5 w-5 h-5" />
                Registered Address:
              </h3>
              <address className="pr-7 pl-4 text-black-6 text-[14px] not-italic">
                K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida,
                Gautam Buddh Nagar, Uttar Pradesh, 201305
              </address>
            </div>
          </div>
        </div>

        {footerMockData.map((data, id) => {
          return (
            <div key={id}>
              <div className="text-green-5">{data.header}</div>
              {data.lists.map((list, key) => (
                <p
                  key={`id_${key}`}
                  className="text-[13px] hover:text-green-5 cursor-pointer"
                >
                  {list.name}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 px-10 py-5">
        <div
          className="flex gap-2 h-[30px] justify-center items-center pt-[10px] pl-[20px] cursor-pointer"
          onClick={() => {
            console.log("to official-apps-2");
            redirect("", RedirectType.replace);
          }}
        >
          <Image
            about=""
            width={100}
            height={24}
            alt="Google play"
            src={"/appstore.png"}
          />
          <Image
            about=""
            width={100}
            height={24}
            alt="Google play"
            src={"/googleplay.png"}
          />
        </div>
      </div>

      <div className="px-[80px] py-[56px] py-2 flex w-full justify-between items-center">
        <p>©2026 GSAP - A Webflow Product. All rights reserved.</p>
        <p>IVY</p>

        <p>Privacy Policy. Terms of useSWR </p>
      </div>
    </div>
  );
}
