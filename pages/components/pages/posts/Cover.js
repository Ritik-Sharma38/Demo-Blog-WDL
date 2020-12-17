import React from 'react';
import styles from '../../../../styles/Post.module.css';
import Image from 'react-bootstrap/Image'

function Cover() {
  return (
    <div className={styles.postContainer}>
        <Image
            className={styles.storyCover}
            src='/images/img-13.jpg'
            fluid
        />
      <h1>Adventure</h1>
      <p>Panvel, Mumbai, May 31, 2020</p>
    </div>
  );
}

export default Cover;