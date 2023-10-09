import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="movie-banner">
        <video
          poster="/on.png"
          loop={true}
          autoPlay={true}
          muted
          className="movie"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mobile">
        <div className="w-full h-full  flex flex-col items-center gap-10 justify-center absolute top-0 z-50 text-white px-4">
          <img src="/ma.png" alt="" />

          <div className="flex flex-col gap-5 ">
            <Link
              href={"/civil"}
              className="bg-gray-900 w-[300px] flex items-center justify-start pl-20 py-4 opacity-80 rounded-sm border-2 transition-all border-[#daa520] hover:opacity-100  hover:scale-105 "
            >
              <button className="">Área Civil</button>
            </Link>
            <Link
              href={"/empresarial"}
              className="bg-gray-900 w-[300px]  flex items-center justify-start pl-20 py-4 opacity-80 rounded-sm border-2 transition-all border-[#daa520] hover:opacity-100  hover:scale-105 "
            >
              <button>Área Empresarial</button>
            </Link>
            <Link
              href={"/saude"}
              className="bg-gray-900 w-[300px]  flex items-center justify-start pl-20 py-4 opacity-80 rounded-sm border-2 transition-all border-[#daa520] hover:opacity-100  hover:scale-105 "
            >
              <button>Área Saúde</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
