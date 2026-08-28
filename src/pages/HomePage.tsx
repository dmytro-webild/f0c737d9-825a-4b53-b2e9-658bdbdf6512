import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151098592.jpg",
        "http://img.b2bpic.net/free-photo/woman-working-hard-greenhouse_23-2149037324.jpg",
        "http://img.b2bpic.net/free-photo/confident-businessman-smiling-outside-office-building_107420-74332.jpg",
        "http://img.b2bpic.net/free-photo/view-footbridge-night_1359-1078.jpg",
      ]}
      avatarText="Join our network"
      title="Powering the Future of New Energy"
      description="Advanced energy solutions for a sustainable world. Empowering industries with efficiency, reliability, and innovation."
      primaryButton={{
        text: "Explore Solutions",
        href: "#solutions",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      names={[
        "InnovateGrid",
        "SolarGen",
        "PureFlow",
        "GridLogic",
        "TerraPulse",
        "NextVolt",
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-modern-background-with-flowing-cyber-lines-particles_1048-13985.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="We redefine how power is generated, managed, and consumed. Future Watt New Energy is the cornerstone of a sustainable, decentralized, and intelligent grid."
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="solutions" data-section="solutions">
    <SectionErrorBoundary name="solutions">
          <FeaturesRevealCardsBento
      tag="Technology"
      title="Our Core Innovations"
      description="Proprietary tech that scales your sustainability infrastructure."
      items={[
        {
          title: "Cell Tech",
          description: "High density energy cells.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-environment-project-scene_23-2148896042.jpg",
        },
        {
          title: "Grid Dashboard",
          description: "Real-time management.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-concept-with-futuristic-element_23-2151910928.jpg",
        },
        {
          title: "Solar Array",
          description: "Next gen capture.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-environment-project_23-2148894106.jpg",
        },
        {
          title: "Wind Capture",
          description: "Optimized turbine tech.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/wind-turbines-by-highway-eco-travel-scenic-infrastructure_169016-68028.jpg",
        },
        {
          title: "Storage Units",
          description: "Modular power banks.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-background-texture_23-2148105476.jpg",
        },
        {
          title: "Transmission",
          description: "High performance lines.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hard-drive-with-red-light-still-life_23-2149417035.jpg",
        },
        {
          title: "Smart Grid",
          description: "AI driven distribution.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-industrial-designer-works-prototypes-creative-studio_482257-124242.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="comparison" data-section="comparison">
    <SectionErrorBoundary name="comparison">
          <FeaturesComparison
      tag="Advanced Comparison"
      title="Why Choose Future Watt?"
      description="Standard energy solutions vs. Future Watt intelligent infrastructure."
      negativeItems={[
        "High latency monitoring",
        "Manual scaling overhead",
        "Fragmented legacy systems",
      ]}
      positiveItems={[
        "Real-time predictive analytics",
        "Zero-touch automated scaling",
        "Unified intelligent grid ecosystem",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Proven Impact"
      title="Performance at Scale"
      description="Data that defines our commitment to reliability."
      metrics={[
        {
          value: "99.9%",
          title: "Grid Reliability",
          features: [
            "Predictive uptime",
            "Self-healing circuits",
          ],
        },
        {
          value: "40%",
          title: "Efficiency Gain",
          features: [
            "Reduced load stress",
            "Optimized routing",
          ],
        },
        {
          value: "12M+",
          title: "KWh Managed",
          features: [
            "Sustainable sources",
            "Peak performance",
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Client Stories"
      title="Voices of the New Grid"
      description="Trusted by leaders in sustainability and industrial innovation."
      testimonials={[
        {
          id: "1",
          name: "Dr. Sarah Chen",
          role: "Head of Engineering",
          company: "EcoSystems",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-attractive-asian-businesswoman-looking-camera-head-shot-portrait_1163-4734.jpg",
        },
        {
          id: "2",
          name: "Michael Roberts",
          role: "CTO",
          company: "SolarPulse",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/proud-businessman-with-his-company_1098-2864.jpg",
        },
        {
          id: "3",
          name: "Elena Martinez",
          role: "Operations",
          company: "GridDirect",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-male-professional-works-desk-corporation_482257-122689.jpg",
        },
        {
          id: "4",
          name: "David Okafor",
          role: "Architect",
          company: "TerraBuild",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/wind-farms-fields_23-2149154408.jpg",
        },
        {
          id: "5",
          name: "Jessica Lee",
          role: "PM",
          company: "NextGen",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-desk-table-business-company-office_482257-16773.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Our Network"
      title="Powered by Innovation"
      description="Collaborating with global pioneers."
      names={[
        "TerraCorp",
        "GridInnovators",
        "EcoEnergy",
        "NextVolt",
        "SolarAlliance",
        "PureGrid",
        "SustainableFutures",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Join the energy revolution and scale your sustainability impact today."
      primaryButton={{
        text: "Contact Sales",
        href: "mailto:hello@fwatt.ai",
      }}
      secondaryButton={{
        text: "View Documentation",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
