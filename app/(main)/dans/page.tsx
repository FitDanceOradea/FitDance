import Image from "next/image";

const photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "10.jpg",
  "11.jpg",
  "13.jpg",
  "24.jpeg",
  "20.jpeg",

];
const photos2 = [
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "12.jpg",
  "9.jpg",

  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "21.jpeg",
  "22.jpeg",
  "25.jpeg",
];

const DansMiri = () => {
  return (
    <div className="">
      <div className="text-center mb-10 font-serif p-2 text-5xl mt-20  text-white font-semibold tracking-wider ">
        Dansul Mirilor{" "}
      </div>
      <div className="text-secy font-serif text-center font-semibold tracking-wider  text-3xl">
        ~ Magie in pasi de dans ~
      </div>
      <div className="text-gray-800 mt-28 md:mt-0 md:text-gray-200  font-serif text-center font-semibold tracking-wider  text-xl">
        ~ Oferim mirilor noștri atat coregrafia personalizata de la dansul
        mirilor , cât și lecții de dans, pentru a învața mai multe stiluri.~
      </div>
      <div className="text-gray-800 mb-10 md:text-gray-200  font-serif text-center font-semibold tracking-wider  text-xl">
        ~ Mirii care își doresc un plus de magie, pot opta pentru micuțele
        balerine, in timpul dansului. ~
      </div>
      <div className="grid md:grid-cols-2">
        <div className="">
          {" "}
          {photos.map((item, index) => (
            <div className="border-secy border -mb-[0.97rem] md:-mb-5 xl:-mb-6" key={index}>
              <Image
                src={`/dansmiri/${item}`}
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
            <div className="border-secy  border  " key={index}>
              <Image
                src={`/dansmiri/${item}`}
                height={500}
                width={1000}
                alt={item}
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DansMiri;
