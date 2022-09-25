import { Icon } from '@iconify/react';
import './Footer.css'
function Footer(){
    return(
        <div className='footer-section'>
            <span className='social-icons'><Icon icon="fa6-brands:square-twitter" color="#918e9b" width="25" height="25" /></span>
            <span className='social-icons'><Icon icon="fa6-brands:square-facebook" color="#918e9b" width="25" height="25" /></span>
            <span className='social-icons'><Icon icon="fa6-brands:square-instagram" color="#918e9b" width="25" height="25" /></span>
            <span className='social-icons'><Icon icon="fa6-brands:square-github" color="#918e9b" width="25" height="25" /></span>
        </div>
    )
}

export default Footer;