import './Footer.css';
const Footer = () => {
  return (
    <div className="container-fluid" id="footer">
      <div className="row w-75 mx-auto pt-3">
        <div className="col-sm-12 col-md-6 col-lg-3  text-center pb-3">
          <h6>Women</h6>
          <div className="d-flex flex-column">
            <a href="./">All Dresses</a>
            <a href="./#saree">Sarees</a>
            <a href="./#kurtha">Kurtha</a>
            <a href="./#tops">Tops</a>
            <a href="./#leggings">Leggings</a>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 text-center pb-3">
          <h6>Men</h6>
          <div className="d-flex flex-column">
            <a href="./">All Dresses</a>
            <a href="./#tshirt">T-Shirt</a>
            <a href="./#casual">Casuals</a>
            <a href="./#dhoti">Dhoties</a>
            <a href="./#suit">Suits</a>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 text-center pb-3">
          <h6>Kids</h6>
          <div className="d-flex flex-column">
            <a href="./">All Dresses</a>
            <a href="./#skirt">Skirts</a>
            <a href="./#ethnic">Ethnic Wear</a>
            <a href="./#party">Party Wear</a>
            <a href="./#casual">Casuals</a>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 text-center pb-3">
          <h6>Links</h6>
          <div className="d-flex flex-column">
            <a href="./">Home</a>
            <a href="./">Login</a>
            <a href="./">Contact</a>
          </div>
        </div>
      </div>
      <div className="row w-75 mx-auto">
        <div className="col-12 ">
          <span className="text-white">
            <hr />
          </span>
        </div>
      </div>
      <div className="row w-75 mx-auto">
        <div className="col-12 text-center pb-3 text-white">
          Copyright{' '}
          <i className="fa-regular fa-copyright" style={{ color: 'white' }}></i>
          Mahi Fashion and Styles 2022-2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
