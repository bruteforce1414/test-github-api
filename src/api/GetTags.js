import axios from "axios";


async function Get(user, repo) {
    const apiUrl = "https://api.github.com/repos/" + user+"/"+repo+ "/tags";

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error) {
        return (error);
    }
}

async function GetTags(user, repo) {
    try {
        let x = await Get(user,repo)
        return x.data
    } catch (err) {
        return err;
    }
}

export {
    GetTags
};