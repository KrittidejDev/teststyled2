import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineMessage, MdOutlineCall } from "react-icons/md";
import contactImg from "../assets/Service 24_7.svg";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 1400px;
  }

  .Box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 20px;

    @media screen and (min-width: ${breakpoints.lg}) {
      max-width: 1200px;
    }
  }
  .Title {
    font-size: 1.5rem;
    font-weight: 700;
    font-style: bold;
    color: #333;
    margin-bottom: 0.5rem;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 2rem;
    }
  }

  .Content {
    width: 80%;
    font-size: 0.8rem;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 1rem;
    }
  }

  .FormBox {
    display: flex;

    width: 100%;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: ${breakpoints.lg}) {
      flex-direction: row; // จัดเรียงให้อยู่ในแถว
    }
  }

  .IconMsg {
    height: 20px;
    width: 20px;
    color: #ffffff;
  }

  .FormContact {
    max-width: 460px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .ButtonBox {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .InputForm {
    position: relative;
    width: 100%;
  }

  .Input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 10px;
    outline: none;
    box-sizing: border-box;
  }

  .Label {
    position: absolute;
    left: 25px;
    backdrop-filter: blur(1px);
    transform: translateY(-50%);
    font-size: 16px;
    color: #000000;
    pointer-events: none;
    transition: 0.2s ease all;
    padding: 0 10px 0 10px;
  }

  .InputGroup {
    margin-top: 20px;
  }

  .DescriptionFill {
    height: 120px;
  }

  .submitBox {
    display: flex;
    justify-content: center;
  }
  .submitButton {
    margin-top: 20px;

    @media screen and (min-width: ${breakpoints.lg}) {
      position: absolute;
      right: 10px;
    }
  }

  .imgContact {
    max-width: 400px;
    height: auto;
    padding: 10px;
    margin: 20px 0 20px 0;
  }
`;

const Button = styled.button`
  height: 44px;
  width: ${(props) => props.$width || "220px"};
  background-color: ${(props) => props.$bgColor || "#000000"};
  color: ${(props) => props.$textColor || "#ffffff"};
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: ${breakpoints.lg}) {
    width: 100%;
  }
`;

const Contact = () => {
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Container>
      <div className="Box">
        <h1 className="Title">CONTACT US</h1>
        <p className="Content">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>

        <div className="FormBox">
          <div className="FormContact">
            <div className="ButtonBox">
              <Button>
                <MdOutlineMessage /> VIA SUPPORT CHAT
              </Button>
              <Button>
                <MdOutlineCall /> VIA SUPPORT CHAT
              </Button>
              <Button $bgColor="#ffffff" $textColor="#000000" $width="100%">
                <MdOutlineMessage /> VIA SUPPORT CHAT
              </Button>
            </div>

            <div className="InputForm">
              <div className="InputGroup">
                <input className="Input" type="text" required placeholder=" " />
                <label className="Label">Name</label>
              </div>
              <div className="InputGroup">
                <input className="Input" type="text" required placeholder=" " />
                <label className="Label">Email</label>
              </div>
              <div className="InputGroup">
                <textarea
                  id="description"
                  value={description}
                  onChange={handleChange}
                  placeholder=""
                  className="DescriptionFill Input"
                  rows="4"
                  cols="50"
                />
                <label className="Label">Description</label>
              </div>
              <div className="submitBox">
                <Button className="submitButton">SUBMIT</Button>
              </div>
            </div>
          </div>
          <img className="imgContact" src={contactImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
