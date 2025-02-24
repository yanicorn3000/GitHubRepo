import { useQuery } from "@tanstack/react-query";

const fetchOptions = {
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
};

export const fetchRepos = async (query) => {
  if (!query) throw new Error("Query parameter is required");

  try {
    const url = new URL(
      `https://api.github.com/search/repositories?q=${query}`
    );
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetching error", error);
    throw error;
  }
};

export const createRepoLSKey = (repoId) => `repo-${repoId}`;

export const fetchRepoById = async (repoId) => {
  if (!repoId) throw new Error("Repo ID is required");
  const lsKey = createRepoLSKey(repoId);

  try {
    const localRepo = localStorage.getItem(lsKey);

    if (!localRepo) {
      throw new Error("no repo in localstorage");
    }

    const data = JSON.parse(localRepo);
    return data;
  } catch {
    try {
      const url = new URL(`https://api.github.com/repositories/${repoId}`);
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();

      localStorage.setItem(lsKey, JSON.stringify(responseJson));

      return responseJson;
    } catch (error) {
      console.error("Fetching error", error);
      throw error;
    }
  }
};

export const useRepoById = (repoId) => {
  return useQuery({
    queryKey: ["repo", repoId],
    queryFn: () => fetchRepoById(repoId),
    enabled: !!repoId,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, // Dane przechowywane w cache przez 10 minut
  });
};

export const useRepos = (query) => {
  return useQuery({
    queryKey: ["repos", query],
    queryFn: () => fetchRepos(query),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
