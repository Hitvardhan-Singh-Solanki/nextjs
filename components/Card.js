import styles from './Card.module.scss';
export default () => {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <figure
          className={`${styles['card-image']} ${styles.loading}`}
        ></figure>
        <div className={styles['card-detail']}>
          <h3 className={`${styles['card-title']} ${styles.loading}`}></h3>
          <p className={`${styles['card-description']} ${styles.loading}`}></p>
        </div>
      </section>
    </div>
  );
};
