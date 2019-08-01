import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
import BaseTemplate from './components/BaseTemplate';
import CssBaseline from '@material-ui/core/CssBaseline';
// import MarketIndex from './components/MarketIndex';

import MarketIndexView from './components/Pages/MarketIndexView';
import PortfolioView from './components/Pages/PortfolioView';
import WatchListView from './components/Pages/WatchListView';
import UserProfileView from './components/Pages/UserProfileView';

// /* import lorem for testing */
// import HeaderData from './components/lorem/HeaderData';
// import ParagraphData from './components/lorem/ParagraphData';

// /* import charts */
// import LineChart from './components/Charts/LineChart';
// import LineGraph from './components/Charts/LineGraph';

const App = () => {
    return (
        <Router>
            <CssBaseline>
                <Switch>
                    <Route exact path="/" component={withRouter(BaseTemplate)} />
                    <Route exact path="/one" component={withRouter(MarketIndexView)} />
                    <Route exact path="/two" component={withRouter(WatchListView)} />
                    <Route exact path="/three" component={withRouter(PortfolioView)} />
                    <Route exact path="/four" component={withRouter(UserProfileView)} />
                </Switch>
            </CssBaseline>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
