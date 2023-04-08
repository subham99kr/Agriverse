import { useState, useEffect } from 'react'
// import axios from "axios"

function Flask() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    // axios({
    //   method: "GET",
    //   url:"/profile",
    // })
    // .then((response) => {
    //   const res =response.data
    //   setProfileData(({
    //     profile_name: res.name,
    //     about_me: res.about}))
    // }).catch((error) => {
    //   if (error.response) {
    //     console.log(error.response)
    //     console.log(error.response.status)
    //     console.log(error.response.headers)
    //     }
    // })
        console.log("hello")
    
    }
    useEffect(() => {
        fetch('/profile').then(res => res.json()).then(data => {
            setProfileData({
                profile_name: data.name, 
                about_me: data.about,
            })
        })
    })
    //end of new line 


  return (
    <>
        Hello
        {/* new line start*/}
        <p>To get your profile details: </p>
        <button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
    </>
  );
}

export default Flask;

