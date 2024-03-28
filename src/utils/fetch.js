import fetch from "node-fetch";
import { messages } from "../configs/messages.js";

export default async (url) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "kemzops/kpm",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`${messages.unexpectedError}\n${err}\n${messages.exit}`);
  }
};
