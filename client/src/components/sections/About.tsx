import BlurFade from '../animated/BlurFadeContainer';
import SectionTitle from '../SectionTItle';

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  const paragraphClassName = 'bg-secondary rounded-full p-4 text-center text-secondary-text';

  return (
    <div className="w-full">
      <BlurFade delay={BLUR_FADE_DELAY * 3} animateOnView>
        <SectionTitle title="About Me" link="/?#about" />
      </BlurFade>
      <div className="flex flex-col gap-y-12 mx-auto w-full max-w-4xl py-20 text-xl font-medium">
        <BlurFade delay={BLUR_FADE_DELAY * 5} animateOnView>
          <p className={paragraphClassName}>
            I am {new Date().getFullYear() - new Date(2000, 9).getFullYear()}{' '}
            years old from Sofia, Bulgaria. I am a full-stack developer with 3
            years of experience, specialized with React, NodeJS and Typescript.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 7} animateOnView>
          <p className={paragraphClassName}>
            I have build web projects from the ground up, handling both the
            frontend and backend development.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 9} animateOnView>
          <p className={paragraphClassName}>
            My goal is to build web and mobile applications with attractive,
            intuitive UI/UX, optimized performance, and a clean, testable, and
            maintainable codebase.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 12} animateOnView>
          <p className={paragraphClassName}>
            I am adaptable and tend to use the best and most popular
            technologies and frameworks, along with best practices to turn ideas
            into software. I am always eager to improve and perfect my skills.
          </p>
        </BlurFade>
      </div>
    </div>
  );
}
