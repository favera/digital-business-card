import profilePic from '../assets/profile.jpg'
import {Icon} from '@iconify/react'
import './Info.css'

function Info(){
    return(
        <div className='info-section'>
            <img width='400px' src={profilePic}></img>
            <h1>Fatima Vera</h1>
            <h3>Frontend Developer</h3>
            <p>https://github.com/favera</p>
            <button className='btn'> <Icon icon="fa6-solid:envelope" color="#1e1f26" width="16" height="13" inline={true} /> Email</button>
            <button className='btn secondary'><Icon icon="fa6-brands:linkedin" color="white" width="16" height="13" inline={true} />LinkedIn</button>
        </div>
    )
}

export default Info;