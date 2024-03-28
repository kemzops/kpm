import { program } from "commander";

import {
  PREFIX,
  DESCRIPTION,
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

program.name("kpm").description(DESCRIPTION).version(VERSION, "-v, --version");

// Commands
import addCommand from "./commands/add.mjs";
program.addCommand(addCommand);

export default program;
