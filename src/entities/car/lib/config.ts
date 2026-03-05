import { CarCardType, CarType } from "../model/type";

export const carBadge = {
  new: { label: "новый", color: "badge.new" },
  used: { label: "с пробегом", color: "badge.used" },
  tradeIn: { label: "trade-in", color: "badge.tradeIn" },
};

export const CAR_MOCK: CarCardType[] = [
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
      "/images/cars/bmw-1.jpeg",
      "/images/cars/bmw-2.jpeg",
      "/images/cars/bmw-3.jpeg",
    ],
    createdAt: "2024-02-10",
    id: 1,
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
      "/images/cars/kia-1.jpg",
      "/images/cars/kia-2.webp",
      "/images/cars/kia-3.jpg",
    ],
    createdAt: "2024-03-05",
    id: 2,
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
      "/images/cars/merc-1.jpeg",
      "/images/cars/merc-2.webp",
      "/images/cars/merc-3.jpg",
    ],
    createdAt: "2024-03-20",
    id: 3,
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
      "/images/cars/sonata-1.webp",
      "/images/cars/sonata-2.jpg",
      "/images/cars/sonata-3.jpg",
    ],
    createdAt: "2024-01-28",
    id: 4,
  },
];

export const CAR_DETAIL_MOCK: CarType[] = [
  {
    ...CAR_MOCK[0], // BMW 5 Series 2021
    fuelType: "Бензин",
    drive: "Задний",
    body: "Седан",
    color: "Чёрный металлик",
    wheelPosition: "Левый",
    generation: "G30 рестайлинг",
    equipment: "M Sport",
    description:
      "BMW 5 Series в кузове G30 после рестайлинга — один из лучших бизнес-седанов на рынке. Автомобиль в комплектации M Sport с агрессивным обвесом, спортивной подвеской и 18-дюймовыми дисками M. Салон отделан кожей Dakota, передние сиденья с электрорегулировкой и памятью. Полный пакет ассистентов: адаптивный круиз-контроль, удержание полосы, система предупреждения столкновений. Мультимедийная система iDrive 7 с 12.3-дюймовым дисплеем и проекцией на лобовое стекло. Двигатель 2.0 турбо выдаёт 184 л.с. и работает в паре с 8-ступенчатым автоматом ZF — сочетание мощности и экономичности. Пробег 45 000 км, полная сервисная история у официального дилера. Два комплекта резины на дисках.",
  },
  {
    ...CAR_MOCK[1], // Kia K5 2022
    fuelType: "Бензин",
    drive: "Передний",
    body: "Седан",
    color: "Белый перламутр",
    wheelPosition: "Левый",
    generation: "DL3",
    equipment: "GT Line",
    description:
      "Kia K5 в топовой комплектации GT Line — яркий представитель нового поколения корейских седанов. Запоминающийся дизайн с «тигриным носом», LED-оптика полного периметра и 19-дюймовые диски. Турбированный двигатель 1.6 T-GDi выдаёт 180 л.с. и работает с роботизированной коробкой DCT с двумя сцеплениями — переключения молниеносные. Внутри: кожаный салон, панорамная крыша, вентиляция передних сидений, подогрев руля и задних сидений. Мультимедиа с 10.25-дюймовым экраном, Bose аудиосистема на 12 динамиков, беспроводные Apple CarPlay и Android Auto. Полный набор систем безопасности Kia DriveWise. Автомобиль по программе Trade-In, один владелец, без ДТП.",
  },
  {
    ...CAR_MOCK[2], // Mercedes-Benz E-Class 2023
    fuelType: "Бензин",
    drive: "Полный (4MATIC)",
    body: "Седан",
    color: "Серебристый",
    wheelPosition: "Левый",
    generation: "W214",
    equipment: "AMG Line",
    description:
      "Новейший Mercedes-Benz E-Class W214 — эталон комфорта и технологий в бизнес-классе. Комплектация AMG Line добавляет спортивный обвес, решётку с «бриллиантами», 20-дюймовые диски AMG и спортивную подвеску. Полный привод 4MATIC обеспечивает уверенность на любом покрытии. Салон с отделкой кожей Nappa, 64-цветная амбиентная подсветка, система ароматизации Air Balance. Цифровая панель MBUX Superscreen с тремя экранами, включая дисплей для пассажира. Двигатель M254 мощностью 197 л.с. с интегрированным стартер-генератором ISG — технология мягкого гибрида снижает расход и добавляет 20 л.с. на разгоне. Пробег всего 5 000 км, автомобиль на гарантии производителя до 2026 года.",
  },
  {
    ...CAR_MOCK[3], // Hyundai Sonata 2020
    fuelType: "Бензин",
    drive: "Передний",
    body: "Седан",
    color: "Тёмно-синий",
    wheelPosition: "Левый",
    generation: "DN8",
    equipment: "Style",
    description:
      "Hyundai Sonata восьмого поколения в комплектации Style — оптимальный баланс оснащения и стоимости. Кузов DN8 с купеобразным профилем и сквозными LED-ходовыми огнями выглядит свежо даже спустя годы. Двигатель 2.0 MPI мощностью 150 л.с. с 6-ступенчатым автоматом — проверенная и надёжная связка. Комплектация включает кожаный салон, подогрев всех сидений, электропривод водительского кресла, камеру заднего вида и парктроники. Мультимедиа с 8-дюймовым экраном, поддержка CarPlay и Android Auto. Климат-контроль двухзонный. Пробег 68 000 км, регулярное обслуживание, есть все документы. Отличный вариант надёжного семейного седана по разумной цене.",
  },
];
