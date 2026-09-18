import { DescribeBlock, DescribeBlockContent, DescribeBlockTitle } from "@shared/ui/DescribeBlock"
import CoinSmallList from "@widgets/CoinSmallList";

interface Props {
  className?: string;
}

const CryptoCurrenciesExample = ({ className }: Props) => {
  return (
    <DescribeBlock className={className}>
      <div className="flex justify-center order-2 lg:order-1">
        <CoinSmallList sort="-market_cap" className="max-w-100 w-full" />
      </div>
      <DescribeBlockContent className="order-1 lg:order-2">
        <DescribeBlockTitle>Many <span className="text-brand">crypto</span> currencies</DescribeBlockTitle>
        <p>The wallet supports multiple cryptocurrencies on the TON network, including TON, USDT, and BTC.</p>
        <p>It also offers conversion between tokens and displays price trends and analytics, helping users manage their portfolio effectively.</p>
        <p>The wallet is built with security and scalability in mind, using smart contracts.</p>
      </DescribeBlockContent>
    </DescribeBlock>
  )
}

export default CryptoCurrenciesExample