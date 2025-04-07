import { StoriesSection } from "@/components/StoriesSection";
import { MagicDescription } from "@/components/MagicDescription";
import { BackgroundImageContainer } from "@/components/ui/backgroundImage";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

const imageUrl =
  "https://toycantando.com/wp-content/uploads/2023/01/FONDO-CUENTOS-MAGICOS-1-1-scaled.jpg.webp";
const stories = [
  {
    title: "La Banda de los Monos",
    image:
      "https://toycantando.com/wp-content/uploads/2024/07/Cover_Desktop_Monos.png",
    mobileImage:
      "https://toycantando.com/wp-content/uploads/2024/07/Cover_Mobile_Monos.png",
    href: "https://toycantando.com/cuentos-magicos/cuentos-magicos-la-bande-de-los-monos",
  },
  {
    title: "Sara y Sarella",
    image:
      "https://toycantando.com/wp-content/uploads/2024/06/Cover_Sara_Sarella_Desktop.png",
    mobileImage:
      "https://toycantando.com/wp-content/uploads/2024/06/Cover_Sara_Sarella_Mobile.png",
    href: "https://toycantando.com/cuentos-magicos/cuentos-magicos-sara-y-sarella/",
  },
  {
    title: "Los Duendes",
    image:
      "https://toycantando.com/wp-content/uploads/2023/03/COVER-DUENDES-ESCRITORIO.png",
    mobileImage:
      "https://toycantando.com/wp-content/uploads/2023/03/COVER-DUENDES-RESPONSIVE.png",
    href: "https://toycantando.com/cuentos-magicos/duendes/",
  },
  {
    title: "Saúl el Murciélago",
    image:
      "https://toycantando.com/wp-content/uploads/2024/06/COVER-MURCIELAGO-ESCRITORIO2.png",
    mobileImage:
      "https://toycantando.com/wp-content/uploads/2023/03/COVER-MURCIELAGO-MOBILE.png",
    href: "https://toycantando.com/cuentos-magicos/saul-el-murcielago/",
  },
  {
    title: "Tinta de Araña",
    image:
      "https://toycantando.com/wp-content/uploads/2023/03/COVER-ARANA-ESCRITORIO.png",
    mobileImage:
      "https://toycantando.com/wp-content/uploads/2023/03/COVER-ARANA-MOBILE-1.png",
    href: "https://toycantando.com/cuentos-magicos/tinta-de-arana/",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <BackgroundImageContainer imageUrl={imageUrl}>
          <MagicDescription />
          <StoriesSection stories={stories} />
        </BackgroundImageContainer>
      </main>
      <Footer />
    </div>
  );
}
