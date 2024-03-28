import { program } from "commander";

import { DESCRIPTION, VERSION } from "../configs/variables.js";

program.name("kpm").description(DESCRIPTION).version(VERSION, "-v, --version");

// Commands
import addCommand from "./commands/add.js";
program.addCommand(addCommand);

export default program;
