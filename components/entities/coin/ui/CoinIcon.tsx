import { cn } from "@/shared/utils/styling";
import { Coin } from "../model/types";
import { Skeleton } from "@shadcn/components/ui/skeleton";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";

interface Props {
  coin?: Coin
  className?: string
}

const CoinIcon = ({ coin, className }: Props) => {
  if (!coin) return <Skeleton className={cn("w-8 h-8 rounded-md", className)} />

  return (
    <div className={cn("w-8 h-8 rounded-md bg-inside flex justify-center items-center overflow-hidden", className)}>
      { coin.icon ? 
        <Image 
          src={coin.icon} alt={coin.name} width={35} height={35}
          className="w-full h-full object-cover" /> : 
        <div><FontAwesomeIcon icon={faRing} /></div>
      }
    </div>
  )
}

export default CoinIcon;