'use client';

import {
  faUser,
  faHeart,
  faLightbulb,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons';

import { DATA } from '@/data';

import BlurFade from '../animated/BlurFadeContainer';
import SectionTitle from '../typography/SectionTItle';
import IconPill from '../pills/IconPill';

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <div className="flex flex-col m-16 bg-secondary rounded-2xl border-y-2 border-tertiary-blur py-5">
      <BlurFade
        delay={BLUR_FADE_DELAY * 3}
        className="w-full border-b-2 border-black"
        animateOnView
      >
        <SectionTitle title="About Me" link="/?#about" />
      </BlurFade>

      <div className="my-20 flex flex-col gap-10 items-center justify-center mx-auto w-full max-w-5xl">
        <IconPill
          text={`I am ${DATA.years} years old from Sofia, Bulgaria`}
          blurDelay={BLUR_FADE_DELAY * 10}
          iconProps={{ icon: faUser, beat: true }}
          animateOnView
        />
        <IconPill
          text={`My passion is to create software like bussiness websites, web applications, mobile apps and games`}
          blurDelay={BLUR_FADE_DELAY * 10}
          iconProps={{ icon: faHeart, beat: true }}
          animateOnView
        />
        <IconPill
          text={`I am a Mid-Level Full-Stack Developer at SoftZen. I am also studying bussiness and economics at University of National and World Economy`}
          blurDelay={BLUR_FADE_DELAY * 10}
          iconProps={{ icon: faLightbulb, beat: true }}
          animateOnView
        />
        <IconPill
          text={`My goal is to have my own software company one day`}
          blurDelay={BLUR_FADE_DELAY * 10}
          iconProps={{ icon: faBullseye, beat: true }}
          animateOnView
        />
      </div>
    </div>
  );
}
