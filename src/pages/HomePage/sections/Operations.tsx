import React from 'react';
import { Globe, Battery, Zap, ExternalLink, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';

export default function OperationsSection(): React.JSX.Element {
  const stats = [
    { label: 'Battery Energy Storage System', value: '10+ BESS', icon: Battery, desc: 'Utility-scale energy storage deployed across global grids' },
    { label: 'Total Operational Capacity', value: '1,200+ MW', icon: Zap, desc: 'High-density power management and clean energy output' },
  ];

  const regions = [
    {
      country: 'Australia',
      capacity: '1,118 MW',
      status: 'Operational',
      details: 'Large-scale battery energy storage and smart grid infrastructure.',
      flag: '🇦🇺'
    },
    {
      country: 'Japan',
      capacity: 'Active Hub',
      status: 'Operational',
      details: 'Precision energy distribution and network stability operations.',
      flag: '🇯🇵'
    },
    {
      country: 'Romania',
      capacity: 'Active Hub',
      status: 'Operational',
      details: 'European clean energy management and strategic BESS deployment.',
      flag: '🇷🇴'
    }
  ];

  return (
    <div data-webild-section="operations" id="operations" className="py-20 bg-background relative overflow-hidden">
      <div className="w-content-width mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Dashboard CTA */}
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-foreground mb-4">
                <Globe className="w-3.5 h-3.5 text-primary-cta" />
                Global Operations
              </span>
              <TextAnimation
                tag="h2"
                text="Operations & Fleet Capacity"
                variant="slide-up"
                gradientText={false}
                className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
              />
              <p className="text-accent text-base md:text-lg">
                Powering clean energy infrastructure across Australia, Japan, and Romania with advanced BESS technology.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://dashboard.aethir.com/protocol/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary-cta-text bg-primary-cta hover:opacity-90 transition-all shadow-md group"
              >
                <span>Live Protocol Dashboard</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Highlight Stats */}
        <ScrollReveal variant="fade-blur" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-card border border-accent/20 shadow-sm flex items-start gap-5 hover:border-primary-cta/40 transition-colors"
              >
                <div className="p-4 rounded-xl bg-primary-cta/10 text-primary-cta shrink-0">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-accent">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Regional Hubs */}
        <ScrollReveal variant="slide-up" delay={200}>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-cta" />
              Key Operational Regions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regions.map((region, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-accent/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl" role="img" aria-label={region.country}>{region.flag}</span>
                        <h4 className="text-lg font-bold text-foreground">{region.country}</h4>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {region.status}
                      </span>
                    </div>
                    <p className="text-sm text-accent mb-6">{region.details}</p>
                  </div>
                  <div className="pt-4 border-t border-accent/10 flex items-center justify-between">
                    <span className="text-xs font-medium text-accent">Capacity</span>
                    <span className="text-base font-extrabold text-foreground">{region.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}