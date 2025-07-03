'use client';

import { cn } from '@/lib/utils';

interface Props {
  label: string;
  text?: string;
  className?: string;
  paragraphClassName?: string;
  labelClassName?: string;
  children?: React.ReactNode;
}

export default function LabeledParagraph({
  label,
  text,
  className,
  labelClassName,
  paragraphClassName,
  children,
}: Props) {
  if (children) {
    return (
      <div className={cn('flex flex-col gap-2', className)}>
        <span
          className={cn(
            'text-xl font-bold text-tertiary uppercase',
            labelClassName
          )}
        >
          {label}
        </span>
        {children}
      </div>
    );
  }
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <span
        className={cn(
          'text-xl font-bold text-tertiary uppercase',
          labelClassName
        )}
      >
        {label}
      </span>
      <p
        className={cn(
          'text-lg text-tertiary-blur font-semibold',
          paragraphClassName
        )}
      >
        {text}
      </p>
    </div>
  );
}
