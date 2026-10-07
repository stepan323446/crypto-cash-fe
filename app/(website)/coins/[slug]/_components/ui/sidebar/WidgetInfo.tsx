'use client'

import { CoinDetail } from "@entities/coin/model/types";
import { InfoRow } from "@shared/ui";
import { WidgetBlock } from "@shared/ui/WidgetBlock";
import WidgetRowsSkeleton from "./WidgetRowsSkeleton";
import Chip from "@shared/ui/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react";
import { routes } from "@shared/config/routes";
import { Popover, PopoverContent, PopoverTrigger } from "@shadcn/components/ui/popover";
import { Button, buttonVariants } from "@shadcn/components/ui/button";
import Link from "next/link";

interface Props {
  coin?: CoinDetail
}

const formatCategoryUrl = (catId: number) => routes.market() + `?categories=${catId}`;

const WidgetInfo = ({ coin }: Props) => {
  const [copied, setCopied] = useState(false);

  if(!coin)
    return <WidgetRowsSkeleton />

  const handleCopy = async () => {
    await navigator.clipboard.writeText(coin.slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  console.log(coin.websiteUrls);
  return (
    <WidgetBlock className="space-y-3">
      <InfoRow label="API ID">
        <Chip onClick={handleCopy}>
          {coin.slug} <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        </Chip>
      </InfoRow>
      {coin.websiteUrls.length > 0 && <InfoRow label="Websites">
        <div className="flex flex-wrap items-center justify-end gap-1">
          {coin.websiteUrls.map((web, i) => <Chip key={i} href={web.url} external>{web.domain} <FontAwesomeIcon icon={faExternalLinkAlt} /></Chip>)}
        </div>
      </InfoRow>}
      {coin.primaryChain && <InfoRow label="Chain">
        <Chip href={routes.market() + `?network=${coin.primaryChain.id}`}>{ coin.primaryChain.name }</Chip>
      </InfoRow>}
      {coin.categories && <InfoRow label="Categories">
        <div className="flex flex-wrap items-center justify-end gap-1">
          <Chip href={formatCategoryUrl(coin.categories_detail[0].id)}>{ coin.categories_detail[0].name }</Chip>
          {coin.categories.length > 1 && <Popover>
            <PopoverTrigger render={<Chip>+{ coin.categories.length - 1 }</Chip>} />
            <PopoverContent align="end">
              <div className="space-y-1 -mx-2.25">
                {coin.categories_detail.map((cat) => 
                <Link key={cat.id} href={formatCategoryUrl(cat.id)} className='hover:bg-inside p-1.5 px-3 rounded-md block'>
                  {cat.name}
                </Link>)}
              </div>
            </PopoverContent>
          </Popover>}
        </div>
      </InfoRow>}

    </WidgetBlock>
  )
}
export default WidgetInfo;