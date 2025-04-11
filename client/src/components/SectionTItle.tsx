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
        className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-text border-b border-primary-text"
      >
        {title}
      </Link>
    </div>
  );
}
