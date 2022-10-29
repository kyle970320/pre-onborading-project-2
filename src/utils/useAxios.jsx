import axios from 'axios';

const gitAPI = `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=10&page=`;
const getAxios = async(num) => {
  const accessToken = process.env.REACT_APP_GITHUB_SECRET_TOKEN;
  const api = await axios.get(`${gitAPI + num}`, {
    headers: {
        Authorization: `Bearer ${accessToken}`
    },
})
return api.data
}

  export default getAxios;