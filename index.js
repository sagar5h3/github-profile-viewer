let user =document.querySelector(".nameid")


async function api(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();
    console.log(result); 
    userinterface(result)
    
}


let btn1 = document.querySelector('.btn1').addEventListener('click',()=>{
    let userid = search.value
    console.log(userid);
    api(userid)
})


function userinterface(result){
    let {
        avatar_url,
        name,
        bio,
        followers,
        following,
        public_repos,
        html_url,
        }=result

    if(!avatar_url){
        document.queryselector('.rolew').innerhtml='<h1>user not found</h1>'
        return
        
    }

        
                document.querySelector('.viewersection').innerHTML=      `    
                <div class="image">
                     <img src= ${avatar_url} alt="" class="img">
                     <p class="nameid">${name}</p>
                    <p class="role">${bio}</p>
                </div>
                <div>            
                    <div class="details">
                    <div>
                        <p class="details">follower</p>
                        <p class="fw">${followers}</p>
                </div>
                    <div>
                        <p class="details">following</p>
                        <p class="fw">${following}</p>
                </div>
                    <div>
                        <p class="details">repo</p>
                        <p class="fw">${public_repos}</p>
                </div>
                </div>
                <div id="details">
                 <a href=${html_url}>
                <button class="btn2">visit profile</button>
                </a>
                </div>
                </div>
                `
    
    }
    

                     