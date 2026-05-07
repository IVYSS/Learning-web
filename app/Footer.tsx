"use client";

import { footerMockData } from "@/src/lib/api/mockDataHomepage";
import {
  FaFacebookIcon,
  FaInstagramIcon,
  FaLinkedinIcon,
  FaXIcon,
  FaYoutubeIcon,
  TfiLocationPinIcon,
} from "@/src/components/icons/icon";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";

export function Footer() {
  const iconFooter = [
    {
      icon: <FaLinkedinIcon className="w-[42px] h-[24px] text-white" />,
      hoverColor: "#3498db",
      patch: "https://www.linkedin.com/company/geeksforgeeks-learn-to-code/",
    },
    {
      icon: <FaInstagramIcon className="w-[42px] h-[24px] text-white" />,
      hoverColor: "#ff2d55",
      patch: "https://www.instagram.com/geeks_for_geeks/",
    },
    {
      icon: <FaXIcon className="w-[42px] h-[24px] text-white" />,
      hoverColor: "#000",
      patch: "https://x.com/geeksforgeeks",
    },
    {
      icon: <FaFacebookIcon className="w-[42px] h-[24px] text-white" />,
      hoverColor: "#003a78",
      patch: "https://www.facebook.com/geeksforgeeks.org/",
    },
    {
      icon: <FaYoutubeIcon className="w-[42px] h-[24px] text-white" />,
      hoverColor: "#e74d3c",
      patch: "https://www.youtube.com/geeksforgeeksvideos",
    },
  ];

  return (
    <div className="w-full text-black-5 text-[16px]">
      <div className=" border-t border-black-5 font-nunito px-10 pt-10 grid grid-cols-8 gap-2.5">
        <div className="col-span-2">
          <Image
            width={230}
            height={32}
            alt="footer"
            about=""
            src={"/gfgFooterLogo.png"}
          />

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
        {iconFooter.map((icon, key) => (
          <a
            key={key}
            target="_blank"
            href={icon.patch}
            className="rounded-3xl bg-black-6 w-[42px] h-[42px] text-center flex justify-center items-center "
            style={{ "--hover-color": icon.hoverColor } as React.CSSProperties}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = icon.hoverColor)
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = "")}
          >
            {icon.icon}
          </a>
        ))}

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

      <div className="border-t pl-10 py-2">
        @GeeksforGeeks, Sanchhaya Education Private Limited, All rights reserved
      </div>
    </div>
  );
}
