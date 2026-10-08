export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const navigation: NavItem[] = [
  {
    href: "/",
    label: "Get started",
    description: "Hei bung cukup luangkan waktumu dan langsung saja eksekusi",
  },
  { href: "/dasar", label: "Dasar", description: "animate() dasar" },
  { href: "/test", label: "Test", description: "testing testing" },
];
