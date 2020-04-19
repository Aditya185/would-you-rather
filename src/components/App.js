import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewQuestion from './NewQuestion';



function App() {
  return (
    <div className="App">
       <Router>
       <div>
            <Navigation />
            <div>
                  <Route path='/new' exact component={NewQuestion} />
                  {/* <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} /> */}
                </div>
          </div>
       </Router>
     
     
    </div>
  );
}

export default App;
