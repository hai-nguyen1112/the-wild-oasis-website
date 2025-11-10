import CabinCard from './CabinCard';
import { getCabins } from '@/app/_lib/data-service';
import { unstable_noStore as noStore } from 'next/cache';

async function CabinList({ filter }) {
  // This is to prevent Next.js to cache the fetched cabins. Next.js Will fetch cabins everytime the user request the page. noStore() is equivalent to export const revalidate = 0
  noStore();

  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;
  if (filter === 'all') displayedCabins = cabins;
  else if (filter === 'small')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  else if (filter === 'medium')
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  else if (filter === 'large')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity > 7);
  else displayedCabins = cabins;

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
