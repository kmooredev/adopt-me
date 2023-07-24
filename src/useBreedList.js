import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(type) {
  const query = useQuery(["breeds", type], fetchBreedList);
  const results = query.data;

  return [results?.breeds ?? [], query.status];
}
