import pf from "./Pf";

const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const numId = Number(id);
  try {
    const apiRes = await pf.animal.show(numId);
    return apiRes.data.animal;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchPet;
