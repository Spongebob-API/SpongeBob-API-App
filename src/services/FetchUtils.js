import { client } from './client';

export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({ email, password });
  await createProfile(email);
  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({ email, password });
  return user;
}

export async function getUser() {
  return client.auth.user();
}

export async function createProfile(email) {
  const { body } = await client.from('user_profiles').insert({ email });
  return body;
}

export async function fetchShows(title) {
  const rawData = await fetch(`/.netlify/functions/spongebob`);
  const data = await rawData.json();
  if (title){
    return data.episodes.filter(episode => episode.name.toLowerCase().includes(title.toLowerCase()));
  } else return data.episodes;
}

export async function fetchSingleEpisode(number) {
  const rawData = await fetch(`/.netlify/functions/episode?episodeQuery=${number}`);

  const data = await rawData.json();

  return data;
}

export async function createFavorite(favorite) {
  const { body } = await client.from('favorites').insert(favorite);

  return body;
}

export async function deleteFavorite(id) {
  const { body } = await client.from('favorites').delete().match({ id }).single();

  return body;
}

export async function getFavorites(id) {
  if (id) {
    const { body } = await client.from('favorites').select('*').match({ user_id: id });

    return body;
  } else {
    const { body } = await client.from('favorites').select('*').match({ user_id: getUser().id });

    return body;
  }
}

export async function handleFetchFavorites(id) {
  const favorites = await getFavorites(id);

  getFavorites(favorites);
}

export async function logout() {
  await client.auth.signOut();
}
