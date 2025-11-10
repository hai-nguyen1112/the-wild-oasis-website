import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 justify-center md724:justify-start z-10 shrink-0"
    >
      <Image
        src={logo}
        height="60"
        width="60"
        quality={75}
        alt="The Wild Oasis logo"
      />
      <span className="text-lg md724:text-xl font-semibold text-primary-100 whitespace-nowrap">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
