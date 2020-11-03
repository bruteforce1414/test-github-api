import axios from "axios";


 async function GetRepositories2(user) {
    const apiUrl = 'https://api.github.com/users/nori-io/repos';

    try {
      const response = await axios.get(apiUrl);
      
     
      return response;
    } catch (error) {
      console.error(error);
    }

}

async function GetRepositories(user) {
        
  try {
    let x = await GetRepositories2()
    console.log("returned result is", x);
    return x.data   
  } catch(err) {
    console.log("catch");
}
}



export {
    GetRepositories 
};