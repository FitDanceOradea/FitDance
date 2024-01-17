import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black/95">
      <div className="flex justify-center flex-col">
        <div className="mx-auto">
          {" "}
          <Image src="/logo_no_bg.png" width={100} height={100} alt={""} />
        </div>
        <div className="w-3/4 mx-auto border-t-2 py-1 border-secy/20"></div>
        <div className="text-gray-100/95 text-center text-sm"><span className="">© Copyright 2024 | Proiect Realizat în cadrul <span className="text-secy">Fit Dance Oradea </span> </span></div>
      </div>
    </div>
  );
};

export default Footer;
