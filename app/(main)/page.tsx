import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stiluri_dans = [
  "Balet",
  "Dans Contemporan",
  "Dans de Caracter",
  "Artistic Dance",
  "Jazz dans",
  "Shoe Dance",
];

const texts_2 = [
  {
    number: "11",
    text: "Ani de experienta",
    plus: true,
  },
  { number: "6", plus: false, text: "Stiluri de dans" },
  { number: "150", plus: true, text: "Premii obtinute" },
  { number: "10", plus: true, text: "Evenimente anuale" },
  { number: "6", plus: false, text: "Grupe de Varsta" },
  {},
];

// Discipline: dans clasic( balet), dans contemporan,  dans de caracter,  artistic dance,  jazz dans, show dance
export default function Home() {
  return (
    <div className="">
      <div className="text-center font-serif p-2 text-5xl mt-10 text-white font-semibold tracking-wider ">
        FIT DANCE ORADEA
      </div>
      <div className="mt-10 flex-wrap flex flex-col items-center md:flex-row gap-x-5 gap-y-2 text-xl justify-evenly ">
        {stiluri_dans.map((item, index) => (
          <div
            key={index}
            className={cn(
              index % 2 == 0
                ? "border-2  hover:bg-secy "
                : "bg-secy hover:bg-secy/25",
              "px-3 py-2  text-center rounded-full  text-white duration-300 ease-in-out"
            )}
          >
            {item}
          </div>
        ))}
        
      </div>
      <div className="text-center"> <div className="px-10 py-2 hover:bg-secy/75 duration-300 inline-flex text-center bg-secy mt-10 text-white ">
          <Link  href="/concurs" className="flex  ">
            <div className="flex flex-col">
              {" "}
              <p className="text-2xl">Concurs Naional de Dans</p>
              <div className="">
                Fit to Dance - Editia <span className="text-sexy border-y-2 border-red-500">XV</span>{" "}
              </div>
            </div>

            <span className="my-auto ml-5 text-red-500 scale-x-120 animate-pulse 	duration-1000">
              <ArrowRight  size={40}/>
            </span>
          </Link>
        </div></div>
     
      {/* // SECTIUNE 1 */}
      <div className="bg-white md:mt-30 mt-10 py-10 px-5 ">
        <div className="flex flex-col items-center shadow-2xl shadow-secy	rounded-lg  md:flex-row">
          <Image
            className="object-cover rounded-t-lg h-64 md:h-auto md:w-1/3 w-full md:rounded-none md:rounded-s-lg"
            src="/sec_1_p1.jpg"
            alt=""
            width={800}
            height={1000}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-secy uppercase text-center dark:text-white">
              Îmbină armonios ideea de mișcare, cu plăcerea de a dansa{" "}
            </h5>
            <div className="mb-3 mt-3 font-normal text-gray-500 w-5/6 mx-auto text-center md:text-left dark:text-gray-400">
              Fit Dance Oradea este scoala de dans fondata in 2014 de Danynet
              din dorinta de a impartasi pasiunea pentru dans, formand o
              comunitate pentru incurajarea si sustinerea noilor talente.
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
            </div>
          </div>
        </div>
      </div>

      {/* // Sectiune 2  */}
      <div className="md:mt-20 mt-10 md:mb-20 mb-10 mx-10">
        <div className="flex items-center justify-center flex-wrap gap-y-8 md:gap-x-28 gap-x-8">
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
      </div>
    </div>
  );
}
