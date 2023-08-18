import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); 
  
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.name == null) variables.name = "First name";
  if (variables.lastname == null) variables.lastname = "Lastname";
  if (variables.city == null) variables.city = "City";
  if (variables.country == null) variables.country = "Country";
  if (variables.instagram == null) variables.instagram = "instagram";
  if (variables.linkedin == null) variables.linkedin = "LinkedIn";
  if (variables.twitter == null) variables.twitter = "Twitter";
  if (variables.github == null) variables.github = "Github";
  if (variables.role == null) variables.role = "Role";

  
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fa-brands fa-github"></i></a></li>
            // <li><a href="https://www.linkedin.com/in/${variables.linkedin}/"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}


window.onload = function() {
  window.variables = {

    includeCover: true,
    
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    
    avatarURL: "https://th.bing.com/th/id/R.1cf2b6550d46251ecb36d0dee853ccbe?rik=TCwjdvcAh%2b7X3A&pid=ImgRaw&r=0",
    
    socialMediaPosition: "position-left",
    
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); 

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
     
      const attribute = e.target.getAttribute("for"); 
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};