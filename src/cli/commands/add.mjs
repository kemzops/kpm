import { Command } from "commander";
import fetch from "../../utils/fetch.mjs";

const addCommand = new Command("add");
addCommand.description(
  "Add a repository to the list of repositories to download packages from"
);
addCommand.argument("<owner>/<repo>", "Owner and repository name");
addCommand.action(async (ownerAndRepo) => {
  // TODO - WIP
  const [owner, repo] = ownerAndRepo.split("/");
  const data = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (data) {
    console.log(data);
  }
});

export default addCommand;
