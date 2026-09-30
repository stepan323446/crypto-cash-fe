import { coinKeys } from "@entities/coin/api/queryKeys";
import { getCoin } from "@entities/coin/api/requests";
import { getQueryClient } from "@shared/api/getQueryClient";
import { PrimaryNavbarSpacing } from "@widgets/PrimaryNavbar";
import { notFound } from "next/navigation";
import CoinDetails from "./_components/CoinDetails";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface Props {
  params: Promise<{ slug: string }>
}

const CoinPage = async ({ params }: Props) => {
  const queryClient = getQueryClient();
  const { slug } = await params;

  const coin = await queryClient.query({
    queryKey: coinKeys.detail(slug),
    queryFn: () => getCoin(slug),
  })
  if(!coin)
    notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PrimaryNavbarSpacing />
      <div className="container mx-auto">
        <CoinDetails slug={slug} />
      </div>
    </HydrationBoundary>
  )
}

export default CoinPage;