import React from "react";
import styles from "../../../../styles/Stories.module.css";
import Image from "next/image";

function CardItem(props) {
  return (
    <>
      <li className={styles.cardsItem}>
        <div className={styles.cardsItemLink}>
          <figure
            className={styles.cardsItemPicWrap}
            data-category={props.label}>
            <Image
              className={styles.cardsItemImg}
              alt="Travel Image"
              src={props.src}
              layout="fill"
              unsized
            />
          </figure>
          <div className={styles.cardsItemInfo}>
            <h5 className={styles.cardsTtemText}>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;

