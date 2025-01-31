import React from 'react'
import styles from './Error.module.css';
import img from '../../../assets/Error.jpg';
import { Link } from 'react-router-dom';

function Error() {

    const handleWhatsAppRedirect = () => {
        window.location.href = 'https://wa.me/919637053245?text=Hello is`s me Swapnil thiks for clicking !';
      };

  return (
    <div className={styles.Error} >
        <img src={img} alt="img" />
        <div className={styles.content}>
            <h1>40</h1>
            <p>Oops! Page Not Found.</p>
            <p>We couldn't find your dream property here.  </p>
            <h6 className={styles.lastline}>Contact : <button onClick={handleWhatsAppRedirect} >+91 999999999</button> </h6>
        </div>
    </div>
  )
}

export default Error
