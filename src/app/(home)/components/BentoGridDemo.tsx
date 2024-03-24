import { cn } from "@/utils/cn";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto mb-10">
      <h2 className="font-bold text-4xl text-white">Best Project</h2>
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
function ItemImage({ src, href }: { src: string; href: string }) {
  return (
    <Link
      target="_blank"
      href={href ?? ""}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden  "
    >
      <Image
        className="h-full w-full object-cover"
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}
const items = [
  {
    title: "Dashboard App",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <ItemImage
        src="/images/best-projects/dashboard.png"
        href="https://shadcn-dashboard-red.vercel.app/"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Todo App",
    description: "Dive into the transformative power of technology.",
    header: (
      <ItemImage
        src="/images/best-projects/todo.png"
        href="https://todo-sage-alpha.vercel.app/"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Movies App",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <ItemImage
        src="/images/best-projects/movies.png"
        href="https://movies-app-yt-live.vercel.app/"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Weather App",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <ItemImage
        src="/images/best-projects/weather.png"
        href="https://weather-app-nextjs-seven-rho.vercel.app/"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <ItemImage
        src="/images/best-projects/devfinder.png"
        href="https://github-user-search-app-one-pi.vercel.app/"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Dev Finder App",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <ItemImage
        src="/images/best-projects/image-gallary.png"
        href="https://image-gallery-app-black.vercel.app/"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (
      <ItemImage
        src="/images/best-projects/country-info.png"
        href="https://country-info-app-murex.vercel.app/"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />
  }
];
