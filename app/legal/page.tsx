import { LegalTable } from "./components/LegalTable";

export const metadata = {
  title: "Legal | GeeksforGeeks",
  description: "Legal policies and guidelines for GeeksforGeeks",
};

// TODO: add link inside element
export default function LegalPage() {
  return (
    <main className="px-6 py-10">
      <LegalTable />
    </main>
  );
}
