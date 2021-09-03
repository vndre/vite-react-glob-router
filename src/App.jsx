import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const routes = import.meta.glob('./routes/*.jsx')

const matchPath = (path) => {
  switch (path) {
    case '/home':
      return '/'
    case '/user':
      return '/user/:id'
    default:
      return path
  }
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/route1">route1</Link>
            </li>
            <li>
              <Link to="/route2">route2</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            {
              Object.entries(routes).map(([routePath, component]) => {
                const Component = lazy(component)
                const componentPath = routePath.match(/\/[A-Z]+[^.]*/)[0].toLowerCase()
                const path = matchPath(componentPath)

                return (
                  <Route exact path={path} key={routePath} component={Component} />
                )
                })
            }
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
