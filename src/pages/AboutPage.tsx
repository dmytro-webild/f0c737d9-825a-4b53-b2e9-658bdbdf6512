import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Future Watt"
        navItems={navItems}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <main>
        <HeroSplitKpi
          tag="Future Watt New Energy"
          title="Powering Next-Generation Digital & Energy Infrastructure"
          description="We pioneer sustainable power solutions, grid transformation, and zero-carbon computing technology for a cleaner global future."
          primaryButton={{ text: "Our Mission", href: "#mission" }}
          secondaryButton={{ text: "Get in Touch", href: "/contact" }}
          kpis={[
            { value: "1.2 GW", label: "Clean Power Managed" },
            { value: "100%", label: "Renewable Commitment" },
          ]}
          imageSrc="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />

        <div id="mission">
          <AboutFeaturesSplit
            tag="Sustainable Energy Architecture"
            title="Intelligent Microgrids & Zero-Emission Computing"
            description="Future Watt connects high-density energy generation directly with resilient grid networks and scalable digital infrastructure."
            items={[
              {
                icon: "Zap",
                title: "Renewable Generation",
                description: "Utilizing utility-scale solar, wind, and geothermal assets.",
              },
              {
                icon: "Cpu",
                title: "Eco Computing",
                description: "Decarbonizing high-performance data centers with local clean power.",
              },
              {
                icon: "Shield",
                title: "Grid Resilience",
                description: "Stabilizing regional power systems with advanced battery storage.",
              },
            ]}
            imageSrc="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
            textAnimation="slide-up"
          />
        </div>

        <TeamProfileCards
          tag="Leadership"
          title="Guided by Visionaries in Energy & Tech"
          description="Our executive team brings decades of experience in utility scaling, infrastructure, and grid innovation."
          items={[
            {
              title: "Elena Rostova",
              description: "Chief Executive Officer — Energy Pioneer",
              avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
            },
            {
              title: "Marcus Vance",
              description: "Head of Energy Strategy & Microgrids",
              avatarSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
            },
            {
              title: "Aisha Patel",
              description: "VP of Digital Infrastructure & Systems",
              avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
            },
          ]}
          textAnimation="slide-up"
        />

        <ContactCta
          tag="Join the Energy Transition"
          text="Partner with Future Watt to build a reliable, sustainable power framework."
          primaryButton={{ text: "Contact Our Team", href: "/contact" }}
          secondaryButton={{ text: "Explore Solutions", href: "#mission" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Future Watt"
        columns={[
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Mission", href: "#mission" },
              { label: "Contact", href: "/contact" },
            ],
          },
          {
            title: "Navigation",
            items: navItems.map((item) => ({ label: item.name, href: item.href })),
          },
        ]}
        copyright="© 2025 Future Watt New Energy Inc. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ]}
      />
    </div>
  );
}