import axios from "axios";


async function Get(user) {

    const apiUrl = "https://api.github.com/repos" + user + "/tags";

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error) {
        return (error);
    }
}

async function GetTags(user) {

    try {
        let x = await Get(user)
        return x.data
    } catch (err) {
        return err;
    }
}

export {
    GetTags
};