import { program } from "commander";

import {
  PREFIX,
  VERSION,
  homeDir,
  kpmDir,
  downloadDir,
  packagesDir,
  tempDir,
  dataDir,
  repositoriesFile,
  packagesFile,
  downloadsFile,
  releasesFile,
} from "../configs/variables.mjs";

import { messages } from "../configs/messages.mjs";

program
  .name("kpm")
  .description(
    "KPM - Simple yet useful linux Package Manager to manage portable packages."
  )
  .version(VERSION, "-v, --version")

// Commands
import addCommand from "./commands/add.mjs";
program.addCommand(addCommand);

export default program;
