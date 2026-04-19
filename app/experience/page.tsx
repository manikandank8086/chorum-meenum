import { Navbar } from "@/components/Navbar";
import { Experience } from "@/components/Experience";

export default function ExperiencePage() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <Experience />
      </div>
    </main>
  );
}
