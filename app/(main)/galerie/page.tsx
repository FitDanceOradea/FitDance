import Image from "next/image";

const Galerie = () => {
  const photos = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "20.jpg",

  ];
  const photos2 = [
    "19.jpg",

    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "33.jpg",
    "34.jpg",
    "35.jpg",
    "36.jpg",
    "37.jpg",
    "38.jpg",
    "39.jpg",
    "40.jpg",
  ];
  return (
    <div className="">
      <div className="">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xm:grid-cols-3 gap-4 items-center place-items-center "> */}
        <div className=" "></div>
        <div className="grid md:grid-cols-2">
          <div className="">
            {" "}
            {photos.map((item, index) => (
              <div className="border-secy border -mb-[0.245rem]" key={index}>
                <Image
                  src={`/galerie/${item}`}
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
                  src={`/galerie/${item}`}
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
