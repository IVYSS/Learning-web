import { ContactAddress } from "./ContactAddress";
import { ContactForm } from "./ContactForm";
import { ContactMap } from "./ContactMap";

export const metadata = {
  title: "Contact Us | GeeksforGeeks",
};

export default function ContactPage() {
  return (
    <main className="px-6 py-10 font-nunito">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

      <div className="flex flex-col gap-10  ml-[48px]">
        <h2 className="text-2xl font-semibold">GeeksforGeeks</h2>

        <div className="flex flex-row gap-50 items-start mx-auto w-full">
          <ContactForm />
          <ContactMap />
        </div>

        <ContactAddress />
      </div>
    </main>
  );
}
