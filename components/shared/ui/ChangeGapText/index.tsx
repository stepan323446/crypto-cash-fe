import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MIN_COLOR_CHANGE_GAP } from "@shared/const/crypto";
import { formatFloat } from "@shared/lib/formatters";
import { cn } from "@shared/lib/utils";
import { useMemo } from "react";

interface Props {
  value: number
  className?: string
  hasArrow?: boolean
  hasPersentage?: boolean
}

const ChangeGapText = ({ value, className, hasArrow = false, hasPersentage = true }: Props) => {
  const colorClass = useMemo(() => {
    if (value > MIN_COLOR_CHANGE_GAP)
      return 'text-rate-up';
    
    if (value < -MIN_COLOR_CHANGE_GAP)
      return 'text-rate-down';

    return 'text-rate-same';

  }, [value]);

  const iconArrow = useMemo(() => {
    if (!hasArrow)
      return null;

    if (value > MIN_COLOR_CHANGE_GAP)
      return faCaretUp;
    
    if (value < -MIN_COLOR_CHANGE_GAP)
      return faCaretDown;

    return null;

  }, [value, hasArrow]);

  return (
    <span className={cn(colorClass, className)}>
      { iconArrow && <FontAwesomeIcon icon={iconArrow} /> }{ formatFloat(value) } { hasPersentage && '%' }
    </span>
  )
}

export default ChangeGapText;