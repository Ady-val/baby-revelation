import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from '../containers/Header';
import Layout from '../containers/Layout';
import '../styles/global.css';
import SignIn from '../pages/sessions/SignIn';
import SignUp from '../pages/sessions/SignUp';
import VoteBoyOrGirl from '../pages/vote/VoteBoyOrGirl';
import Main from '../containers/Main';
import RegisterVote from '../pages/vote/RegisterVote';
import SuccessVote from '../pages/vote/SuccessVote';
import { SnackbarProvider } from 'notistack';
import Blog from '../pages/blog/Blog';

const App = () => {
	return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<Header><SignIn /></Header>} />
          <Route path="/sign-up" element={<Header><SignUp /></Header>} />
          <Route path="/" element={
            <SnackbarProvider maxSnack={3}>
              <Main />
            </SnackbarProvider>
          }>
            <Route path="" element={<VoteBoyOrGirl />} />
            <Route path="vota" element={<RegisterVote />} />
            <Route path="voto-realizado" element={<SuccessVote />} />
            <Route path="blog">
              <Route path="" element={<Blog />} />
            </Route>
          </Route>
          {/* <Route path="*" element={<GoToLogin />} />
          <Route path="/" element={<GoToLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </Layout> 
	);
}

export default App;
