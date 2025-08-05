import { notFound } from "next/navigation";
import Image from "next/image";
import { workCards } from "@/components/home/data";
import type { Metadata } from "next";



export default function WorkDetail(props: any) {
  const { params } = props;
  const card = workCards.find((item) => item.slug === params.slug);

  if (!card) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <Image
        src={card.image}
        alt={card.title}
        width={1000}
        height={600}
        className="w-full h-auto rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{card.title}</h1>
      <p className="mt-4 text-lg text-gray-700 whitespace-pre-line">
        {card.longDescription}
      </p>
    </div>
  );
}

