import axios from "axios";


async function Get(user) {
  console.log("USER Is", user)
  const apiUrl = "https://api.github.com/users/"+user+"/repos";

  try {
    const response = await axios.get(apiUrl);
    return response;
  } catch (error) {
    return (error);
  }

}

async function GetRepositories(user) {

  try {
    let x = await Get(user)
    return x.data
  } catch (err) {
    return err;
  }
}

export {
  GetRepositories
};