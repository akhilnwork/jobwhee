import Link from 'next/link';
//import { cn } from '../../utils/cn'
import { cn } from '@/utils/cn';
const Button = ({ text, css = 'bg-white text-black', link = '/' }) => {
  return (
    <Link
      className={cn(
        'flex h-10 w-24 items-center justify-center rounded-[10rem] bg-white text-xs font-medium text-black md:h-10 md:w-24 xl:h-12 xl:w-32 md:text-sm',
        css
      )}
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
