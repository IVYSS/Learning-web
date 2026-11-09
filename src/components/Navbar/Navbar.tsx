"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
  const navItems = [{ name: "Tools", href: "/tools" }];

  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const { contextSafe } = useGSAP({ scope: buttonRef });

  const handleMouseMove = contextSafe(
    // eslint-disable-next-line react-hooks/refs
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;

      const { clientX, clientY } = e;
      const { height, width, left, top } =
        buttonRef.current.getBoundingClientRect();

      // Calculate distance from center of the button
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Move the button housing
      gsap.to(buttonRef.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 1,
        ease: "power3.out",
      });

      // Parallax effect on the text (moves slightly less than the button)
      gsap.to(textRef.current, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 1,
        ease: "power3.out",
      });
    },
  );

  // eslint-disable-next-line react-hooks/refs
  const handleMouseLeave = contextSafe(() => {
    // Snap back to original position using an elastic ease
    gsap.to([buttonRef.current, textRef.current], {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  });

  return (
    <div className="mx-10 h-20 bg-black flex  items-center justify-between gap-5 px-5 border-b border-b-black-4">
      <div className="flex gap-5">
        <div>ICON</div>
        <li className="gap-5 flex text-black-7 ">
          {navItems.map((item, id) => (
            <Link
              key={id}
              href={item.href}
              about=""
              className="hover:text-white pointer"
            >
              {item.name}
            </Link>
          ))}
        </li>
      </div>
      <div>
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`group relative flex h-16 w-48 items-center justify-center rounded-full bg-zinc-900 text-white shadow-md transition-colors hover:bg-zinc-800`}
        >
          <span
            ref={textRef}
            className="pointer-events-none relative z-10 text-sm font-medium tracking-wide"
          >
            Login/Create Account
          </span>
        </button>
      </div>
    </div>
  );
}
