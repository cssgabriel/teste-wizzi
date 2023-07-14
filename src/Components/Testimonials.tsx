import "./Testimonials.css";
import Man from "../assets/img/homem-01.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <p>
        A viagem foi incrível! Minha família adorou o tempo que passamos juntos.
        Queremos ir novamente.
      </p>
      <div className="person">
        <div className="person--content">
          <img src={Man} alt="homem sorrindo" />
          <div>
            <p>Ricardo da Silva</p>
            <p>Músico</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
