import { icons } from "@/data/icons";
import Image from "next/image";

export const IconInfos = () => {
    return (
        <section className="min-h-[150px] flex items-center">
            <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
                {icons.map((item) => (
                    <div
                        key={item.id}
                        className="h-32 flex flex-col justify-center items-center gap-3">
                        <Image src={item.icon} alt={item.title} className="justify-self-start" />
                        <small className="text-center max-w-[130px] sm:max-w-none">{item.title}</small>
                    </div>
                ))}
            </div>
        </section>
    );
};
