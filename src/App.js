import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

import styled from "styled-components";

const {
  REACT_APP_ARTIST_HOST: artistHost,
  REACT_APP_PHOTOGRAPHER_HOST: photographerHost,
} = process.env;

const Artist = ({ history }) => (
  <MicroFrontend history={history} host={artistHost} name="Artist" />
);

const Photographer = ({ history }) => (
  <MicroFrontend
    history={history}
    host={photographerHost}
    name="Photographer"
  />
);

const Home = () => <div>This is Home! - Main Container App</div>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Container>
            <AppHeader />
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/artist" component={Artist} />
                <Route exact path="/photographer" render={Photographer} />
              </Switch>
            </Content>
            <AppFooter />
          </Container>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
