const fetchBreedList = async ({ queryKey }) => {
  const type = queryKey[1];

  if (!type) return [];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?type=${type}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${type} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;
