import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Aniversario y </h1>
      <h2 className="box-layout__title">14 Febrero</h2>
      <p>Para: Daniela</p>
      <p>De: Julio</p>
      <p>Te amo</p>
      <button className="button" onClick={startLogin}>Puedes entrar con Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
