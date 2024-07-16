import React from 'react'
import { VerMasStyle } from '../../Styles/ExperienceDetailComponents';

const VerMas = (props) => {

    const { className, onClick } = props;

    return (
      <VerMasStyle
        className={className}
        onClick={onClick}
      >
        <p>Ver mas</p>
      </VerMasStyle>
    );
}

export default VerMas;