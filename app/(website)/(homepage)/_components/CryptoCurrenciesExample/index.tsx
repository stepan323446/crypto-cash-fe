import { DescribeBlock, DescribeBlockContent, DescribeBlockTitle } from "@/components/shared/DescribeBlock"

interface Props {
  className?: string;
}

const CryptoCurrenciesExample = ({ className }: Props) => {
  return (
    <DescribeBlock className={className}>
      <div>
        
      </div>
      <DescribeBlockContent>
        <DescribeBlockTitle>Many <span className="text-brand">crypto</span> currencies</DescribeBlockTitle>
        <p>The wallet supports multiple cryptocurrencies on the TON network, including TON, USDT, and BTC.</p>
        <p>It also offers conversion between tokens and displays price trends and analytics, helping users manage their portfolio effectively.</p>
        <p>The wallet is built with security and scalability in mind, using smart contracts.</p>
      </DescribeBlockContent>
    </DescribeBlock>
  )
}

export default CryptoCurrenciesExample