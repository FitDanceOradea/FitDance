import Image from "next/image";

const Galerie = () => {
  const photos = [
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
  ];
  const photos2 = [
    "1.jpg",
    "3.jpg",
    "2.jpg",

    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "15.jpg",

  
  ];
  return (
    <div className="">
      <div className="">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xm:grid-cols-3 gap-4 items-center place-items-center "> */}
        <div
          className=" "
        >
          
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            {" "}
            {photos.map((item, index) => (
              <div className="border-secy border -mb-[0.175rem]" key={index}>
                <Image
                  src={`/${item}`}
                  height={500}
                  width={1000}
                  alt={item}
                ></Image>
              </div>
            ))}
          </div>
          <div className="">
            {" "}
            {photos2.map((item, index) => (
              <div className="border-secy border" key={index}>
                <Image
                  src={`/${item}`}
                  height={500}
                  width={1000}
                  alt={item}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerie;
