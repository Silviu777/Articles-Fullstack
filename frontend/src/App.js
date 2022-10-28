import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'
import ArticlesTable from './components/ArticlesTable'
import ArticleForm from './components/ArticleForm'
import ArticleFormEdit from './components/ArticleFormEdit'
import Tokenize from './components/Tokenize'
import TokensList from './components/TokensList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar>
            <Container>
              <Navbar.Brand>
                
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/api/articles'} className="nav-link">
                    <p class="culoareAlb">Articles Data</p>
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/api/addArticle'} className="nav-link">
                    <p class="culoareAlb">Add Articles</p>
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/api/tokens'} className="nav-link">
                  <p class="culoareAlb">Tokens Data</p>
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <div className='home'>
              <br></br>
              <h1 class="text-center" >Articles Management</h1>
              <br></br>
            </div>
            <Routes>
              <Route path='/api/articles' element={<ArticlesTable/>}/>
            </Routes>
            <Routes>
              <Route path='/api/addArticle' element={<ArticleForm/>}/>
            </Routes>
            <Routes>
              <Route path='/api/editArticle' element={<ArticleFormEdit/>}/>
            </Routes>
            <Routes>
              <Route path='/api/tokenize' element={<Tokenize/>}/>
            </Routes>
            <Routes>
              <Route path='/api/tokens' element={<TokensList />} />
            </Routes>

            <Col md={12}>
              <div className="wrapper">
                {/* <Switch>
                  <Route
                  exact
                    path=""
                    component={(props) => < { ...props } />}  // add each component on specific routes!
                  />
                  <Route
                    exact
                    path=""
                    component={(props) => < { ...props } />}
                  />
                  <Route
                    exact
                    path=""
                    component={(props) => < { ...props } />}
                  />
                </Switch> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
      
    </div>
  )
}

export default App;