type Props = {
    label: string;
};
export const BulletLabel = ({ label }: Props) => {
    return (
        <p className="flex items-center justify-center lg:justify-start font-medium text-[20px] mb-7 w-full">
            <img src="/assets/bullet.svg" alt="Bullet" className="mr-[15px]" />
            {label}
        </p>
    );
};
