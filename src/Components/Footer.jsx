import styled from "styled-components";
import { useGlobalContext } from "../Context";
const Footer = () => {
  const {
    page,
    setPage,
    validateUserInfo,
    phoneNumber,
    name,
    email,
    plan: { name: planName },
    setError,
  } = useGlobalContext();
  const handleNext = () => {
    if (page === 1) {
      validateUserInfo(name, email, phoneNumber);
    } else if (page === 2) {
      if (!planName) {
        setError("plan");
        return;
      } else {
        setError();
        setPage("next");
      }
    } else if (page === 4) {
      setPage("submit");
    } else {
      setPage("next");
    }
  };

  if (page === "submit") {
    return null;
  }

  return (
    <Wrapper>
      <div className='section-center'>
        <button
          className={`${page === 1 ? "back hidden" : "back"}`}
          onClick={() => setPage("prev")}
        >
          Go Back{" "}
        </button>
        <button onClick={handleNext} className={`${page === 4 && "last-page"}`}>
          {page === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  min-height: 4rem;
  margin-top: 2rem;
  background-color: var(--clr-white);
  display: flex;
  align-items: center;
  .hidden {
    visibility: hidden;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    outline: none;
    border: none;
    background-color: var(--clr-grey-2);
    color: var(--clr-white);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    border-radius: var(--radius);
    font-weight: 600;
    font-size: 1rem;
  }
  button.back {
    background-color: unset;
    color: #999999;
    &:hover {
      color: var(--clr-grey-2);
    }
  }
  .last-page {
    background-color: #0c28f0;
    &:hover {
      opacity: 0.5;
    }
  }
  @media screen and (min-width: 800px) {
    grid-column: 2/3;
    margin-top: 0;
    padding: 0 2em 2em;
    div {
      width: 100%;
      margin: unset;
    }
    button {
      padding: 0.5rem 1rem;
    }
  }
  @media screen and (min-width: 1070px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export default Footer;
