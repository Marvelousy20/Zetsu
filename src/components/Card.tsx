import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="border border-[#1F1F1F] p-5">
      <Image src={icon} alt={icon} width={20} height={20} />
      <h3 className="font-SFProMedium text-2xl mt-4">{title}</h3>
      <p className="font-SFProRegular mt-2">{description}</p>
    </div>
  );
}
