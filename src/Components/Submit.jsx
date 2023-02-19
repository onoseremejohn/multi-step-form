import { useState, useEffect } from "react";
import styled from "styled-components";
import Check from "../assets/images/icon-thank-you.svg";

const Submit = () => {
  const [count, setCount] = useState(5);
  const [redirecting, setRedirecting] = useState(true);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    let timer;
    if (redirecting) {
      timer = setTimeout(() => {
        setRedirecting(false);
        const newWindow = window.open(
          "https://onosereme.netlify.app/contact",
          "_blank"
        );
        if (!newWindow || typeof newWindow.closed == "undefined") {
          setRedirected(false);
        } else setRedirected(true);
      }, count * 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [redirecting, count]);

  useEffect(() => {
    let timer;
    if (count > 0 && redirecting) {
      timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [redirecting, count]);

  return (
    <Wrapper className='text-center'>
      <img src={Check} alt='checkmark' />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a href='mailto:support@loremgaming.com'>support@loremgaming.com</a>{" "}
        <br /> <br />
        {redirecting ? (
          <>Redirecting to developer's profile in {count} seconds...</>
        ) : redirected ? (
          <>You have been redirected</>
        ) : (
          <>
            If you were not redirected, please click{" "}
            <a href='https://onosereme.netlify.app/contact'>here</a>.
          </>
        )}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    margin-bottom: 1.5em;
  }
  p {
    width: 92%;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-bottom: 1em;
    color: #999999;
  }
  @media screen and (min-width: 800px) {
    p {
      width: 100%;
    }
  }
`;

export default Submit;
