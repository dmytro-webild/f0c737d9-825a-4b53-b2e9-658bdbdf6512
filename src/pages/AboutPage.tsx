import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import ContactCta from "@/components/sections/contact/ContactCta";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function AboutPage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroSplitKpi
            tag="Future Watt New Energy"
            title="Powering Next-Generation Clean Energy Infrastructure"
            description="We pioneer sustainable power solutions, grid transformation, and zero-carbon energy technology for a cleaner global future."
            primaryButton={{ text: "Our Technology", href: "#mission" }}
            secondaryButton={{ text: "Get in Touch", href: "/#contact" }}
            kpis={[
              { value: "1.2 GW", label: "Clean Power Managed" },
              { value: "100%", label: "Renewable Commitment" },
              { value: "99.9%", label: "Grid Uptime" },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/wind-turbines-by-highway-eco-travel-scenic-infrastructure_169016-68028.jpg?_wi=1"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="mission" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
            tag="Sustainable Energy Architecture"
            title="Intelligent Microgrids & Zero-Emission Computing"
            description="Future Watt connects high-density energy generation directly with resilient grid networks and scalable digital infrastructure."
            items={[
              {
                icon: "Zap",
                title: "Renewable Generation",
                description: "Utilizing utility-scale solar, wind, and geothermal energy assets to maximize clean yield.",
              },
              {
                icon: "Cpu",
                title: "Eco Computing",
                description: "Decarbonizing high-performance data infrastructure with locally integrated clean power.",
              },
              {
                icon: "Shield",
                title: "Grid Resilience",
                description: "Stabilizing regional power systems with advanced battery storage and real-time load balancing.",
              },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/close-up-environment-project_23-2148894106.jpg?_wi=1"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="team" data-section="team">
        <SectionErrorBoundary name="team">
          <TeamProfileCards
            tag="Leadership"
            title="Guided by Visionaries in Energy & Tech"
            description="Our executive team brings decades of experience in utility scaling, infrastructure, and grid innovation."
            items={[
              {
                title: "Elena Rostova",
                description: "Chief Executive Officer — Clean energy grid strategy & digital power architecture.",
                avatarSrc: "http://img.b2bpic.net/free-photo/confident-attractive-asian-businesswoman-looking-camera-head-shot-portrait_1163-4734.jpg",
                buttonText: "LinkedIn",
                buttonHref: "#",
                imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151098592.jpg",
              },
              {
                title: "Marcus Vance",
                description: "Head of Energy Strategy — Microgrid integration & utility-scale energy storage.",
                avatarSrc: "http://img.b2bpic.net/free-photo/proud-businessman-with-his-company_1098-2864.jpg",
                buttonText: "LinkedIn",
                buttonHref: "#",
                imageSrc: "http://img.b2bpic.net/free-photo/african-american-male-professional-works-desk-corporation_482257-122689.jpg?_wi=1",
              },
              {
                title: "Aisha Patel",
                description: "VP of Systems Engineering — Next-gen power dispatch & smart grid software.",
                avatarSrc: "http://img.b2bpic.net/free-photo/woman-working-hard-greenhouse_23-2149037324.jpg",
                buttonText: "LinkedIn",
                buttonHref: "#",
                imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling-outside-office-building_107420-74332.jpg",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="Join the Energy Transition"
            text="Partner with Future Watt to build a reliable, sustainable power framework."
            primaryButton={{ text: "Contact Our Team", href: "/#contact" }}
            secondaryButton={{ text: "Explore Solutions", href: "/#solutions" }}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}