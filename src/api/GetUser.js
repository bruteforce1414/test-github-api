import axios from "axios";


async function Get(user) {
  const apiUrl = 'https://api.github.com/users/nori-io';

  try {
    const response = await axios.get(apiUrl);
    console.log("response is", response)
    return response;
  } catch (error) {
    return (error);
  }

}

async function GetUser(user) {

  try {
    let x = await Get()
    return x.data
  } catch (err) {
    return err;
  }
}

export {
  GetUser
};