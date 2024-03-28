import fetch from "node-fetch";

export default async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "kemzops/kpm",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data;
};
