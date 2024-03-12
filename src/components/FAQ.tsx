import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "./ui/accordion";

const data = [
  {
    question: "What kinds of photos can I upload?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-1",
  },
  {
    question: "How do you identify the items in the photo?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-2",
  },
  {
    question: "Can I shop for all the items in the photo?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-3",
  },
  {
    question:
      "What if I want to buy similar items, but not the exact ones in the photo?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-4",
  },
  {
    question: "Do you offer returns or exchanges?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-5",
  },
  {
    question: "Is my uploaded photo stored securely?",
    answers:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-6",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",

    value: "item-7",
  },
  {
    question: "How long does it take to receive my order?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-8",
  },
  {
    question: "Can I cancel my order after I've placed it?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-9",
  },
  {
    question: "How can I contact customer support if I have further questions?",
    answer:
      "You can upload photos of outfits you like, whether it's a picture of yourself, a friend, a celebrity, or even a fashion influencer.",
    value: "item-10",
  },
];

export default function FAQ() {
  return (
    <div className="mt-[2.37rem] max-w-[45rem] mx-auto px-5 mnd:px-0">
      <h3 className="border-b">FAQs</h3>

      <div>
        <Accordion type="single" collapsible className="w-full">
          {data.map((q, index) => (
            <AccordionItem value={q.value} key={index}>
              <AccordionTrigger className="text-start">
                {q.question}
              </AccordionTrigger>
              <AccordionContent className="text-start">
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
