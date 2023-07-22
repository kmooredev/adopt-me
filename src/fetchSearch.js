async function fetchSearch({ queryKey }) {
  const { type, location, breed } = queryKey[1];

  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?type=${type}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`pet search not okay ${type}, ${location}, ${breed}`);
  }

  return res.json();
}

export default fetchSearch;
