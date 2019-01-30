export interface User {
  readonly name: string;
  readonly surname: string;
  readonly email: string;
}

interface Slug {
  readonly userId: string;
}

const USERS_URL = `${process.env.API_URL}/users`;
const SLUGS_URL = `${process.env.API_URL}/slugs`;

async function getUser(axios: any, userId: string): Promise<User | null> {
  let user: User;

  try {
    const res = await axios.get(`${USERS_URL}/${userId}`);
    user = res.data;
  } catch (e) {
    return null;
  }

  return user;
}

async function getSlug(axios: any, slugStr: string): Promise<Slug | null> {
  let slug: Slug;

  try {
    const res = await axios.get(`${SLUGS_URL}`, {
      params: {
        filter: JSON.stringify({ where: { text: slugStr } }),
      },
    });
    slug = res.data[0];
  } catch (e) {
    return null;
  }

  return slug;
}

export async function getUserData(axios: any, idOrSlug: string): Promise<User> {
  let user: User | null;

  user = await getUser(axios, idOrSlug);
  if (user) return user;

  const slug = await getSlug(axios, idOrSlug);
  if (!slug) throw Error('Invalid slug');

  user = await getUser(axios, slug.userId);
  if (!user) throw Error('Invalid user');

  return user;
}
