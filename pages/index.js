import Image from "next/image";
import { Heading } from "@chakra-ui/react";

import Navbar from "../components/NavBar";
import remoteCoding from "../public/remoteCoding.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/dist/client/link";

// All images throughout the website were used from an opensource library which can be found here:
//https://2.flexiple.com/scale/multi-color-illustrations

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
            <Link href="https://www.linkedin.com/in/bradley-lund/">
              <a className="logo">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* using the style jsx method to style this page */}
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
