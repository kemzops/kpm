import fetch from "../../utils/fetch.mjs";
export default function add(kpm) {
    kpm.command("add <owner>/<repo>")
        .description("Add a repository to the list of repositories to download packages from")
        .action(async (ownerAndRepo) => {
            // TODO - WIP
            const [owner, repo] = ownerAndRepo.split("/");
            const data = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            if (data) {
                console.log(data)
            }
        });
}