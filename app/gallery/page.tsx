import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <Gallery />
      </div>
    </main>
  );
}
