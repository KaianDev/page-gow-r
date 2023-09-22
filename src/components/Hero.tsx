import { useEffect } from "react";
import { BulletLabel } from "./BulletLabel";
import Aos from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <section className="bg-[url('/assets/bg-hero.jpg')] bg-cover bg-center">
            <div className="min-h-[800px] container mx-auto px-4 flex gap-5 flex-col lg:flex-row">
                {/* Infos */}
                <div
                    className="text-center lg:text-start flex flex-col items-center lg:items-start mt-14 lg:mt-40 flex-1 mb-4 lg:mb-0"
                    data-aos="fade-right" data-aos-duration='800'>
                    <BulletLabel label="Lançamento dia 09/11/2022" />
                    <h1 className="lg:max-w-[782px] text-[60px] sm:text-[90px] lg:text-[100px] xl:text-[124px]  font-bold leading-[97.5%] mb-[18px]">
                        God of War Ragnarök
                    </h1>
                    <p className="leading-[140%] lg:text-[22px]">
                        Os maiores heróis dos nove reinos, lutando por um futuro
                        em que acreditam.
                    </p>
                    <div className="flex flex-col lg:flex-row text-[20px] font-bold mt-10">
                        <div className="px-9 py-[18px] text-black bg-white">
                            R$ 349,00
                        </div>
                        <button className="px-9 py-[18px] text-white bg-[#3265EA]">
                            Comprar na pré-venda
                        </button>
                    </div>
                </div>
                {/* Thumb */}
                <div className="lg:self-end mb-10 lg:mb-28 flex w-full lg:w-auto flex-col items-center lg:items-start">
                    <p className="text-[18px] font-bold mb-4">
                        Assista aos trailer
                    </p>
                    <div className="relative sm:w-[400px] sm:h-[205px] xl:w-[463px] xl:h-[265px] border-2 border-[#3265EA] cursor-pointer">
                        <img
                            src="assets/thumb.gif"
                            alt="Gif Thumb"
                            className="w-full h-full"
                        />
                        <button className="absolute bottom-4 left-4">
                            <img src="assets/play.svg" alt="play" />
                        </button>
                    </div>
                    <div className="flex items-center gap-3 mt-12">
                        <img
                            src="assets/age.png"
                            alt="Permitido para maiores de 18"
                        />
                        <p className="max-w-[275px]">
                            Drogas Lícitas, Linguagem Imprópria, Violência
                            Extrema
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
