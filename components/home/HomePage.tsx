import { CategoryHubGrid } from "./CategoryHubGrid";
import { CommercialGateway } from "./CommercialGateway";
import { HeroSection } from "./HeroSection";
import { HomeHeader } from "./HomeHeader";
import { LatestGuidesGrid } from "./LatestGuidesGrid";
import { LeadMagnetSection } from "./LeadMagnetSection";
import { ProblemPathwayGrid } from "./ProblemPathwayGrid";
import { ReviewMethodSection } from "./ReviewMethodSection";
import { SiteFooter } from "./SiteFooter";
import { StartHereFeature } from "./StartHereFeature";

export function HomePage() {
  return (
    <>
      <HomeHeader />
      <main>
        <HeroSection />
        <ProblemPathwayGrid />
        <StartHereFeature />
        <CategoryHubGrid />
        <ReviewMethodSection />
        <CommercialGateway />
        <LeadMagnetSection />
        <LatestGuidesGrid />
      </main>
      <SiteFooter />
    </>
  );
}
