import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MIN_COLOR_CHANGE_GAP } from "@shared/const/crypto";
import { cn } from "@shared/lib/utils";
import { ReactNode, useMemo } from "react";

interface Props {
  value: number
  children?: ReactNode
  className?: string
  hasArrow?: boolean
  hasPersentage?: boolean
}

const ChangeGapText = ({ value, children, className, hasArrow = false, hasPersentage = true }: Props) => {
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
      { iconArrow && <FontAwesomeIcon icon={iconArrow} /> }{ children } { hasPersentage && '%' }
    </span>
  )
}

export default ChangeGapText;