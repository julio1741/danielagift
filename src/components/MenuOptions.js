import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const MenuOptions = () => {
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title"> Tus Apps</h1>
        <div className="page-header__action" >
          <Link className="button" to="/indecision">Indecisiones?</Link>
          |
          <Link className="button" to="/expensify">Nuestros Gastos </Link>
          |
          <Link className="button" to="/gallery">Galeria </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

  return {};
};

export default connect(mapStateToProps)(MenuOptions);
