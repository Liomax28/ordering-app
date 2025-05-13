import Image from "next/image";

export default function Hero() {
  return (
    <>
    <section className="grid grid-cols-2">
        <div>
        <h1 className="text 4xl font-semibold">Everythin is better whit pizza</h1>
        <p className="my-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div>
            <button className="bg-primary-500 text-white px-8 py-2 rounded-full"> Orden now </button>
            <button> Learn more </button>

        </div>
        </div>

        <div className="w-16 h-16 relative">
        <image src={'public/pizza.png'} layout={'fill'} objectFit={'contain'}  alt={'pizza'}/>
        </div>
    </section>
    </>
  );
}