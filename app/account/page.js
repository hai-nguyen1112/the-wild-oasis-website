import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Guest Area',
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name.split(' ')[0];
  return (
    <div className="mt-4 lg1000:mt-0">
      <h2 className="font-semibold text-xl sm:text-2xl text-accent-400 mb-1">
        Welcome, <span>{firstName}</span>
      </h2>
      <p className="text-base sm:text-lg text-primary-200">
        Use the Reservations section to manage bookings and the Guest Profile
        section to update your information.
      </p>
    </div>
  );
}
