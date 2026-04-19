import { Navbar } from "@/components/Navbar";
import { Menu } from "@/components/Menu";

export default function MenuPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <Menu />
      </div>
    </main>
  );
}
