import { ServiceType } from "../model/type";

export const MOCK_SERVICES: ServiceType[] = [
  {
    id: 1,
    image: "/images/services/trade-in.svg",
    name: "Trade-In",
    description: "Обмен старого автомобиля на новый с доплатой",
  },
  {
    id: 2,
    image: "/images/services/buyout.svg",
    name: "Срочный выкуп",
    description:
      "Выкупим ваш автомобиль за 1 день. Честная оценка, деньги сразу",
  },
  {
    id: 3,
    image: "/images/services/maintenance.svg",
    name: "Сервисное обслуживание",
    description:
      "Полное техническое обслуживание, диагностика, установка доп. оборудования",
  },
  {
    id: 4,
    image: "/images/services/insurance.svg",
    name: "Автострахование",
    description: "Оформление ОСАГО и КАСКО от ведущих страховых компаний",
  },
  {
    id: 5,
    image: "/images/services/tires.svg",
    name: "Продажа автошин и дисков",
    description: "Подбор и продажа шин и дисков для любых автомобилей",
  },
  {
    id: 6,
    image: "/images/services/credit.svg",
    name: "Автокредитование",
    description:
      "Оформление автокредита на выгодных условиях от ведущих банков",
  },
];
