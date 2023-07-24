import pf from "./petfinder";

async function fetchSearch({ queryKey }) {
  const { type, location, breed } = queryKey[1];

  try {
    const res = await pf.animal.search({
      type: type,
      breed: breed,
      location: location,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchSearch;
