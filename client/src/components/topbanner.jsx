import React from 'react'
import styles from './topbanner.module.css';

export default function Topbanner(props) {
    return (
        <div className={styles.topBanner} >
        <img className={styles.BackgroundImg} src={"./imgs/" + props.img} alt="" />
        <h2 className={styles.topParg}>Scientific Center For Manufacturing And Production</h2>
        </div>
    )
}
