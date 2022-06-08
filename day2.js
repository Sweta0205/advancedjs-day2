

 fetch("https://www.pexels.com/photo/animal-dog-pet-cute-2007/",{
  headers: {
    Authorization: "563492ad6f917000010000017f9cccc443114ed4aed44032bc01bde3"
    
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data.photos)
   })
   async function CuratedPhotos(page_num){
    // fetch the data from api
    const data=await fetch(`https://api.pexels.com/v1/curated?page=${page_num}`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apikey,     //use the apikey you have generated
        },
    });
    const response=await data.json();   //convert the response to json 
    console.log(response);

    display_images(response);   // call the display_images method to display the images on page
}










var members = ["John Doe", "Sam Smith", "Allie Cartel"];

function addNewMember(newUser) {
  members.push(newUser);
}

function getAllMembers() {
  console.log(members);
}

addNewMember("sweta");
getAllMembers();