import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import ChooseTopAttractions from './components/ChooseTopAttractions.jsx';
import MapWaitTimes from './components/MapWaitTimes.jsx'

/* -----------------    COMPONENT     ------------------ */

const Routes = (props) => (
  <Router history={history}>
    <div>
      {/* <Sidebar />
      <Navbar /> */}
      <main>
        <Switch>
          <Route exact path="/" component={ChooseTopAttractions} />
          <Route path="/map" component={MapWaitTimes} />
        </Switch>
      </main>
    </div>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

// import { getCurrentLocation } from './reducers/location';
// import { fetchStories } from './reducers/stories';

// const mapProps = null;

// const mapDispatch = null;
// const mapDispatch = dispatch => ({
//   fetchCurrentLocation: () => {
//     console.log('getch curr')
//     dispatch(getCurrentLocation());
//   }
// });
//   onRealStoryEnter: (nextRouterState) => {
//     const storyId = nextRouterState.params.storyId;
//     dispatch(fetchStory(storyId));
//   },
//   fetchInitialData: () => {
//     dispatch(fetchStories());
//   }
// });

// export default connect(mapProps, mapDispatch)(Routes);
export default Routes;
