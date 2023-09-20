export const Nav = () => {
    return (
        <nav className="container mx-auto px-2 h-[70px] md:h-20 flex items-center justify-between">
            <a href="/" className="hidden lg:inline-block">
                <img src="/assets/sony.svg" alt="Logo PlayStation" />
            </a>
            <img
                src="/assets/logo.png"
                alt="Logo God of War Ragnarok"
                className="w-[130px] lg:w-auto"
            />
            <div className="font-semibold">
                <span className="hidden lg:inline-block mr-[18px]">
                    Disponível para
                </span>
                <span className="inline-block px-2 py-[5px] border-[1.5px] mr-2">
                    PS4
                </span>
                <span className="inline-block px-2 py-[5px] border-[1.5px]">
                    PS5
                </span>
            </div>
        </nav>
    );
};
