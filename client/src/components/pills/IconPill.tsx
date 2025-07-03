import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import BlurFade from '../animated/BlurFadeContainer';

type Props = {
  text: string;
  iconProps?: FontAwesomeIconProps;
  blurDelay?: number;
  animateOnView?: boolean;
};

export default function IconPill({
  text,
  blurDelay = 0.04 * 5,
  animateOnView = true,
  iconProps,
}: Props) {
  return (
    <BlurFade
      className="bg-black p-6 mb-4 text-center text-tertiary-blur rounded-full w-[100%] text-2xl border border-tertiary shadow-lg shadow-tertiary-blur relative"
      delay={blurDelay}
      animateOnView={animateOnView}
    >
      {iconProps && (
        <span className="absolute -top-4 left-1/2 px-3 split-background rounded-2xl border-x border-tertiary">
          <FontAwesomeIcon {...iconProps} />
        </span>
      )}
      {text}
    </BlurFade>
  );
}
