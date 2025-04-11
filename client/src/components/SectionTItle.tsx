import Link from 'next/link';

interface Props {
  title: string;
  link: string;
}

export default function SectionTitle({ title, link }: Props) {
  return (
    <div className="flex flex-col w-full items-center justify-center h-40 bg-secondary p-4">
      <Link
        href={link}
        className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-secondary-text border-b"
      >
        {title}
      </Link>
    </div>
  );
}
