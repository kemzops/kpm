import { Command } from "commander";

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

const kpm = new Command();

kpm
  .name("kpm")
  .description(
    "KPM - Simple yet useful linux Package Manager to manage portable packages."
  )
  .version(VERSION, "-v, --version")

// Commands
import add from "./commands/add.mjs";
add(kpm)

export default kpm;
