"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

const menuItems = [
  {
    title: "Quienes Somos",
    href: "https://toycantando.com/quien-es-toy-cantando/",
    image:
      "https://toycantando.com/wp-content/uploads/2023/01/QUIENES-SOMOS.jpg.webp",
    alt: "Ícono Quiénes Somos",
    width: 313,
    height: 313,
  },
  {
    title: "Toy Music",
    href: "https://toycantando.com/musica-infantil-exitos-la-vaca-lola",
    image:
      "https://toycantando.com/wp-content/uploads/2023/01/TOY-MUSIC.png.webp",
    alt: "Ícono Toy Music",
    width: 100,
    height: 100,
  },
  {
    title: "Apps",
    href: "https://toycantando.com/aplicaciones-infantiles/",
    image: "https://toycantando.com/wp-content/uploads/2023/01/APPS.png.webp",
    alt: "Ícono Apps",
    width: 100,
    height: 100,
  },
  {
    title: "Licencias",
    href: "https://toycantando.com/licencias/",
    image:
      "https://toycantando.com/wp-content/uploads/2023/01/LICENCIAS.png.webp",
    alt: "Ícono Licencias",
    width: 100,
    height: 100,
  },
  {
    title: "Shows",
    href: "https://toycantando.com/show-la-vaca-lola",
    image: "https://toycantando.com/wp-content/uploads/2023/01/SHOWS.png.webp",
    alt: "Ícono Shows",
    width: 100,
    height: 100,
  },
  {
    title: "Blog",
    href: "https://toycantando.com/blog-para-ninos-y-padres/",
    image: "https://toycantando.com/wp-content/uploads/2023/01/BLOGS.png.webp",
    alt: "Ícono Blogs",
    width: 100,
    height: 100,
  },
  {
    title: "Tienda",
    href: "https://toycantando.com/tienda-vaca-lola-productos/",
    image: "https://toycantando.com/wp-content/uploads/2023/01/TIENDA.png.webp",
    alt: "Ícono Tienda",
    width: 100,
    height: 100,
  },
  {
    title: "Cuentos Mágicos",
    href: "https://toycantando.com/cuentos-infantiles-para-ninos",
    image:
      "https://toycantando.com/wp-content/uploads/2023/01/CUENTOS-MAGICOS.jpg.webp",
    alt: "Íconos Cuentos Mágicos",
    width: 313,
    height: 313,
  },
];

export function Navbar() {
  return (
    <nav className="bg-white shadow-md" aria-label="Menú">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center items-center gap-4 py-4">
            {menuItems.map((item) => (
              <li key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg transition-colors",
                    "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                >
                  <span className="sr-only">{item.title}</span>
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 64px) 100vw, 64px"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
