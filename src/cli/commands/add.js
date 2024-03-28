import fs from "fs";

import { Command } from "commander";
import fetch from "../../utils/fetch.js";

import { repositoriesFile } from "../../configs/variables.js";

import { messages } from "../../configs/messages.js";

const addCommand = new Command("add");
addCommand.description(messages.addCommandDescription);
addCommand.argument("<owner>/<repo>", messages.addCommandArgumentDescription);

addCommand.action(async (ownerAndRepo) => {
  let [owner, repo] = ownerAndRepo.split("/");

  if (!owner || !repo) {
    console.log(`${messages.info}${messages.addCommandArgumentDescription}`);
    process.exit(0);
  }

  // toLowerCase (to help with case insensitivity)
  owner = owner.toLowerCase();
  repo = repo.toLowerCase();

  const repos = JSON.parse(fs.readFileSync(repositoriesFile));

  // check if the repo already exists
  const repoExists = repos.some((existingRepo) => existingRepo.full_name.toLowerCase() === owner + "/" + repo);
  if (repoExists) {
    console.log(`${messages.addCommandAlreadyExists}\n${messages.exit}`);
    process.exit(0);
  }

  console.log(messages.fetchingData);

  const data = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

  if (data.message) {
    console.log(`${messages.unexpectedError}\n${JSON.stringify(data)}\n${messages.exit}`);
    process.exit(1);
  }

  // add the repo to the list of repos
  repos.push({
    name: data.name,
    full_name: data.full_name,
    api_url: data.url,
    html_url: data.html_url,
    license: data.license ? data.license : null,
  });
  fs.writeFileSync(repositoriesFile, JSON.stringify(repos));
  console.log(`${messages.addCommandSuccess}`);
});

export default addCommand;
