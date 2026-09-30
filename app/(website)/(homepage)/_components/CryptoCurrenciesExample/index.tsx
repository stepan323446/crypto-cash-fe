import { buttonVariants } from "@shadcn/components/ui/button";
import { routes } from "@shared/config/routes";
import { cn } from "@shared/lib/utils";
import { DescribeBlock, DescribeBlockContent, DescribeBlockTitle } from "@shared/ui/DescribeBlock"
import CoinSmallList from "@widgets/CoinSmallList";
import Link from "next/link";

interface Props {
  className?: string;
}

const CryptoCurrenciesExample = ({ className }: Props) => {
  return (
    <DescribeBlock className={className}>
      <div className="flex justify-center flex-col order-2 lg:order-1 max-w-100">
        <CoinSmallList sort="-change_24h" className="w-full" />
      </div>
      <DescribeBlockContent className="order-1 lg:order-2">
        <DescribeBlockTitle>Many <span className="text-brand">crypto</span> currencies</DescribeBlockTitle>
        <p>The wallet supports multiple cryptocurrencies on the TON network, including TON, USDT, and BTC.</p>
        <p>It also offers conversion between tokens and displays price trends and analytics, helping users manage their portfolio effectively.</p>
        <p>The wallet is built with security and scalability in mind, using smart contracts.</p>
        <Link href={routes.market()} className={cn(buttonVariants({ size: 'lg' }), 'px-6')}>Discover</Link>
      </DescribeBlockContent>
    </DescribeBlock>
  )
}

export default CryptoCurrenciesExample