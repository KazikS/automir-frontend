import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Данная страницы не существует </h2>
      <Link href="/">
        <Text color="blue" fontWeight="bold">На главную</Text>
      </Link>
    </div>
  );
}
