import React from 'react'
import { withRouter } from 'react-router';

class LaundingPage extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Landing Page
                </h1>
            </div>
        );
    };
};

export default withRouter(LaundingPage)
