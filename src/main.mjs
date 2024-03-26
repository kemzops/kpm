#!/usr/bin/env node

/**
 * KPM - Simple yet useful linux Package Manager to manage portable packages.
 * https://github.com/kemzops/kpm
 *
 * @author kemzops
 * @license GPL-3.0-or-later
 */

import fs from "fs";
import path from "path";

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
} from "./configs/variables.mjs";

import { messages } from "./configs/messages.mjs";

// make sure we have the required directories and files
try {
  fs.mkdirSync(kpmDir, { recursive: true });
  fs.mkdirSync(downloadDir, { recursive: true });
  fs.mkdirSync(packagesDir, { recursive: true });
  fs.mkdirSync(tempDir, { recursive: true });
  fs.mkdirSync(dataDir, { recursive: true });

  // create files if they don't exist
  if (!fs.existsSync(repositoriesFile))
    fs.writeFileSync(repositoriesFile, JSON.stringify([]));
  if (!fs.existsSync(packagesFile))
    fs.writeFileSync(packagesFile, JSON.stringify([]));
  if (!fs.existsSync(downloadsFile))
    fs.writeFileSync(downloadsFile, JSON.stringify([]));
  if (!fs.existsSync(releasesFile))
    fs.writeFileSync(releasesFile, JSON.stringify([]));
} catch (err) {
  console.error(
    `${messages.error} ${messages.unexpectedError}\n${err}\n${PREFIX} ${messages.exit}`
  );
  process.exit(1);
}

// KPM CLI
import cli from "./cli/cli.mjs";
cli.parse(process.argv);