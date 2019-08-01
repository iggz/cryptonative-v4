// functional component representing the Watch List page
// from which a user can set particular currencies to follow
// but perhaps not purchase

/***************/
/* API TESTING */
/***************/

import React, { Component } from 'react';
import BaseTemplate from '../BaseTemplate';
import fetch from 'node-fetch';
import FormDialog from  '../building/ModalForm';

class WatchListView extends Component {
    constructor(props) {
        super(props);

        this.state = { apiResponse: '' };
    }

    callAPI() {
        // test communication with the API here
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res_text => this.setState({
                apiResponse: res_text
            }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <BaseTemplate>
                <h1>Watch List View</h1>
                <hr />
                <p>{this.state.apiResponse}</p>
                <FormDialog />
            </BaseTemplate>
        )
    }
}

// const WatchListView = () => {
//     return (
//         <BaseTemplate>
//             <h1>Watch List View</h1>
//         </BaseTemplate>
//     );
// };

export default WatchListView;