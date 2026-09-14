import { buttonVariants } from "@shadcn/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mx-auto text-center p-3">
      <div>
        <div className="mb-2">
          <Link href="/">Update 1.0.5v: New crypto payment method</Link>
        </div>
        <h1 className="text-5xl mb-4 font-semibold">Control Your Crypto With Сrypto<span className="text-brand">Cash</span></h1>
        <div className="text-xl mb-6">
          Your all-in-one wallet with multi-currency support,<br/>smart analytics, and seamless transactions.
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Link href="/about" className={buttonVariants({ size: "lg" })}>
            Get Started
          </Link>
          <Link href="/about" className={buttonVariants({ variant: "secondary", size: "lg" })}>
            Learn More
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Hero;