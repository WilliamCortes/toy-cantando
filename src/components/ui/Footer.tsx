"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    icon: "la fa-facebook-f",
    href: "https://www.facebook.com/ToyCantando",
    label: "Facebook",
    bg: "bg-[#3b5998]",
  },
  {
    icon: "la fa-youtube",
    href: "https://www.youtube.com/user/toycantando",
    label: "YouTube",
    bg: "bg-[#FF0000]",
  },
  {
    icon: "la fa-twitter",
    href: "https://twitter.com/ToyCantando",
    label: "Twitter",
    bg: "bg-[#1DA1F2]",
  },
  {
    icon: "la fa-tiktok",
    href: "https://www.tiktok.com/@toycantando_oficial",
    label: "TikTok",
    bg: "bg-[#010101]",
  },
  {
    icon: "la fa-instagram",
    href: "https://www.instagram.com/toycantando/",
    label: "Instagram",
    bg: "bg-[#833AB4]",
  },
  {
    icon: "la fa-linkedin-in",
    href: "https://www.linkedin.com/company/toy-cantando/",
    label: "LinkedIn",
    bg: "bg-[#0A66C2]",
  },
  {
    icon: "la fa-spotify",
    href: "https://spoti.fi/3AIcvZK",
    label: "Spotify",
    bg: "bg-[#1DB954]",
  },
];

const legalLinks = [
  { text: "Quiénes somos", href: "https://toycantando.com/quienes-somos" },
  {
    text: "Política de privacidad",
    href: "https://toycantando.com/wp-content/uploads/2023/01/Politica-de-datos-Toy-Cantando.pdf",
  },
  {
    text: "Política de despacho de productos",
    href: "https://toycantando.com/wp-content/uploads/2023/01/Politica-de-despachos-Toy-Cantando-220906.pdf",
  },
  {
    text: "Términos y condiciones",
    href: "https://toycantando.com/wp-content/uploads/2024/05/Terminos-y-Condiciones-Toy-Cantando-220906-1-1.pdf",
  },
  { text: "Licencias comerciales", href: "https://toycantando.com/licencias/" },
];

export function Footer() {
  return (
    <footer className="bg-white hidden md:block" style={{ height: "170px" }}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="https://toycantando.com">
            <Image
              src="https://toycantando.com/wp-content/uploads/2022/12/LOGO-TOY.png.webp"
              alt="Logo Toy Cantando"
              width={1150}
              height={80}
              style={{ maxWidth: "115px" }}
            />
          </Link>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex justify-center items-center">
          {/* Contact Info */}
          <div className="text-right">
            <h3
              className="mb-1 font-semibold"
              style={{ fontSize: "19px", color: "#7A7A7A" }}
            >
              Contáctenos
            </h3>
            <p
              className="leading-relaxed"
              style={{ fontSize: "14px", color: "#7A7A7A" }}
            >
              Teléfono: +57 320 3104159
              <br />
              Mail: Servicioalcliente@toycantando.com
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-[80px] bg-gray-300 mx-8" />

          {/* Legal Links */}
          <div>
            <ul className="space-y-1 text-sm text-gray-700">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center ml-[8%]">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Síguenos en:
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon, href, label, bg }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 ${bg} text-white rounded-full flex items-center justify-center text-[15px] hover:opacity-90 transition-opacity`}
                  aria-label={label}
                >
                  <i
                    className={`${icon}  text-2xl hover:scale-110 transition-transform`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
