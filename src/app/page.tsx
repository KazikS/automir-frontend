import { CarCardType } from "@/entities/car/model/type";
import { BenefitsList } from "@/widgets/benefits";
import { CarList } from "@/widgets/carList/ui/CarList";
import { Hero } from "@/widgets/hero";

export default function Home() {
  const CAR_MOCK: CarCardType[] = [
    {
      brand: "Toyota",
      model: "Camry",
      year: 2023,
      engineVolume: 2.5,
      mileage: 12000,
      price: 2850000,
      transmission: "Автомат",
      power: 200,
      category: "new",
      images: [
        "https://images.hgmsites.net/lrg/2023-toyota-camry-se-auto-natl-angular-front-exterior-view_100857360_l.jpg",
        "https://autockidka.ru/storage/images/sjbVBodWj6FIGcORBE92p96Yvehg96.jpg",
      ],
      createdAt: "2024-01-15",
    },
    {
      brand: "BMW",
      model: "5 Series",
      year: 2021,
      engineVolume: 2.0,
      mileage: 45000,
      price: 4200000,
      transmission: "Автомат",
      power: 184,
      category: "used",
      images: [
        "https://avatars.mds.yandex.net/get-autoru-vos/5151058/57ab63b704d452f9ef94b58cf30ce80a/456x342",
      ],
      createdAt: "2024-02-10",
    },
    {
      brand: "Kia",
      model: "K5",
      year: 2022,
      engineVolume: 1.6,
      mileage: 30000,
      price: 2100000,
      transmission: "Робот",
      power: 180,
      category: "tradeIn",
      images: [
        "https://kolesa-uploads.ru/-/1594e96c-d8ac-4101-b905-c288cb73b95d/toyota-camry-front1-mini.jpg",
      ],
      createdAt: "2024-03-05",
    },
    {
      brand: "Mercedes-Benz",
      model: "E-Class",
      year: 2023,
      engineVolume: 2.0,
      mileage: 5000,
      price: 6500000,
      transmission: "Автомат",
      power: 197,
      category: "new",
      images: [
        "https://images.hgmsites.net/lrg/2023-toyota-camry-se-auto-natl-angular-front-exterior-view_100857360_l.jpg",
      ],
      createdAt: "2024-03-20",
    },
    {
      brand: "Hyundai",
      model: "Sonata",
      year: 2020,
      engineVolume: 2.0,
      mileage: 68000,
      price: 1750000,
      transmission: "Автомат",
      power: 150,
      category: "used",
      images: [
        "https://autockidka.ru/storage/images/sjbVBodWj6FIGcORBE92p96Yvehg96.jpg",
      ],
      createdAt: "2024-01-28",
    },
  ];
  return (
    <>
      <Hero />
      <BenefitsList />
      <CarList cars={CAR_MOCK} />
    </>
  );
}
