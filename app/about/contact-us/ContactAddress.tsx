import { addressData } from "@/src/lib/contactData";

export function ContactAddress() {
  return (
    <div className="flex flex-col gap-5 mt-6 text-[18px] text-gray-700">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-gray-900">
          {addressData.corporate.title}
        </h3>
        {addressData.corporate.lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-gray-900">
          {addressData.registered.title}
        </h3>
        {addressData.registered.lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-gray-900">
          {addressData.other.title}
        </h3>
        {addressData.other.entries.map((entry, i) => (
          <div key={i}>
            <span className="font-semibold">{entry.label}</span>{" "}
            {entry.lines.map((line, j) => (
              <p key={j}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
