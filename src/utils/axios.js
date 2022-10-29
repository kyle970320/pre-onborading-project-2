import axios from "axios";

const accessToken = process.env.REACT_APP_GITHUB_SECRET_TOKEN;
const getAPI = async(num)=>{
  const api = await axios.get(`https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=10&page=${num}`, {
    headers: {
        Authorization: `Bearer ${accessToken}`
    },
})
return api.data;
}

export {getAPI}