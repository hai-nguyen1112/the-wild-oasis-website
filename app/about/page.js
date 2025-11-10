import Image from 'next/image';
import about1 from '@/public/about-1.jpg';
import { getCabins } from '../_lib/data-service';

// Force Next.js to fetch cabins after each day
export const revalidate = 86400;

export const metadata = {
  title: 'About',
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div
      className="grid gap-12 text-lg items-center
        grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32"
    >
      <div className="lg:col-span-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg">
          <p>
            Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you'll find in the surrounding mountains. Wander
            through lush forests, breathe in the fresh air, and watch the stars
            twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 order-first md:order-none">
        {/*The Image element from next.js will automatically load and analyze the image and therefore will make the image responsive automatically. In addition, we are also able to use attributes such as placeholder, quality... However, this only works for image that we can import into the component. In this case, it is the image about1 */}
        <Image
          src={about1}
          placeholder="blur"
          quality={75}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="relative aspect-square w-full lg:col-span-2">
        {/*For the image that we cannot import into the component, we can still use the Image element from next.js but the image won't be analyzed by next.js beforehand and therefore it won't be responsive. To make it responsive we have to do it manually like this example. And, we won't be able to use attributes such as placeholder, quality... */}
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="lg:col-span-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-2 transition-all font-semibold
                bg-accent-500 text-primary-800 hover:bg-accent-600
                px-5 py-3 text-sm
                sm:px-6 sm:py-4 sm:text-base
                md:px-8 md:py-5 md:text-lg"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
