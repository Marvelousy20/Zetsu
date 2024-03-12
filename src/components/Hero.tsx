export default function Hero() {
  return (
    <div className="">
      <div className="text-center max-w-[28.5rem] mx-auto">
        <h1 className="text-5xl font-SFProSemibold">Shop the Look</h1>
        <p className="text-2xl leading-[32px] font-SFProLight mt-2">
          Snap, upload, and shop every item within your photo. Your perfect
          style awaits you.
        </p>
      </div>

      <div className="mt-8 max-w-[22.5rem] mx-auto flex items-center flex-col">
        <div className="h-32 w-full border border-dashed"></div>
        <button className="bg-black w-full text-white py-4 mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
}
