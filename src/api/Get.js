import axios from "axios";


async function GetRepositories(user) {

    try {
        const apiUrl = 'https://api.github.com/users/nori-io/repos';
      
        const response = await axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            console.log("allRepos is", allRepos)
        //    setAppState({ loading: false, repos: allRepos });
          });
        var x = response;
        console.log("response is", x)

        return x;
    } catch (error) {
        console.error(error);
    }


}


export {
    GetRepositories 
};