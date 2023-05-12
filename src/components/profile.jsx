import React, { useState } from 'react'
import Webcam from 'react-webcam'
import '../../src/profile.css'
import axios from 'axios'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Profile = () => {
  const [picture, setPicture] = useState('')
  const [email,setEmail]=useState('');
  const webcamRef = React.useRef(null)
  async function onClickSubmit()
  {
    console.log(email);
    // localStorage.setItem("oldImage",picture);
    // '
    
    let data={
      
      "data": {
        "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",
        "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
          "document1": `${localStorage.getItem("oldImage")}`,
          "document2": `${picture}`
      }
    }
    try {
    axios.post("https://eve.idfystaging.com/v3/tasks/sync/compare/face",{
      mode: "cors",
      header:{
        'Content-Type':'application/json',
       'api-key': "9d107fda-4e54-4d71-9540-bcf86f245de3",
       "account-id":"8f203b451860/3ba2f66f-87a8-4559-a05c-4ffb0ba9ddb9"
      },
      body:data,
      
     }).then((res)=>{
      console.log(res);
     })
    } catch (error) {
      console.error("Error:", error);
    } 
    

  }
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
    console.log(pictureSrc);
  })
  return (
    <div className='login-container'>
     <div className="info">
        <h2>CipherVault</h2>
        <p>Plug & Play</p>
        <p>Ultimate Data Security</p>
        <p>Robust Rule Engine</p>
        <p>Auto-Purge</p>

     </div>
      <div className='pic'>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            width={200}
            frameBorder={200}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
        
      </div>
      <div className='view-all1 cam-btn'>
        {picture != '' ? (
          <button  className="view-all-container1"
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="view-all-container"
          >
            Capture
          </button>
          
        )}
        <input type="text" name="emial" id="" placeholder='Enter e-mail' className='email-class' onChange={e=>setEmail(e.target.value)}/>
        <div className="view-all1 sub-btn">
            <button className='view-all-container' onClick={onClickSubmit}>
                submit
            </button>
        </div>
      </div>
     
    </div>
  )
}
export default Profile