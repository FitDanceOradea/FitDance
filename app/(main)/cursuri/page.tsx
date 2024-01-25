import Image from "next/image";
import Link from "next/link";

const Concurs = () => {
  return (
    <div className="">
      <div className="text-center font-serif p-2 mb-10 text-5xl mt-16 text-white font-semibold tracking-wider ">
        CURSURI <br />
      </div>{" "}
      <div className="bg-white text-xl border-2 border-secy shadow-md mt-10 md:m-5 md:mx-10 pt-1">
        <div className="mt-10 md:w-3/4 md:mx-auto mx-3 flex text-gray-800">
          <span className="text-secy  font-semibold text-md ">1. </span>
          <p className="ml-2">
            {" "}Avand profesori, cu peste 20 de ani de experienta în domeniu, clubul
            a participat la diferite concursuri nationale si internationale unde
            am obtinut numeroase clasari pe podium la formatii si solouri. Dar
            si alte premii pentru cea mai buna coreografie, cel mai bun dansator
            din concurs, cea mai buna scoala de dans – diferite alte premii.
          </p>
          <br />
        </div>
        <div className=" md:w-3/4 md:mx-auto mx-3 flex text-gray-800">
          <div>
            <br />
            <span className="text-secy  font-semibold text-md">2. </span>
            Organizam cursuri pentru diferite stiluri de dans:             <ul className="list-disc ml-8">
              {" "}
              <li> dans clasic – balet</li>
              <li> dans contemporan</li>
              <li> dans de caracter</li>
              <li> dans al popoarelor folclor stilizat</li>
              <li> show dance</li>
              <li> artistic dance</li>
              <li> jazz dance</li>
              <li> lyric</li>
              <li>neoclasic </li>
            </ul>{" "}
            <br />
          </div>
        </div>
        <div className=" md:w-3/4 md:mx-auto mx-3 flex flex-col text-gray-800">
          {" "}
          <br />
          <div className="">
            <span className="text-secy font-semibold text-md">3. </span>
            Grupele de dans se alcatuiesc pe diferite niveluri, atat de varsta
            cat si de performanta. <br /> <br />
            Avem grupe de initiere pentru diferite varste
 <br /> 
            <ul className="list-disc ml-8">
              {" "}
              <li> copii pana la 4 – 5 ani marti si joi 17:30-18:30</li>
              <li>
                {" "}
                copii peste 6 ani luni, miercuri si vineri  17:30-18:30
              </li>
              <br />
            </ul>{" "}
          </div>
        </div>{" "}
        <div className=" md:w-3/4 md:mx-auto mx-3 flex  text-gray-800">
          <div className=" flex">
            {" "}
            <span className="text-secy mr-2 font-semibold text-md">4. </span>
          </div>{" "}
          Grupele de performanta sunt impartite pe varste si participa la
          concursuri interne si internationale. Acestea pe langa orele de dans
          in cadrul pregatirii au si ore de teatru, ritmica, balet si
          gimnastica.
        </div>
        <Image alt="regulament" className="mx-auto mt-10 " src="/pr.jpg" width={700} height={1000} />

      </div>
    </div>
  );
};

export default Concurs;
