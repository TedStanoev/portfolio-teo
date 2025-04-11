import BlurFadeContainer from "./animated/BlurFadeContainer";

interface Props {
  label: string;
  text: string;
  delay: number;
}

export default function LabeledParagraph({ label, text, delay }: Props) {
  return (
    <BlurFadeContainer className="flex flex-col gap-2" animateOnView delay={delay}>
      <span className="text-3xl font-bold text-tertiary">{label}</span>
      <p className="text-2xl text-tertiary font-semibold">{text}</p>
    </BlurFadeContainer>
  );
};