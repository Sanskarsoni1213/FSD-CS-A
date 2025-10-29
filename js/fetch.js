const username='sanskar';
const url='https://api.github.com/users/${username}';
const pr=fetch(url);
      pr.then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        console.log("data=",data);
      })
      .catch((err)=>{
        console.error("error=",err.message);
      })
      .finally(()=>{
        console.log("successfully exe");
      })