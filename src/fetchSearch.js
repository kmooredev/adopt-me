import getAccessToken from "./getAccessToken";

const token = getAccessToken("https://api.petfinder.com/v2/oauth2/token");

async function fetchSearch({ queryKey }) {
  const { type, location, breed } = queryKey[1];

  const res = await fetch(
    `https://api.petfinder.com/v2/animals?type=${type}&location=${location}&breed=${breed}`,
    {
      headers: {
        //prettier-ignore
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  /* const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?type=${type}&location=${location}&breed=${breed}`
  ); */

  if (!res.ok) {
    throw new Error(`pet search not okay ${type}, ${location}, ${breed}`);
  }

  return res.json();
}

export default fetchSearch;
