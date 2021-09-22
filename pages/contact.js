import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import contactPic from "../public/contactPic.svg";
import Link from "next/dist/client/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="homeDiv">
      <Navbar />

      <div id="content">
        <Image width={500} height={500} src={contactPic} alt="Contact me" />
        <div>
          <Heading>Contact Me</Heading>
          <h3 id="subtitle">bradjlund@gmail.com</h3>
          <h3 id="subtitle">+27 76 789 9191</h3>

          <div id="logoDiv">
            <Link href="https://github.com/BradleyLund">
              <a className="logo">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href="https://github.com/BradleyLund">
              <a className="logo">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
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
