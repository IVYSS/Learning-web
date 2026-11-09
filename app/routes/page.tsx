"use client";

import Image from "next/image";
import Link from "next/link";

function Routes() {
  const link_style = "w-full text-center border rounded-lg p-4";

  return (
    <div className="flex flex-col w-full h-full mx-auto max-w-7xl p-4 gap-[30px]">
      <h2 className="text-2xl">Layouts and Pages</h2>

      <p>
        Next.js uses file-system based routing, meaning you can use folders and
        files to define routes. This page will guide you through how to create
        layouts and pages, and link between them.
      </p>

      <h2 className="text-2xl">Creating a page</h2>

      <p>
        A page is UI that is rendered on a specific route. To create a &nbsp;
        <b>page</b>, add a page file inside the app directory and default export
        a React component. For example, to create an index page (/):
      </p>

      <Image
        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Fpage-special-file.png&w=3840&q=75"
        alt="Next.js page"
        width={800}
        height={400}
      />

      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-zinc-800 bg-[#0a0a0a] text-sm shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5 text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-zinc-800/80 text-[10px] font-bold text-zinc-300">
              TS
            </div>
            <span className="font-mono text-[13px] tracking-wide text-zinc-300">
              app/page.tsx
            </span>
          </div>

          <div className="flex items-center gap-4 text-[13px]">
            <span>TypeScript</span>
          </div>
        </div>

        <div className="p-5 overflow-x-auto">
          <pre className="font-mono text-[14px] leading-relaxed text-zinc-100">
            <code>
              <span className="text-pink-500">export default function</span>{" "}
              <span className="text-purple-400">Page</span>() {"{\n"}
              {"  "}
              <span className="text-pink-500">return</span>{" "}
              <span className="text-emerald-400">{"<h1>"}</span>Hello Next.js!
              <span className="text-emerald-400">{"</h1>"}</span>
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl">Creating a layout</h2>

      <p>
        A layout is UI that is shared between multiple pages. On navigation,
        layouts preserve state, remain interactive, and do not rerender.
      </p>
      <p>
        You can define a layout by default exporting a React component from a
        layout file. The component should accept a children prop which can be a
        page or another layout.
      </p>
      <p>
        For example, to create a layout that accepts your index page as child,
        add a layout file inside the app directory:
      </p>

      <Image
        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Fdark%2Flayout-special-file.png&w=3840&q=75"
        alt="Next.js page"
        width={800}
        height={400}
      />

      <div className="flex w-full gap-[20px] border-black-4 pb-[20px] text-emerald-500">
        <Link href="/routes/nested-routes" className={link_style}>
          Nested Routes
        </Link>
        <Link href="/routes/dynamic-routes" className={link_style}>
          Dynamic routes
        </Link>
        <Link href="/routes/nested-dynamic-routes" className={link_style}>
          Nested Dynamic routes
        </Link>
      </div>
    </div>
  );
}

export default Routes;
