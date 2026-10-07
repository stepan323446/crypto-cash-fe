import { FiatDto } from "../api/types";

export function getCurrentFiat(fiats: FiatDto[] | undefined, code: string): FiatDto | undefined {
  return fiats?.find((f) => f.code === code)
}