import { BenefitCard, BenefitsList } from "@/widgets/landing/benefits";
import { Hero } from "@/widgets/landing/Hero";
import { Card } from '@/shared/ui/Card'

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsList />
      <Card />
    </>
  );
}
