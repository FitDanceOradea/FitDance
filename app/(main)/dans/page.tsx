import Image from "next/image";

const photos = [
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "10.jpeg"
 



];
const photos2 = [
    "19.jpeg",
    "20.jpeg",
    "21.jpeg",
    "22.jpeg",
    "23.jpeg",
    "24.jpeg",
    "18.jpeg",
    "17.jpeg",


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
      <div className="text-gray-200 font-serif text-center font-semibold tracking-wider  text-xl">
        ~ Oferim mirilor noștri atat coregrafia personalizata de la dansul
        mirilor , cât și lecții de dans, pentru a învața mai multe stiluri.~
      </div>
      <div className="text-gray-200 mb-10 font-serif text-center font-semibold tracking-wider  text-xl">
        ~ Mirii care își doresc un plus de magie, pot opta pentru micuțele
        balerine, in timpul dansului. ~
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
  );
};

export default DansMiri;
