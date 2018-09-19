import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import '../Css/contact.css';

class Contact extends Component {

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className={'contact-container'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-6 col-sm-6'}>
                            <h3>Bizimle İletişime Geçin</h3>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-md-6 col-sm-6'}>
                            <h5>Bizimle iletişime geçmek isterseniz mail adresimizi kullanabilirsiniz.</h5>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-md-3 col-sm-6'}>
                            <div className={'icon'}>
                                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                            </div>
                            <div className={'mail'}>
                                <h5>info@saglikhizmetim.com</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
