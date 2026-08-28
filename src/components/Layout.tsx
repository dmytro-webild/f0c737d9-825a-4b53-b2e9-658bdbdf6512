import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "about"
  },
  {
    "name": "Solutions",
    "href": "solutions"
  },
  {
    "name": "Metrics",
    "href": "metrics"
  },
  {
    "name": "Contact",
    "href": "contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Comparison",
    "href": "#comparison"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  { name: "About", href: "/about" },

];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Future Watt"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
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
              label: "About Us",
              href: "#about",
            },
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
