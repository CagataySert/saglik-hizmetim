import React from 'react';
import PropTypes from 'prop-types';
import '../Css/Caption.css';

const Caption = () => {
    return (
        <div className={'caption'}>
            <h3 className={'title'}>Sağlık Hizmetim</h3>
            <h5>Aradığınız sağlık hizmetinin bilgilerine ulaşmak artık çok kolay!</h5>
        </div>
    );
};

Caption.propTypes = {};

export default Caption;
