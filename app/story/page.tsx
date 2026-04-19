import { Navbar } from "@/components/Navbar";
import { Story } from "@/components/Story";

export default function StoryPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <Story />
      </div>
    </main>
  );
}
