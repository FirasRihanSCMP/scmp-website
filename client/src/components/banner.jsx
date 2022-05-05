import React from 'react'
import styles from "./banner.module.css"
export default function Banner(props) {
    return (
        <div>
              <img className={styles.BackgroundImg} src={"./imgs/" + props.img} alt="" />
        </div>
    )
}
