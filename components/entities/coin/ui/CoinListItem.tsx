import Link from "next/link";
import { Coin } from "../model/types";
import { Card, CardContent } from "@shadcn/components/ui/card";
import CoinIcon from "./CoinIcon";
import { formatFloat, formatPrice } from "@shared/lib/formatters";
import { ChangeGapText } from "@shared/ui";
import { Skeleton } from "@shadcn/components/ui/skeleton";

interface Props {
  coin?: Coin;
  href: string;
}

const CoinListItem = ({ coin, href }: Props) => {
  if (!coin) return <Skeleton className="h-15" />

  return (
    <Link href={href}>
      <Card className="py-2 hover:opacity-70">
        <CardContent className="flex justify-between px-2">
          <div className="flex items-center">
            <CoinIcon coin={coin} className="mr-3 w-9 h-9 text-lg" />
            <div className="font-semibold">{ coin.name }</div>
          </div>
          <div className="text-right">
            <div className="mb-1">{ formatPrice(coin.price) }</div>
            <div><ChangeGapText value={coin.change24h} hasArrow>{formatFloat(coin.change24h)}</ChangeGapText></div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CoinListItem;