export default function Footer() {
  return (
    <div className="bg-black text-white py-5">
      <div className="max-w-[45rem] mx-auto">
        <h3 className="text-2xl font-bold font-SFProBold">Zetsu</h3>
        <p className="font-SFProRegular mt-2.5 text-[#D9D9D9]">
          Transforming photos into fashion purchases seamlessly.
        </p>

        <ul className="font-SFProRegular list-inside text-[#BFBFBF] mt-7 space-y-2.5">
          <li className="underline">FAQs</li>
          <li className="underline">How does it work?</li>
          <li className="underline">Contact</li>
          <li className="underline">Impressum</li>
        </ul>

        <div className="flex justify-end text-[#8C8C8C] text-[0.75rem]">
          © Copyright 2024. All rights Reserved
        </div>
      </div>
    </div>
  );
}
