// This file is for server actions
'use server';

import { auth, signIn, signOut } from './auth';
import { updateGuest } from './data-service';
import { revalidatePath } from 'next/cache';

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

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
