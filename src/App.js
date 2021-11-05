import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePlayerPage from './pages/HomePlayerPage';
import VideoUploadPage from './pages/VideoUploadPage'
import Header from './components/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={HomePlayerPage} />
            {/* <Route path="/videos" exact component={HomePlayerPage} /> */}
            <Route path="/upload" component={VideoUploadPage} /> 
            <Route path="/videos/:id" exact component={HomePlayerPage} />
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
