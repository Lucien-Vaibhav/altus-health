import BenefitsSection from "../components/homepage/BenefitsSection";
import HealthCheckSection from "../components/homepage/HealthCheck";
import Hero from "../components/homepage/hero";

export default function Homepage() {
    return( <div>
        <Hero/>
        <HealthCheckSection/>
        <BenefitsSection />
      </div>)
   

}