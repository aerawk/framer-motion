import React, { useState } from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import Modal from "./Modal";
import Accordion from "./Accordion";
import Slideshow from "./Slideshow";
import Nav from "./Nav";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import "./App.css";
import Menu from "./Menu";
import Squares from "./Squares";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);
  const location = useLocation();
  console.log(location);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  console.log("x", x);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Header>
        <Menu
          onClick={() => setIsNavOpen(true)}
          style={{ paddingRight: "8px" }}
        />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.pathname} location={location}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </AnimatePresence>

        <Slideshow />
        <Squares />
        <AnimatePresence>{isToggled && <h2>Super Cool</h2>}</AnimatePresence>
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Modal isToggled={isToggled} setIsToggled={setIsToggled}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>
        <Accordion />
        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: "hidden", opacity: 0 }}
                transition={{
                  opacity: {
                    duration: 0,
                  },
                }}
              >
                <Card
                  onDragEnd={(event, info) => {
                    console.log(info.point);
                    if (info.point.x > 1000 || info.point.x < 300) {
                      setIsCardActive(false);
                    }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  style={{
                    x,
                    opacity,
                    background: "var(--blue)",
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
