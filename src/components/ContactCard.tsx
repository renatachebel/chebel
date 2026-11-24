import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface ContactCardProps {
  className?: string;
  align?: 'start' | 'end';
}

export default function ContactCard({ className, align = 'end' }: ContactCardProps) {
  return (
    <Popover>
      <PopoverTrigger type="button" className={className}>Contact</PopoverTrigger>
      <PopoverContent
        aria-label="Contact details"
        align={align}
        sideOffset={12}
        collisionPadding={16}
        className="z-[60] w-max max-w-[calc(100vw-2rem)] select-text space-y-2 rounded-none px-5 py-4 text-base normal-case tracking-normal"
      >
        <p><span className="sr-only">Phone: </span>+55 (11) 98556-4289</p>
        <p><span className="sr-only">Email: </span>chebel@gmail.com</p>
      </PopoverContent>
    </Popover>
  );
}
