import { cn } from "@/shared/utils/styling";
import Link from "next/link";

interface Props {
  size?: "small"|"medium",
  describe?: string;
  route: string;
  className?: string;
}

const Logo = ({ size = 'medium', describe, route, className }: Props) => {
  let sizeClass = 'text-2xl';

  switch (size) {
    case "small":
      sizeClass = 'text-base';
      break;
  }

  return (
    <Link href={route} className={cn("text-black dark:text-white", className)}>
      <span className={cn(sizeClass, "mr-2", "font-semibold")}>
        Crypto<span className="text-brand">Cash</span>
      </span>
      { describe && <span className="text-xs">{describe}</span> }
    </Link>
  )
}

export default Logo;