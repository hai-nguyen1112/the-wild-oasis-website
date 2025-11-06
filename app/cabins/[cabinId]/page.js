import Cabin from '@/app/_components/Cabin';
import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';
import { getCabin, getCabins } from '@/app/_lib/data-service';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}

// In Next.js, static rendering means the page is rendered during build and just waits to be sent to the browser. Dynamic rendering means the page is rendered upon user's request. Static rendering happens when Next.js knows everything about the route during build (the route doesn't have dynamic values such params, search params, e.g. localhost:3000/cabins). Dynamic rendering happens when the route has dynamic value, e.g. localhost:3000/cabins/2 which Next.js only knows when the user requests the route.
// This is to provide Next.js the list of cabin ids so that Next.js can render the page for each cabin statically for better performance.
export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
