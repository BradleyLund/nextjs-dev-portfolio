import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import remoteCoding from "../public/remoteCoding.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/dist/client/link";

// can use this for changing alignment and flex direction etc when responsive
// align={["flex-end", "center"]}

export default function Home() {
  return (
    <div id="homeDiv">
      <Navbar />

      <div id="content">
        <Image
          width={500}
          height={500}
          src={remoteCoding}
          alt="remote coding"
        />
        <div>
          <Heading>Bradley Lund</Heading>
          <h3 id="subtitle">Full Stack Web Developer</h3>
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
