import pf from "./Pf";

const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const numId = Number(id);
  console.log(numId);
  try {
    const apiRes = await pf.animal.show(numId);
    console.log(apiRes.data.animal);
    return apiRes.data.animal;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchPet;
