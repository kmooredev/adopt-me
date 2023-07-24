import pf from "./Pf";

const fetchBreedList = async ({ queryKey }) => {
  const type = queryKey[1];

  if (!type) return [];

  try {
    const apiRes = await pf.animalData.breeds(type);
    return apiRes.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchBreedList;
