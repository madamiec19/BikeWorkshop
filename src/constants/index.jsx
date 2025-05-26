import {
  Bike,
  BotMessageSquare,
  LucideBike,
  Shield,
  TriangleAlert,
  UserRoundCheck,
  UserRoundSearch,
  Wrench,
  WrenchIcon,
} from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "O nas", href: "#" },
  { label: "Usługi", href: "#" },
  { label: "Cennik", href: "#" },
  { label: "Kontakt", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Wrench />,
    text: "Pełny Przegląd Sezonowy",
    description:
      "Przygotuj swój rower na tysiące kilometrów. Nasz kompleksowy przegląd obejmuje regulację przerzutek i hamulców, centrowanie kół, smarowanie napędu i kontrolę wszystkich kluczowych komponentów.",
  },
  {
    icon: <TriangleAlert />,
    text: "Naprawy Bieżące i Awarie",
    description:
      "Złapałeś gumę? Zerwał się łańcuch? Oferujemy szybkie i skuteczne naprawy od ręki. Diagnozujemy problem i przywracamy sprawność Twojego roweru, byś mógł jak najszybciej wrócić na trasę.",
  },
  {
    icon: <Shield />,
    text: "Serwis Hamulców",
    description:
      "Bezpieczeństwo to podstawa. Specjalizujemy się w serwisie hamulców hydraulicznych i tarczowych – od wymiany klocków po odpowietrzanie układu. Dbamy też o pełną sprawność Twojej amortyzacji.",
  },
  {
    icon: <UserRoundCheck />,
    text: "Wygodna Rezerwacja Online",
    description:
      "Szanujemy Twój czas. Umów wizytę w naszym serwisie za pomocą prostego formularza online. Wybierz dogodny dla siebie termin, opisz krótko usterkę i przyjedź na gotowe, bez kolejek.",
  },
  {
    icon: <Bike />,
    text: "Składanie i Modernizacja Rowerów",
    description:
      "Marzy Ci się rower złożony od podstaw na wymarzonej ramie? A może chcesz ulepszyć obecny sprzęt? Pomożemy w doborze komponentów, złożymy je w profesjonalną całość i tchniemy w Twój rower nowe życie.",
  },
  {
    icon: <UserRoundSearch />,
    text: "Fachowe Doradztwo i Dobór Części",
    description:
      "Dzięki wieloletniemu doświadczeniu potrafimy doradzić w każdej kwestii – od wyboru odpowiednich opon po modernizację napędu. Na miejscu posiadamy szeroki wybór części i akcesoriów od sprawdzonych producentów.",
  },
];

export const checklistItems = [
  {
    title: "Szybka i trafna diagnoza",
    description:
      "Precyzyjnie lokalizujemy usterkę, aby Twój rower jak najszybciej wrócił do pełnej sprawności.",
  },
  {
    title: "Gwarancja na wykonane usługi",
    description:
      "Jesteśmy pewni jakości naszych napraw, dlatego na każdą usługę otrzymujesz gwarancję.",
  },
  {
    title: "Oryginalne części i akcesoria",
    description:
      "Korzystamy tylko ze sprawdzonych komponentów od renomowanych producentów, zapewniając trwałość i bezpieczeństwo.",
  },
  {
    title: "Indywidualne podejście do klienta",
    description:
      "Słuchamy Twoich potrzeb i doradzamy najlepsze rozwiązania, aby jazda na rowerze była czystą przyjemnością.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
