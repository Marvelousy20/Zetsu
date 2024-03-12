import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="border border-[#1F1F1F] p-5">
      <div className="flex !items-center gap-x-3">
        <Image
          src={icon}
          alt={icon}
          width={20}
          height={20}
          className="hidden md:block"
        />
        <Image
          src={icon}
          alt={icon}
          width={15}
          height={15}
          className="block md:hidden"
        />
        <h3 className="font-darkerGrotesque font-medium text-2xl">{title}</h3>
      </div>

      <p className="font-SFProRegular mt-2">{description}</p>
    </div>
  );
}
