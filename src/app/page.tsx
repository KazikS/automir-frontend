import { CarCard } from "@/entities/car/ui/CarCard";
import { BenefitsList } from "@/widgets/benefits";
import { Hero } from "@/widgets/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsList />
      <CarCard
        category="new"
        brand={"Toyots"}
        model={"Camry"}
        year={2023}
        engineVolume={2.5}
        mileage={12000}
        price={2850000}
        transmission={"АКПП"}
        images={[
          "https://images.hgmsites.net/lrg/2023-toyota-camry-se-auto-natl-angular-front-exterior-view_100857360_l.jpg",
        ]} power={238}      />
    </>
  );
}
