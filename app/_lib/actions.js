// This file is for server actions
'use server';

import { redirect } from 'next/navigation';
import { auth, signIn, signOut } from './auth';
import {
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from './data-service';
import { revalidatePath } from 'next/cache';

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const guestBookingIds = (await getBookings(session?.user?.guestId)).map(
    (booking) => booking.id
  );

  const bookingId = Number(formData.get('bookingId'));

  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to update this reservation');

  const updateData = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
  };

  await updateBooking(bookingId, updateData);

  revalidatePath(`/account/reservations/edit/${bookingId}`);

  redirect('/account/reservations');
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const nationalID = formData.get('nationalID').trim();
  const nationalityStr = formData.get('nationality').trim();

  if (!nationalityStr.length) throw new Error('Please provide a country');

  const [nationality, countryFlag] = nationalityStr.split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error('Please provide a valid national ID');

  const updateData = { nationality, countryFlag, nationalID };

  await updateGuest(session?.user?.guestId, updateData);

  // Revalidate the data of the current route so that the page will be updated with the updated data. We have to do this because Next.js caches data for dynamic pages for 30 seconds.
  revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const guestBookingIds = (await getBookings(session?.user?.guestId)).map(
    (booking) => booking.id
  );

  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to delete this reservation');

  await deleteBooking(bookingId);

  revalidatePath('/account/reservations');
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
