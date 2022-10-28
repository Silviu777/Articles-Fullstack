import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter, Switch, Route, Link, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import TokenList from './components/TokensList'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">

          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">
                  Articles
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/articles'} className="nav-link">
                    Articles Data
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/tokens'} className="nav-link">
                    Tokens Data
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>

            <div className='home'>
              <h1>Articles Management</h1>
              <p>Choose an option from above in order to get started</p>
            </div>
            <div className="container">
              <Routes>
                <Route
                  exact
                  path="/tokens"
                  element={<TokenList />}
                />

              </Routes>
            </div>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App;
