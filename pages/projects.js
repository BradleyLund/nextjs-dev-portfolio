import Navbar from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mineSweeper from "../public/minesweeper.svg";
import Image from "next/image";
import iTunesImage from "../public/iTunesImage.svg";
import passportPals from "../public/passportPals.svg";
import shopping from "../public/shopping.svg";
import Link from "next/dist/client/link";

// All images throughout the website were used from an opensource library which can be found here:
//https://2.flexiple.com/scale/multi-color-illustrations

export default function About() {
  return (
    <div id="homeDiv">
      <Navbar />

      <Container>
        <Row className="text-center" xs={1} md={2} lg={2}>
          <Col>
            <div className="projectClass">
              <Image
                width={250}
                height={250}
                src={mineSweeper}
                alt="Minesweeper"
              />
              <h2 className="projectname">Minesweeper</h2>

              <Link href="https://desolate-river-88180.herokuapp.com/">
                <a>
                  <u>Live Application</u>
                </a>
              </Link>
              <Link href="https://github.com/BradleyLund/react-minesweeper">
                <a>
                  <u>Github Repository</u>
                </a>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="projectClass">
              <Image width={250} height={250} src={iTunesImage} alt="iTunes" />

              <h2 className="projectname">Africa Info: Country API </h2>

              <Link href="https://next-countries-api-px18tuu7i-bradleylund.vercel.app/">
                <a>
                  <u>Live Application</u>
                </a>
              </Link>
              <Link href="https://github.com/BradleyLund/Next-Countries-API">
                <a>
                  <u>Github Repository</u>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="text-center" xs={1} md={2} lg={2}>
          <Col>
            <div className="projectClass">
              <Image
                width={250}
                height={250}
                src={passportPals}
                alt="passportPals"
              />
              <h2 className="projectname">Passport Pals</h2>

              <Link href="https://pacific-mountain-86944.herokuapp.com/">
                <a>
                  <u>Live Application</u>
                </a>
              </Link>
              <Link href="https://github.com/BradleyLund/PassportPals">
                <a>
                  <u>Github Repository</u>
                </a>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="projectClass">
              <Image width={250} height={250} src={iTunesImage} alt="iTunes" />

              <h2 className="projectname">
                MERN fullstack MathsTracker Application
              </h2>

              <Link href="https://heroku-todo-test.herokuapp.com/">
                <a>
                  <u>Live Application</u>
                </a>
              </Link>
              <Link href="https://github.com/BradleyLund/maths-tracker">
                <a>
                  <u>Github Repository</u>
                </a>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="text-center" xs={1} md={2} lg={2}>
          <Col>
            <div className="projectClass">
              <Image width={250} height={250} src={iTunesImage} alt="iTunes" />

              <h2 className="projectname">iTunes Favourites API</h2>

              <Link href="https://ancient-spire-93066.herokuapp.com/">
                <a>
                  <u>Live Application</u>
                </a>
              </Link>
              <Link href="https://github.com/BradleyLund/react-itunes-api">
                <a>
                  <u>Github Repository</u>
                </a>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="projectClass">
              <Image width={250} height={250} src={iTunesImage} alt="iTunes" />

              <h2 className="projectname">MERN fullstack todo Application</h2>

              <Link href="https://mern-todo-fullstack.herokuapp.com/">
                <a>
                  <u>Live Application</u>
                </a>
              </Link>
              <Link href="https://github.com/BradleyLund/fullstack-todo">
                <a>
                  <u>Github Repository</u>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="text-center" xs={1} md={2} lg={2}>
          <Col>
            <div className="projectClass">
              <Image width={250} height={250} src={shopping} alt="shopping" />

              <h2 className="projectname">emoji Ecommerce Concept Store</h2>

              <Link href="https://bradleylund.github.io/emojiEcommerce/">
                <a>
                  <u>Live Application</u>
                </a>
              </Link>
              <Link href="https://github.com/BradleyLund/emojiEcommerce">
                <a>
                  <u>Github Repository</u>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .projectClass {
          display: flex;
          flex-direction: column;
        }

        .projectname {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        #homeDiv {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }

        #subtitle {
          margin-top: 10px;
          text-align: center;
        }

        #content {
          margin-top: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 40px;
        }

        #logoDiv {
          display: flex;
          justify-content: space-evenly;
          margin-top: 20px;
        }

        @media (max-width: 600px) {
          #content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}
