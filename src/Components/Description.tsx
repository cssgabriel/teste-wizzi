import "./Description.css";
import Testimonials from "./Testimonials";

const Description = () => {
  return (
    <section className="description">
      <span className="pre-title">wizzi</span>
      <div className="description__content">
        <h2 className="title--xl">Falta pouco para sua viagem dos sonhos!</h2>
        <p>Preencha corretamente os campos ao lado para efetivar sua compra</p>
      </div>
      <Testimonials />
    </section>
  );
};

export default Description;
