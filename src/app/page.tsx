import AwardsSection from "./components/aboutus/Awards";
import Testimonial from "./components/aboutus/Testimonial";
import BenefitsSection from "./components/homepage/BenefitsSection";
import DoctorsSection from "./components/homepage/DoctorSection";
import HealthCheckSection from "./components/homepage/HealthCheck";
import Hero from "./components/homepage/hero";
import LatestResearch from "./components/homepage/LatestResearch";
import ServiceSection from "./components/homepage/ServiceSection";
import StatsSection from "./components/homepage/StatsSection";

export default function Homepage() {
    return( <div>
        <Hero/>
        <HealthCheckSection/>
        <BenefitsSection />
        <StatsSection/>
        <DoctorsSection/>
        <ServiceSection/>
        <Testimonial/>
        <LatestResearch/>
        <AwardsSection/>
       
        
      </div>)
   

}