'use server';

import { signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function signInWithGitHub() {
  await signIn('github');
  redirect('/');
}