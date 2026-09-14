import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

interface SocialLink {
  href: string;
  icon: IconProp
}

export const socialLinks: SocialLink[] = [
  {
    href: 'https://steve-dekart.xyz/',
    icon: faGlobe
  },
  {
    href: 'https://www.linkedin.com/in/stepan-turitsin/',
    icon: faLinkedin
  },
  {
    href: 'https://t.me/SteveDekart',
    icon: faTelegram
  },
  {
    href: 'mailto:stevedekart2020@gmail.com',
    icon: faEnvelope
  }
]
