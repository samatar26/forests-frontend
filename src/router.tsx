import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Detail from './detail'
import Home from './home'

const EntryRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </Router>
)

export default EntryRouter
