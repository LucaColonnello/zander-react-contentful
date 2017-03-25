import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Articles from './Articles/ArticlesRoute'
import Article from './Article/ArticleRoute'
import Work from './Work/Work'
import Styleguide from './routes/Styleguide'
import Masthead from './partials/Masthead'
import Footer from './partials/Footer'
import Icons from './partials/Icons'

const App = () => (
  <Router>
    <div>
      <Icons/>
      <Masthead/>
      <Route exact name="articles" path="/articles" component={Articles}/>
      <Route path="/articles/:id" component={Article}/>
      <Route exact path="/work" component={Work}/>
      <Route exact path="/styleguide" component={Styleguide}/>
      <Footer/>
    </div>
  </Router>
)

export default App;
