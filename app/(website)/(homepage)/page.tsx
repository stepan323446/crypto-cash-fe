import BusinessCard from "@/components/features/BusinessCard";
import CryptoCurrenciesExample from "./_components/CryptoCurrenciesExample";
import FeatureCards from "./_components/FeatureCards";
import Hero from "./_components/Hero";
import HowCryptoWorks from "./_components/HowCryptoWorks";
import WhatIsCryptoCash from "./_components/WhatIsCryptoCash";
import HeadTitle from "@/components/shared/HeadTitle";

const IndexPage = () => {
  return (
    <>
      <section className="pt-28 pb-16">
        <Hero />
      </section>
      <section className="mb-50">
        <FeatureCards />
      </section>
      <section className="container mx-auto mb-28">
        <HowCryptoWorks />
      </section>
      <section className="container mx-auto mb-28">
        <WhatIsCryptoCash />
      </section>
      <section className="container mx-auto mb-28">
        <CryptoCurrenciesExample />
      </section>
      <section className="container mx-auto mb-28">
        <HeadTitle className="text-center mb-10">Made by one dev</HeadTitle>
        <BusinessCard className="mx-auto" />
      </section>
    </>
  );
};

export default IndexPage;
