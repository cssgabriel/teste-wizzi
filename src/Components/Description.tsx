import styles from "./Description.module.css";
import Testimonials from "./Testimonials";

const Description = () => {
  return (
    <section className={styles.Description}>
      <span className={styles.PreTitle}>wizzi</span>
      <div className={styles.DescriptionContent}>
        <h2>Falta pouco para sua viagem dos sonhos!</h2>
        <p>Preencha corretamente os campos ao lado para efetivar sua compra</p>
      </div>
      <Testimonials />
    </section>
  );
};

export default Description;
