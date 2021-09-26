import { Heading } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import Image from "next/image";
import campingPic from "../public/campingPic.svg";

export default function About() {
  return (
    <div id="homeDiv">
      <Navbar />

      <div id="content">
        <div id="image">
          <Image width={500} height={500} src={campingPic} alt="Contact me" />
        </div>
        <div>
          <Heading>About Me</Heading>
          <p>
            Creative and passionate individual inspired by the possibilities
            that the ever changing tech industry allow.
            <br></br>
            <br></br>I am a hard-working, quick learning individual with a
            strong drive to constantly develop myself and enhance my abilities.
            <br></br>
            <br></br>I love being faced with challenges and the rewards that
            come with overcoming them.
            <br></br>
            <br></br>
          </p>
        </div>
      </div>

      <style jsx>{`
        #homeDiv {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }

        #image {
          margin-right: 70px;
        }

        p {
          width: 300px;
          text-align: center;
          margin-top: 30px;
        }
        #subtitle {
          margin-top: 10px;
          text-align: center;
        }

        #content {
          margin-top: 60px;
          display: flex;
          align-items: center;
          text-align: center;
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
