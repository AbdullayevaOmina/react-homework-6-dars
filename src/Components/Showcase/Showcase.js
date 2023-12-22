import "bootstrap/dist/css/bootstrap.css";
import ShowcasePersonImg from "../../Images/showcasePersonImg.png";
import Vektor from "../../Images/Vector.png";

function Product() {
  return (
    <div className="showcase container d-flex gap-5">
      <div className="left">
        <h1>Recruit top talented freelancer for your business</h1>
        <p>
          Connect you to thoudsands of talented freelancer from any industry.
          You can have the best people in just few simple steps.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="right position-absolute">
        <img className="position-relative" src={Vektor} alt="." />
        <img className="position-relative " src={ShowcasePersonImg} alt="." />
      </div>
    </div>
  );
}

export default Product;
