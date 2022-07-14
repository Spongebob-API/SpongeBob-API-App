import { client } from './client';

export async function fetchShows() {
  const rawData = await fetch(`/.netlify/functions/spongebob`);
  const data = await rawData.json();
  return data;
}

export async function fetchSingleEpisode(number) {
  const rawData = await fetch(`/.netlify/functions/episode?episodeQuery=${number}`);

  const data = await rawData.json();

  return data;
}

export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({ email, password });
  await createProfile(email);
  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({ email, password });
  return user;
}

export async function createProfile(email) {
  const { body } = await client.from('user_profiles').insert({ email });
  return body;
}

export function getUser() {
  return client.auth.user();
}