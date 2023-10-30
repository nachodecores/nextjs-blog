import Image from "next/image";
import brujona from "../../public/clientebrujona.png";
import donandres from "../../public/clientedonandres.png";
import mingus from "../../public/clientemingus.png";
import mision from "../../public/clientemision.png";
import morondanga from "../../public/clientemorondanga.png";
import parrillita from "../../public/clienteparrillita.png";

export default function Clients() {
  return (
    <>
      <div className="p-20 bg-colorpurple text-coloryellowlight font-bold ">
        <h2 className="pb-8">Gente qué trata bien a nuestros quesos...</h2>
        <div className="grid grid-cols-3 gap-10 [&>div]:rounded-xl [&>div]:border [&>div]:h-40 [&>div]:w-40  [&>div:hover]:bg-coloryellowlight">
          <div className="flex justify-center items-center">
            <Image
              src={brujona}
              alt="Brujona cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={donandres}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={mingus}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={mision}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={morondanga}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={parrillita}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brujona}
              alt="Brujona cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={donandres}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={mingus}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={mision}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={morondanga}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={parrillita}
              alt="Don Andrés cliente quesos artesanales"
              height={100}
            />
          </div>
        </div>
        <p>Alemán</p>
        <p>La Vaca</p>
        <p>Pantera</p>
        <p>Panadería pocitos</p>
        <p>Mingus</p>
        <p>Misión</p>
        <p>Gourmeat</p>
        <p>Provaca</p>
        <p>Oso Pardo</p>
      </div>
    </>
  );
}
