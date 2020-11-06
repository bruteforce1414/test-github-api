import axios from "axios";


async function Get(user) {
  const apiUrl = 'https://api.github.com/users/' + user;

  try {
    const response = await axios.get(apiUrl);
    return response;
  } catch (error) {
    return (error);
  }

}

async function GetUser(user) {

  try {
    let x = await Get(user)
    return x.data
  } catch (err) {
    return err;
  }
}

export {
  GetUser
};