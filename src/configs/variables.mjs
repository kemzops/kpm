import os from "os";
import path from "path";

export const PREFIX = "[KPM]";
export const VERSION = "0.0.1";

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