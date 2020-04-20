import React,{Component,Fragment} from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route ,withRouter} from 'react-router-dom';
import NewQuestion from './NewQuestion';
import Login from './Login';
import LeaderBoard from './LeaderBoard';
import Question from './Question';
import Dashboard from './Dashboard';
import QuestionPoll from './QuestionPoll';
import Results from './Results';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Logout from './Logout';
import SecuredRoute from './SecuredRoute';



class  App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render(){
    
   
  return (
    <div className="App">
       <Router>
       <Fragment>
          <LoadingBar />
       <div>
          
            {this.props.authenticated == null
                        ? null
                        : <Navigation loggedInUser={this.props.loggedInUser}/>
                    }
            <div>
            {this.props.loading === true
              ? null
              :  <div>
                  <SecuredRoute path='/new' exact component={NewQuestion}  isAuthenticated={this.props.authenticated} />
                  <SecuredRoute path='/home' exact component={Dashboard}  isAuthenticated={this.props.authenticated} />
                  <SecuredRoute path='/' exact component={Results}  isAuthenticated={this.props.authenticated} />
                  <Route path="/login" exact component={withRouter(Login)}/>
                  <Route path="/logout" exact component={withRouter(Logout)}/>
                  <SecuredRoute path='/leaderboard' component={LeaderBoard} isAuthenticated={this.props.authenticated} />
                  </div>
            }
                </div>
          </div>
          </Fragment>
       </Router>
     
     
    </div>
  );
  }
}
function mapStateToProps({users, authedUser}) {
  return {
      loading: false,
      loggedInUser: authedUser.loggedInUser,
      authenticated: authedUser.authenticated,
      
}
}


export default connect(mapStateToProps)(App);
