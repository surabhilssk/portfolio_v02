import { Bungee } from "next/font/google";

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
  return (
    <div className="h-full w-full max-w-5xl overflow-hidden">
      <div className="grid h-[200px] w-full grid-cols-1 rounded-2xl bg-[#2f282f] text-center">
        <div className={`${bungee.className} text-6xl`}>SURABHIL S KUMAR</div>
      </div>
      <div className="mt-3 grid h-[200px] grid-cols-3 gap-4">
        <div className="rounded-2xl bg-[#e0e0e0]">Skills</div>
        <div className="rounded-2xl bg-[#874fd4]">Education</div>
        <div className="rounded-2xl bg-[#ff5500]">Courses</div>
      </div>
      <div className="mt-3 grid h-[200px] grid-cols-2 gap-4">
        <div className="rounded-2xl bg-[#ffca08]">Projects</div>
        <div className="rounded-2xl bg-[#ff81ef]">Contacts</div>
      </div>
    </div>
  );
}
