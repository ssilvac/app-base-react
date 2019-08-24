import React, {Fragment} from 'react';
import './team.scss';

import { useDispatch, useSelector } from 'react-redux';
import { changeTitleAction } from '../../actions/appActions'
import { validaTitleAction } from '../../actions/validarActions';

function Team() {

    // DISPATCH
  const dispatch = useDispatch();
  const cambiarTitulo = (titulo) => dispatch( changeTitleAction(titulo));
  const validarTitulo = (estado) => dispatch( validaTitleAction(estado));

  // acceder al state
  const validacion = useSelector( state => state.validacion );

  const clickCambiarTitulo = titulo => {

    if( titulo.trim() === '' ) {
        validarTitulo(true);
        return;
    }

    validarTitulo(false);
    cambiarTitulo(titulo);
  }

    return (
        <Fragment>
            <a href="/team">TEAM</a>

            <div className="btn-group">
                <button className="btn btn-primary" onClick={()=>{clickCambiarTitulo('zenta')}}>cambiar titulo a 'ZENTA'</button>
                <button className="btn btn-secondary" onClick={()=>{clickCambiarTitulo('zentaB')}}>cambiar titulo a 'ZENTAB'</button>
                <button className="btn btn-dark" onClick={()=>{clickCambiarTitulo('')}}>cambiar titulo a vacío</button>
            </div>    

            {validacion.error ? <div className="alert alert-danger text-center p2">EL titulo no puedo ir vacío</div> : null}
        </Fragment>
    );
    

}

export default Team;
