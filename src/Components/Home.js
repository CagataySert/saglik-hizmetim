import React, {Component} from 'react';
import Caption from "./Caption";
import DiagnosisBox from "./DiagnosisBox";

class Home extends Component {
    static propTypes = {};

    state = {};

    render() {
        return (
            <div>
                <Caption/>
                <DiagnosisBox/>
            </div>
        );
    }
}

export default Home;
