import CabinList from '@/app/_components/CabinList';
import { Suspense } from 'react';
import Loading from './loading';
import Filter from '@/app/_components/Filter';
import ReservationReminder from '../_components/ReservationReminder';

// Next.js caches the page that is rendered statically which may give us old data. To prevent that, we need to set the period of revalidating of data to 0 in the page where we think the data can be changed overtime so that Next.js will always give us the latest data. If we set revalidate to 5 seconds, Next.js will revalidate the data every 5 seconds.
// export const revalidate = 0;

export const metadata = {
  title: 'Cabins',
};

export default async function Page({ searchParams }) {
  const { capacity } = await searchParams;
  const filter = capacity || 'all';
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* Having the key attribute will make suspense component showing the Loading when switching between filter options. Otherwise, we will only see the Loading when coming to the page for the first time */}
      <Suspense fallback={<Loading />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
