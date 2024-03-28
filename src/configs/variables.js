import os from "os";
import path from "path";

export const PREFIX = "\x1b[1;33m[KPM]\x1b[0m ";
export const DESCRIPTION =
  "Simple yet useful linux Package Manager to manage portable packages.";
export const VERSION = "0.0.1";

export const labels = {
  error: "\x1b[31m[ERROR]\x1b[0m ",
  warning: "\x1b[33m[WARNING]\x1b[0m ",
  info: "\x1b[34m[INFO]\x1b[0m ",
  success: "\x1b[32m[SUCCESS]\x1b[0m ",
};

export const homeDir = os.homedir();
export const kpmDir = path.join(homeDir, ".kpm"); // main Dir

export const downloadDir = path.join(kpmDir, "downloads"); // Dir to store all downloads (finished downloads)
export const packagesDir = path.join(kpmDir, "packages"); // Dir to store all packages
export const tempDir = path.join(kpmDir, "temp"); // temp Dir to download packages (unfinished downloads)
export const dataDir = path.join(kpmDir, "data"); // Dir to store all data for kpm

// list of github repositories to download packages from (and cache releases)
export const repositoriesFile = path.join(kpmDir, "repositories.json");

export const packagesFile = path.join(dataDir, "packages.json"); // to keep track of all packages
export const downloadsFile = path.join(dataDir, "downloads.json"); // to keep track of all downloads
export const releasesFile = path.join(dataDir, "releases.json"); // releases cache
