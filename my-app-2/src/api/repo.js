import { useQuery } from "@tanstack/react-query";

export const fetchRepos = async (query) => {
  if (!query) throw new Error("Query parameter is required");

  try {
    const url = new URL(
      `https://api.github.com/search/repositories?q=${query}`
    );
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetching error", error);
    throw error;
  }
};

export const useRepos = (query) => {
  return useQuery({
    queryKey: ["repos", query],
    queryFn: () => fetchRepos(query),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
