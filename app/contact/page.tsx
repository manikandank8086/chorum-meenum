import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
    </main>
  );
}
