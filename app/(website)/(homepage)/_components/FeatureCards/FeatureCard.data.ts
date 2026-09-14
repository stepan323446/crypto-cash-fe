import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGlobe, faHandHoldingUsd, faLock, faShieldAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";

interface CardInfo {
  title: string;
  description: string;
  icon: IconProp;
}

const cards: CardInfo[] = [
  {
    title: "Fast & Global",
    description: "Instant transactions worldwide without borders or banks.",
    icon: faGlobe
  },
  {
    title: "Low Fees",
    description: "Minimal transaction costs compared to traditional payment systems.",
    icon: faHandHoldingUsd
  },
  {
    title: "Decentralization",
    description: "Crypto works without a central authority, giving users control and enabling peer-to-peer transactions.",
    icon: faUserTie
  },
  {
    title: "Security & Transparency",
    description: "Every transaction is permanently recorded on the blockchain, making it transparent, tamper-proof, and easily verifiable.",
    icon: faLock
  },
  {
    title: "Privacy",
    description: "Users can send and receive crypto without revealing unnecessary personal information, keeping their data private and secure.",
    icon: faShieldAlt
  },
]

export default cards;