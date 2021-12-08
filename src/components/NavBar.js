import {Link} from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap'
import Icon from './Icon'

const NavBar = ()=> (
    <Navbar className="fixed-top collapseOnSelect nav-bar" expand="lg" bg="secondary" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#" as="span">
                  <Link to='/' >
                      <Icon.NewNote/>
                  </Link>
                </Nav.Link>

                <Nav.Link href="#" as="span">
                  <Link to='/users'>
                      <Icon.Share/>
                  </Link>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
            {/* <Navbar.Brand href="#" as="span">
              <em style={{ fontSize:15 }}>{userInStore.user.name} logged in <nbsp>     </nbsp> </em>
              <Button variant="info" size="sm" onClick={() => logout()}>logout</Button>{' '}
            </Navbar.Brand> */}
    </Navbar>
)
export default NavBar
