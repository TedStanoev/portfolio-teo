import Link from 'next/link';

interface Props {
  title: string;
  link: string;
}

export default function SectionTitle({ title, link }: Props) {
  return (
    <div className="flex flex-col w-full items-center justify-center h-40 p-4">
      <Link
        href={link}
        className="headline font-bold tracking-tighter text-tertiary"
      >
        {title}
      </Link>
    </div>
  );
}
