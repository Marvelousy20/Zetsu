import Card from "./Card";

export default function Ways() {
  return (
    <div className="bg-black mt-10 text-white">
      <div className="max-w-[45rem] mx-auto py-7">
        <h3 className="border-[#D9D9D9] border-b">How does it work?</h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            icon="/images/upload.svg"
            title="Upload Your Photo"
            description="Upload a picture of someone wearing something you like, or upload an outfit you love."
          />

          <Card
            icon="/images/ai.svg"
            title="AI Automatic Item Detection"
            description="Our smart technology instantly identifies all the fashion items within your photo."
          />

          <Card
            icon="/images/shop.svg"
            title="Shop the Look"
            description="Browse and shop each item directly from the photo. It's that easy!"
          />

          <Card
            icon="/images/enjoy.svg"
            title="Enjoy Your New Style"
            description="Receive your selected items and enjoy your new fashion finds!"
          />
        </div>

        <div className="flex justify-center">
          <button className="w-[22.5rem] py-4 mt-8 bg-white text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
