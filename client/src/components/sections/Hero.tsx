'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SocialIcon } from 'react-social-icons';

import { DATA } from '@/data';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import BlurFadeText from '../animated/BlurFadeText';
import BlurFade from '../animated/BlurFadeContainer';
import ArrowsDownward from '../../../public/arrows_downward.svg';

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  const { replace } = useRouter();

  return (
    <div className="flex flex-col justify-center mx-auto w-full max-w-2xl space-y-8">
      <BlurFade className="flex justify-center" delay={BLUR_FADE_DELAY}>
        <Avatar className="size-52 border bg-avatar-background p-5 border-none">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback className="text-4xl">{DATA.initials}</AvatarFallback>
        </Avatar>
      </BlurFade>
      <div className="flex-col flex flex-1 gap-2 justifty-center">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center"
          containerClassName="justify-center"
          yOffset={8}
          text={DATA.name}
        />
        <BlurFadeText
          className="max-w-[600px] md:text-2xl"
          containerClassName="justify-center"
          delay={BLUR_FADE_DELAY}
          text="Full-Stack Developer"
        />
        <BlurFadeText
          className="max-w-[600px] md:text-2xl"
          containerClassName="justify-center"
          delay={BLUR_FADE_DELAY}
          text="Mid-Level"
        />
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex justify-center gap-x-1 pt-1 font-sans text-sm text-muted-foreground print:hidden">
            {DATA.contact.email ? (
              <Tooltip>
                <TooltipTrigger>
                  <SocialIcon
                    network="email"
                    href={`mailto:${DATA.contact.email}`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
            ) : null}
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <Tooltip key={name}>
                <TooltipTrigger>
                  <SocialIcon
                    network={social.network}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <Image
          src={ArrowsDownward}
          alt="Scroll down"
          className="mx-auto animate-bounce pt-[30%] hover:cursor-pointer"
          width={75}
          height={90}
          onClick={() => replace('#about')}
        />
      </BlurFade>
    </div>
  );
}
