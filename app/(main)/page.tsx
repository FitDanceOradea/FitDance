"use client"

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stiluri_dans = [
  "Balet Dance",
  "Dans Contemporan",
  "Dans de Caracter",
  "Artistic Dance",
  "Jazz dans",
  "Show Dance",
  "Lyric",
  "Neoclasic "
];

const texts_2 = [
  {
    number: "17",
    text: "Ani - Experienta Club",
    plus: false,
  },
  { number: "8", plus: false, text: "Stiluri de dans" },
  { number: "300", plus: true, text: "Premii obtinute" },
  { number: "10", plus: true, text: "Evenimente anuale" },
  { number: "6", plus: false, text: "Grupe de Varsta" },
  { number: "25", plus: true, text: "Ani - Experienta Profesori" },
];


// Discipline: dans clasic( balet), dans contemporan,  dans de caracter,  artistic dance,  jazz dans, show dance
export default function Home() {
  
  return (
    <div className="">
      <div className="text-center font-serif p-2 text-5xl mt-10  text-white font-semibold tracking-wider ">
        FIT DANCE ORADEA
      </div>

      {/* // SECTIUNE 1 */}
      <div className="bg-white md:mt-30 mt-10  py-10 px-5 ">
        <div className="flex flex-col bg-gray-100 text-white items-center shadow-2xl shadow-secy	rounded-lg  md:flex-row">
          <Image
            className="object-cover rounded-t-lg h-112 md:h-auto md:w-1/3 w-full md:rounded-none md:rounded-s-lg"
            src="/bg2.jpg"
            alt=""
            width={800}
            height={1000}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-secy uppercase text-center dark:text-white">
              ÎMBINĂ ARMONIOS IDEEA DE MIȘCARE, CU PLĂCEREA DE A DANSA{" "}
            </h5>
            <div className="mb-3 mt-3 font-normal text-gray-500 w-5/6 mx-auto text-center md:text-left dark:text-gray-400">
              Fit Dance Oradea este scoala care si-a deschis portile, pentru
              copii si tineri in anul 2008. Din dorinta de a impartasi pasiunea
              pentru dans, formand o comunitate pentru incurajarea si sustinerea
              noilor talente.
              <br></br> <br></br>
              <span>
                Cursurile noastre acopera o gama larga de stiluri, de la dans
                precum:
              </span>
              <span className="text-secy text-wrap gap-x-1 gap-y-1 flex-wrap">
                {stiluri_dans.map((item, index) => (
                  <span
                    key={index}
                    className={cn(
                      " bg-secy/10 py-0.5 px-1 mr-2 mt-1 inline-block whitespace-nowrap rounded-sm "
                    )}
                  >
                    {item}
                  </span>
                ))}
              </span>{" "}
              si sunt adresate oricarei varste si nivel, atat in scopuri
              recreative, artistice cu accent pe evolutie si crestere, cat si
              spre performanta in concursuri nationale si internationale.
              <br /> <br />
              Asocitia Maris Dance este organizatoare de evenimente, in domeniul
              dansului si al artei, reusind cu succes sa aduca in fata
              publicului, talentul si munca elevilor sai.
            </div>
          </div>
        </div>
        <div className="bg-white"><div className="md:mt-20 mt-10  bg-white md:mb-20 mb-10 mx-10">
        <div className="flex items-center justify-center flex-wrap gap-y-8 mt-32 md:gap-x-28 gap-x-8">
          {texts_2.map((item, index) => (
            <div key={index} className="flex flex-none flex-col items-center">
              <div className="flex text-4xl font-semibold md:text-5xl xl:text-6xl">
                {item.number}{" "}
                <div className="text-secy font-bold text-3xl md:text:4xl -translate-y-1">
                  {item.plus ? "+" : ""}
                </div>
              </div>
              <div className="text-gray-500 text-md mt-1">{item.text}</div>
            </div>
          ))}
        </div>
      </div></div>
      
      </div>

      {/* // Sectiune 2  */}
      
    </div>
  );
}
