import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../Css/diagnosis-box.css';
import {Link} from 'react-router-dom';



class DiagnosisBox extends Component {
    static propTypes = {};

    state = {
        diagnoses: [],
        diagnosesWithImg: [],
        diagnosesWithIcon: []
    };

    componentDidMount() {
        fetch('http://localhost:51210/api/service')
            .then(response => {
                return response.json();
            }).then(diagnoses => {
            this.setState({
                diagnoses,
            });
        })
    }

    render() {

        this.state.diagnoses.map(stateData =>
            stateData.iconUrl ? this.state.diagnosesWithIcon.push(stateData)
                : this.state.diagnosesWithImg.push(stateData)
        );

        return (
            <div className={'cat-box-region'}>
                {this.state.diagnosesWithIcon.map(data =>
                    <div key={data.id} className={'cat-box-position'}>
                        <Link to={{pathname:`/home/${data.id}`,state:{data}}}>
                            <div className={'cat-box'}>
                                <FontAwesomeIcon icon={data.iconUrl} size="3x" className={'icon'} />
                                <h3>{data.diagnosisName}</h3>
                            </div>
                        </Link>
                    </div>
                )}

                {this.state.diagnosesWithImg.map(data =>
                    <div key={data.id} className={'cat-box-position'}>
                        <Link to={{pathname:`/home/${data.id}`,state:{data}}}>
                            <div className={'cat-box'}>
                                <img src={require(`${data.imgUrl}`)} className={'ultrasound-img'}/>
                                <h3>{data.diagnosisName}</h3>
                            </div>
                        </Link>
                    </div>
                )}
                </div>
        );
    }
}

export default DiagnosisBox;