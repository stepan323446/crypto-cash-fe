import { DescribeBlock, DescribeBlockContent, DescribeBlockTitle } from "@/components/shared/DescribeBlock" 
import ExampleGraph from "./ExampleGraph";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const HowCryptoWorks = ({ className }: Props) => {
  return (
    <DescribeBlock className={cn("px-3", className)}>
      <DescribeBlockContent>
        <DescribeBlockTitle>How <span className="text-brand">CRYPTO</span> works?</DescribeBlockTitle>
        <p>Crypto runs on public, decentralized networks — no bank, no middleman, just a shared ledger everyone can verify.</p>

        <p>Smart contracts automate transfers and enforce rules directly on-chain, so transactions settle without needing a third party to approve them.</p>

        <p>CryptoCash simplifies access to crypto by providing an easy-to-use interface for blockchain services.</p>
      </DescribeBlockContent>
      <div className="lg:max-w-125 w-full shrink-0">
        <ExampleGraph />
      </div>
    </DescribeBlock>
  )
}

export default HowCryptoWorks;