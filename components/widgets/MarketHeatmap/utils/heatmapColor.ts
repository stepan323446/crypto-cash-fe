import { MIN_COLOR_CHANGE_GAP } from "@shared/const/crypto";

const getRedColor = (brightness: number) => `hsl(0 52.1% ${brightness}%)`;
const getGreenColor = (brightness: number) => `hsl(120 52.1% ${brightness}%)`;

export function getHeatmapColor(change24h: number): string {
  const LIGHT_CHANGE_BRIGHT = 71;
  const MEDIUM_CHANGE_BRIGHT = 47;
  const HEAVY_CHANGE_BRIGHT = 34;

  const change24Abs = Math.abs(change24h)

  if (change24Abs < MIN_COLOR_CHANGE_GAP) {
    return 'hsl(0 0% 60%)'
  }

  const getColor = change24h >= 0 ? getGreenColor : getRedColor;

  if(change24Abs > 3)
    return getColor(HEAVY_CHANGE_BRIGHT);
  if(change24Abs > 1)
    return getColor(MEDIUM_CHANGE_BRIGHT);

  return getColor(LIGHT_CHANGE_BRIGHT);
}