import { CarCard } from "@/entities/car/ui/CarCard";
import { BenefitsList } from "@/widgets/benefits";
import { Hero } from "@/widgets/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsList />
      <CarCard />
    </>
  );
}
