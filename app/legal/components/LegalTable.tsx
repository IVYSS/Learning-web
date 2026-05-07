import { legalData, LegalSection } from "@/src/lib/legalData";
import Link from "next/link";

export function LegalTable() {
  return (
    <section className="w-[40%] font-nunito">
      <h1 className="text-xl font-semibold mb-4">Legal</h1>

      <div className="border border-gray-200">
        {legalData.map((section: LegalSection, index: number) => (
          <div
            key={index}
            className="grid grid-cols-[200px_1fr] border border-gray-3"
          >
            <div className="bg-gray-50 px-4 py-4 border-r border-gray-3">
              <span className="text-l font-semibold text-gray-700 uppercase tracking-wide">
                {section.category}
              </span>
            </div>

            <div className="flex flex-col divide-y divide-gray-3">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="px-4 py-3 text-sm text-green-600 hover:text-green-700 hover:bg-gray-50 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
