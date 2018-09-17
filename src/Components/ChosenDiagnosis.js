import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/chosenDiagnosis.css';
import Hospital from './Images/hospital.png';

class ChosenDiagnosis extends Component {
    constructor(props) {
        super(props);
        this.onChangeFilterText = this.onChangeFilterText.bind(this);
        console.log(this.props)
    }
    static defaultProps = {
        hospitals: []
    };

    static propTypes = {
        state: PropTypes.object
    };

    state = {
        filterText: '',
        hospitals: [],
        diagnosisName: this.props.location.state.data.diagnosisName
    };

    onChangeFilterText(e){
        this.setState({
            filterText: e.target.value
        });
    }


    componentDidMount() {
        let chosenDiagnosisId = this.props.location.state.data.Id ;
        fetch(`http://localhost:51210/api/service/${chosenDiagnosisId}`)
            .then(response => {
                return response.json();
            }).then(hospitals =>{
            this.setState({
                hospitals,
            });
        })

}


    render() {
        const filteredHospitals = this.state.hospitals.filter(
            hospitals => {
                return hospitals.HospitalName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
            }
        );



        return (
            <div className={'list-area'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <img  className={'hospital-img'} src={Hospital} alt={'Hospital Images'}/>
                            <input
                                name={'filter'}
                                id={'filter'}
                                value={this.state.filterText}
                                placeholder={'Aradığınız hastanenin adını yazınız.'}
                                onChange={this.onChangeFilterText}
                            />
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <ul className={'list'}>
                                {
                                    filteredHospitals.map ( hospital=>
                                        <li>{hospital.HospitalName} - {this.state.diagnosisName} ücreti  => {hospital.Charge} TL</li> )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChosenDiagnosis;
