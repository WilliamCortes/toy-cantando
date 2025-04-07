"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Story = {
  title: string;
  image: string;
  mobileImage: string;
  href: string;
};

type StoriesSectionProps = {
  stories: Story[];
};

export function StoriesSection({ stories }: StoriesSectionProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const story = stories[current];
  return (
    <div className="relative w-full max-h-[470px] aspect-video overflow-hidden rounded-xl">
      <Link
        href={story.href}
        className="block w-full h-full relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Imagen Desktop */}
        <div className="hidden sm:block absolute inset-0 z-0">
          <Image
            src={story.image}
            alt={story.title}
            fill
            priority
            className="object-contain object-center max-h-[470px]"
          />
        </div>

        {/* Imagen Mobile */}
        <div className="sm:hidden block absolute inset-0 z-0">
          <Image
            src={story.mobileImage}
            alt={story.title}
            fill
            priority
            className="object-contain object-center max-h-[470px]"
          />
        </div>
      </Link>

      {/* Botones de navegación (fuera del Link para evitar navegación involuntaria) */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
