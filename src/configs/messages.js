import { PREFIX, labels } from "./variables.js";
export const messages = {
  // Labels (for easy access)
  error: labels.error,
  warning: labels.warning,
  info: labels.info,
  success: labels.success,

  // General Messages
  fetchingData: labels.info + "Fetching data...",

  // General Error Messages
  unexpectedError: labels.error + "An unexpected error has occurred:",
  exit: PREFIX + "Exiting...",

  // Add Command
  addCommandDescription: "Add a repository to the list of repositories to download & install packages from",
  addCommandArgumentDescription: "Owner and repository name (e.g. kemzops/kpm)",
  addCommandAlreadyExists: labels.warning + "The repository already exists.",
  addCommandSuccess: labels.success + "Repository added successfully.",
};
