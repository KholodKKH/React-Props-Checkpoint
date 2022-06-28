
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {Nav,Navbar,NavDropdown,Form,Container,Button,Carousel,Card,CardGroup} from "react-bootstrap";
import haira from "./images/haira.jpg";
import hairb from "./images/hairb.jpg";
import hairc from "./images/hairc.jpg";
import photograph from "./images/photograph.jpg";
import oil from "./images/oil.jpg";
import shampoo from "./images/shampoo.jpg";
import conditioner from "./images/conditioner.jpg";
import mask from "./images/mask.jpg";
import set from "./images/set.jpg";
import ProfileComponent from "./profile/ProfileComponent";
const handleName = (name) => {
  return alert(`Hello , My Name Is ${name}`);}
function App() {
  return (
    <div className="App">
      {/* --- Navbar Part ----- */} 
      <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Kérastase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">OFFERS</Nav.Link>
            <Nav.Link href="#action2">BEST SELLERS</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">COLLECTIONS</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              SHAMPOOS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              CONDITIONERS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            STYLING
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button variant="info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* image part */}
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={haira}
          alt="hairstylea"/>
        <Carousel.Caption>
          <h3>Kérastase Hair Products</h3>
          <p>
Best Hair Care for Thicker Hair
Fine hair requires products with densifying technologies such as Hyularonic acid and Intra-Cyclane to plump,
hydrate and strengthen the hair for fullness, body and movement.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hairb}
          alt="hairstyleb"/>
        <Carousel.Caption>
          <h3>Kérastase Best Sellers</h3>
          <p>Our best-selling products are tailored to compliment any hair care routine.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
           src={hairc}
           alt="hairstylec"/>
        <Carousel.Caption>
          <h3>Densifique</h3>
          <p>
           Our hair collection to increase hair density. Excellent for thinning hair, hair strengthening and an effective hair texturizer.
               Includes Hyaluronic Acid and Intra-Cyclane ®which strengthens and protects. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* Card of Personal Information Part */}
    <div className='mycv'>
    <ProfileComponent
    name="Kholod Khaled Hamza"
    bio=" I was born in 16/7/1992,Graduated from the University of Tripoli/Faculty of Science-Computer Department,
    I work in systems engineering,Optical company manager,Delegate for French Kérastase products for hair."
    handleName={handleName}
    profession="systems engineering">
      {" "}
      <img src={photograph} width="250" alt="myprofile"></img>{" "}
    </ProfileComponent>
    {/* Form Part */}
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    {/* Cards Group Part */}
     <div className="products">
      <CardGroup>
    <Card>
    <Card.Img variant="top" src={oil} />
    <Card.Body>
      <Card.Title style={{ color: "#A1683A" }}>L'Huile Original Hair Oil</Card.Title>
      <Card.Text>
      Iconic nourishing hair oil for all hair types infused with a blend of argan hair oil, camellia oil
      and marula hair oil.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Code: TWO22</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={set}/>
    <Card.Body>
      <Card.Title style={{ color: "#A1683A" }}>Extentioniste Lengthening Hair Set</Card.Title>
      <Card.Text>
      For weakened hair seeking healthy length.</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Code: TWZ514</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={shampoo} />
    <Card.Body>
      <Card.Title style={{ color: "#A1683A" }}>Bain Force Architecte Shampoo</Card.Title>
      <Card.Text>
      Reconstructing shampoo for weak hair and damaged hair.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Code: TWZ35</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={conditioner}/>
    <Card.Body>
      <Card.Title style={{ color: "#A1683A" }}>Fondant Extentioniste Conditioner</Card.Title>
      <Card.Text>
      Length strengthening conditioner for slow growing, damaged lengths.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Code: TWZ36</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={mask} />
    <Card.Body>
      <Card.Title style={{ color: "#A1683A" }}
      >Masque Extentioniste Hair Mask</Card.Title>
      <Card.Text>
      Length strengthening hair mask for slow growing, damaged lengths.</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Code: TWZ37</small>
    </Card.Footer>
  </Card></CardGroup></div>
  {/* footer part */}
  <div className='footer'>
              <p>
             <h2> My Story</h2>
             I decided one day that I would open a store and sell original products
             at a price much lower than the market and bring them from abroad and help customerse
                <br/>contact with us by Email <h6>kholodhamza875@gmail.com.</h6>
              </p>
            </div>
    </div>
  );
}

export default App;
