import meImage from '@/assets/me.png';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shadcn/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "./social.data";
import repos from "./repo.data";
import { SquareIcon } from "@/components/shared";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props {
  className?: string;
}

const BusinessCard = ({ className }: Props) => {
  return (
    <Card className={cn("max-w-230 p-4 md:p-11", className)}>
      <CardHeader className="mb-4">
        <CardTitle className="text-2xl text-center mb-5">Full stack Developer</CardTitle>
        <CardDescription className="text-center md:text-lg">
            I am a dedicated Fullstack and Frontend Developer with experience in Next, Nuxt, and Django, skilled in API integration, payment systems. I work on building scalable web applications using modern technologies and practices
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        <div className="w-62.5 mx-auto">
          <div className='w-62.5 h-62.5 p-2.5 bg-inside rounded-md mb-3'>
            <Image 
              className="w-full h-full object-cover rounded-md"
              src={meImage} alt="Stepan Turitsin"
              sizes='250px' />
          </div>
          <div className="flex justify-between">
            {socialLinks.map((ln, i) => (
              <a 
              key={i} href={ln.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 text-xl bg-inside hover:opacity-70 flex justify-center items-center rounded-md">
                <FontAwesomeIcon icon={ln.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-primary-text text-2xl mb-4">My project is open source</div>
          <div className="grid gap-3">
            { repos.map((repo, i) => (
              <a 
              key={i} href={repo.href}
              rel="noopener noreferrer"
              target="_blank"
              className="block">
                <Card className="bg-inside hover:opacity-70">
                  <CardHeader className="flex">
                    <SquareIcon className="mr-2 shrink-0 translate-y-1">
                      <FontAwesomeIcon icon={faGithub} />
                    </SquareIcon>
                    <div>
                      <CardTitle>{repo.title}</CardTitle>
                      <CardDescription>{repo.subtitle}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {repo.description}
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BusinessCard;