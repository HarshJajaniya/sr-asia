import { notFound } from "next/navigation";
import Image from "next/image";

import {workCards} from "@/components/home/data"; // adjust import path to named export


interface WorkDetailParams {
  slug: string;
}

export default function WorkDetail({ params }: { params: WorkDetailParams }) {
interface WorkCard {
    slug: string;
    image: string;
    title: string;
    longDescription: string;
    // add other fields if present in workCards
}

const card: WorkCard | undefined = (workCards as WorkCard[]).find(
    (item: WorkCard) => item.slug === params.slug
);

  if (!card) {
    return notFound();
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
