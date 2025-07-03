'use client';

import { DATA } from '@/data';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import BlurFade from '../animated/BlurFadeContainer';
import LabeledParagraph from '../typography/LabeledParagraph';
import BlurFadeContainerText from '../animated/BlurFadeText';

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-between mx-auto w-full max-w-7xl space-y-8 h-full pb-24">
      <BlurFadeContainerText
        delay={BLUR_FADE_DELAY}
        text={DATA.name}
        containerClassName="text-center"
        className="text-7xl text-tertiary font-bold headline"
        animateByCharacter
      />

      <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-4 sm:px-0">
        <BlurFade
          className="flex justify-center w-1/3 order-2"
          delay={BLUR_FADE_DELAY}
        >
          <Avatar className="size-96 border bg-avatar-background p-5 border-none">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback className="text-4xl">
              {DATA.initials}
            </AvatarFallback>
          </Avatar>
        </BlurFade>

        <BlurFade
          className="flex flex-col gap-28 justify-self-end w-1/3 order-3 h-full"
          delay={BLUR_FADE_DELAY * 6}
        >
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <LabeledParagraph
              label="Experience"
              text={`+${DATA.yearsOfExperience} years`}
              className="text-end"
              paragraphClassName="text-4xl font-bold"
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <LabeledParagraph
              label="Employment"
              text={DATA.employment}
              className="text-end"
              paragraphClassName="text-4xl font-bold"
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <LabeledParagraph
              label="Position"
              text={DATA.position}
              className="text-end"
              paragraphClassName="text-4xl font-bold"
            />
          </BlurFade>
        </BlurFade>
      </div>
    </div>
  );
}
