import Image from 'next/image';
import TextExpander from '@/app/_components/TextExpander';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';

function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-6 lg:gap-20 border border-primary-800 py-3 px-4 sm:px-6 lg:px-10 mb-12">
      {/* IMAGE */}
      <div className="relative w-full h-72 sm:h-96 lg:h-auto">
        <Image
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="eager"
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      {/* CONTENT */}
      <div>
        {/* TITLE */}
        <h3
          className="
        text-accent-100 font-black bg-primary-950
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        my-2 p-2
         
      "
        >
          Cabin {name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-lg text-primary-300 mb-6 sm:mb-8 lg:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        {/* FEATURES LIST */}
        <ul className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-sm sm:text-base lg:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-sm sm:text-base lg:text-lg">
              Located in the heart of{' '}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-sm sm:text-base lg:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
