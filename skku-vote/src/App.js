import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Template from './component/0_Template';
import SkkuVoteHead from './component/0.1_Head';
import Splash from './component/1_Splash';
import Login from './component/2_Login';
import PasswordSetting from './component/4_Password_Setting';
import PasswordConfirmation from './component/4.1_Password_Confirmation';
import PasswordConfirmationFail from './component/4.2_Password_Confirmation_Fail';
import HowToVote from './component/5_How_To_Vote';
import Disclaimer from './component/6_Disclaimer';
import HomeOneCandidate from './component/7_Home_One_Candidate';
import HomeMultipleCandidate from './component/7.1_Home_Multiple_Candidates';
import HomePromimse from './component/8_Home_Promise';
import VotingComplete from './component/9_Voting_Complete';
import MyPage from './component/10_My_Page';


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' component={Splash} exact />
        <Route path='/Login' component={Login} />
        <Route path='/PasswordSetting' component={PasswordSetting} />
        <Route path='/HowToVote' component={HowToVote} />
        <Route path='/Disclaimer' component={Disclaimer} />
        <Route path='/HomeMultipleCandidate' component={HomeMultipleCandidate} />
        <Route path='/HomePromimse' component={HomePromimse} />
        <Route path='/VotingComplete' component={VotingComplete} />
        <Route path='/MyPage' component={MyPage} />
        <Route path='/PasswordConfirmation' component={PasswordConfirmation} />
        <Route render={({location}) => (
          <div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
          <p>{location.pathname}</p>
        </div>
        )} />--!>
      </Switch>
    </React.Fragment>
  );
}

export default App;