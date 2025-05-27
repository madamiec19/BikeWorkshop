import {
  Bike,
  Shield,
  TriangleAlert,
  UserRoundCheck,
  UserRoundSearch,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "O nas", href: "#" },
  { label: "Usługi", href: "#" },
  { label: "Cennik", href: "#" },
  { label: "Kontakt", href: "#" },
];

export const features = [
  { icon: <Wrench /> },
  { icon: <TriangleAlert /> },
  { icon: <Shield /> },
  { icon: <UserRoundCheck /> },
  { icon: <Bike /> },
  { icon: <UserRoundSearch /> },
];

export const resourcesLinks = [
  { href: "#", i18nKey: "footer_link_getting_started" },
  { href: "#", i18nKey: "footer_link_documentation" },
  { href: "#", i18nKey: "footer_link_tutorials" },
  { href: "#", i18nKey: "footer_link_api_reference" },
  { href: "#", i18nKey: "footer_link_community_forums" },
];

export const platformLinks = [
  { href: "#", i18nKey: "footer_link_features" },
  { href: "#", i18nKey: "footer_link_supported_devices" },
  { href: "#", i18nKey: "footer_link_system_requirements" },
  { href: "#", i18nKey: "footer_link_downloads" },
  { href: "#", i18nKey: "footer_link_release_notes" },
];

export const communityLinks = [
  { href: "#", i18nKey: "footer_link_events" },
  { href: "#", i18nKey: "footer_link_meetups" },
  { href: "#", i18nKey: "footer_link_conferences" },
  { href: "#", i18nKey: "footer_link_hackathons" },
  { href: "#", i18nKey: "footer_link_jobs" },
];
