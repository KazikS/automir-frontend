import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number): string {
  const [finalQuery, setFinalQuery] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(setFinalQuery, delay, value);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return finalQuery;
}
