import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "AI Cloud", href: "#solutions" },
    { name: "Operations", href: "#comparison" },
    { name: "Company", href: "#hero" },
    { name: "Resources", href: "#metrics" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
          logo="Future Watt"
          navItems={navItems}
          ctaButton={{
            text: "Get Started",
            href: "#contact",
          }}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Future Watt New Energy"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              label: "Grid Tech",
              href: "#solutions",
            },
            {
              label: "Solar Array",
              href: "#",
            },
            {
              label: "Storage",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Future Watt Inc."
      links={[
        {
          label: "Contact Us",
          href: "#contact",
        },
        {
          label: "Twitter",
          href: "#",
        },
        {
          label: "LinkedIn",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
