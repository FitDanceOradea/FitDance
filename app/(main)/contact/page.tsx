import { LocateIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center font-serif p-2 text-5xl mt-20 md:mb-40 mb-20 text-white font-semibold tracking-wider ">
        FIT DANCE ORADEA
      </div>
      <div className=" bg-white text-center">
        <div className="text-md py-2 font-bold text-secy text-center ">
          Fit Dance Oradea
        </div>
        <div className="text-2xl text-center font-semibold my-2">CONTACT</div>
        <button className="px-8 py-4 bg-secy text-white hover:scale-90 duration-300 tracking-wider mx-auto font-semibold uppercase">
          formular de inscriere
        </button>
        <div className="flex md:flex-row mt-20 flex-col items-center md:items-start gap-y-12 justify-around">
          <div className="flex-col flex items-center w-60">
            <Phone fill={"#007080"} size={64} className="text-secy" />
            <p className="font-semibold text-xl my-2">Telefon</p>

            <Link legacyBehavior href="tel:0745537068">
              <a className="text-gray-600">0745 537 068</a>
            </Link>
            <Link legacyBehavior href="tel:0745537068">
              <a className="text-gray-600">0744 780 355</a>
            </Link>
          </div>
          <div className="flex-col flex items-center w-60">
            <Mail fill={"#007080"} className="text-secy" size={64} />
            <Link
              href="mailto:doruttd@gmail.com"
              className="font-semibold text-gray-600 text-md mx-2"
            >
              {" "}
              puscovmaris@yahoo.com            </Link>
          </div>
          <div className="flex-col flex items-center w-60">
            <LocateIcon fill={"#007080"} className="text-secy" size={64} />
            <p className="font-semibold mx-2">ADRESA</p>
            <div className="text-gray-600 whitespace-nowrap">
              Oradea strada Nojoridului nr. 24
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="md:w-3/5 py-20 mx-5 md:mx-auto">
            <iframe
            className="h-[300px]"
              width="100%"
              height="400"
            
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Oradea%20strada%20Nojoridului%20nr.%2024%20+(Fit%20Dance%20Address)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Calculate population in area
              </a>
            </iframe>
          </div>
        </div>
    </div>
  );
};

export default Contact;
