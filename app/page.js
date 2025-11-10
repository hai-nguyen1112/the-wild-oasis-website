import Image from 'next/image';
import Link from 'next/link';
import bg from '@/public/bg.png';

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={75}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-primary-800 font-semibold transition-all hover:bg-accent-600 px-4 py-3 text-sm     sm:px-6 sm:py-4 sm:text-base md:px-8 md:py-5 md:text-lg lg:px-10 lg:py-6 lg:text-xl"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
