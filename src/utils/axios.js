import axios from "axios";

const accessToken = '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';
const getAPI = async()=>{
  const api = await axios.get("https://api.github.com/repos/angular/angular-cli/issues?state=open", {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
console.log(api.data)
}

export {getAPI}