 var form = document.getElementById("myForm")

 form.addEventListener('submit',function(e){
    e.preventDefault()

    var search=document.getElementById("search").value

    

    var originalName = search.split(' ').join('')
    document.getElementById("result").innerHTML=""
    fetch("https://api.github.com/users/"+originalName)
      
   
    

  
     .then((result)=>result.json())
   //  .then((data)=>{
   //       console.log(data)
    
   //       document.getElementById("result").innerHTML=`
   //       <div class="res">
   //       <h1>User Found</h1>
   //      <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
   //      <p>Name:      ${data.name}</p>
   //      <p>Company:   ${data.company}</p>
   //      <p>Email Id:  ${data.email}</p>
   //      <p>Followers: ${data.followers}</p>
   //      <p>Following: ${data.following}</p>
   //      </div>`
        
   //   })
     .then((data)=>{
      console.log(data)
 
      document.getElementById("result").innerHTML=`
      <div class="profile">
      <div class="user-image">
      <div class="image"><a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a></div>
  </div>
            <div class="user-info">

              <div class="user-info-container">
                <p> <span><h3 class="name">${data.name.toUpperCase()}</h3></span></p>
                <p><span class="user-info-bio">${data.bio}</span></p>
                <div class="user-info-container-grid">
                <p class="items"><i class="fa-regular fa-building "></i> <span class="items-content"> Company: ${data.company}</span></p>
                <p class="items"><i class="fa-regular fa-envelope "></i> <span class="items-content"> Email Id: ${data.email}</span></p>
                <p class="items"><i class="fa-solid fa-users "></i> <span class="items-content"> Followers: ${data.followers}</span></p>
                <p class="items"><i class="fa-solid fa-flag-checkered "></i> <span class="items-content"> Following: ${data.following}</span></p>
                </div>

                <button class="button"><a target="_blank" href="https://www.github.com/${originalName}">Visit Profile</button>
               
                </div>
            </div>
        </div>`
     
  })
})  

{/* person:<i class="fa-solid fa-user"></i> */}

