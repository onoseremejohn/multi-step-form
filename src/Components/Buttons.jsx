import styled from "styled-components";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
import bgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import { useGlobalContext } from "../Context";
const Buttons = () => {
  const { page } = useGlobalContext();
  return (
    <Wraper>
      <ul>
        <li>
          <span className={`${page === 1 ? "active" : null}`}>1</span>
          <div>
            <p className='step'>STEP 1</p>
            <p className='bold'>YOUR INFO</p>
          </div>
        </li>
        <li>
          <span className={`${page === 2 ? "active" : null}`}>2</span>
          <div>
            <p className='step'>STEP 2</p>
            <p className='bold'>SELECT FORM</p>
          </div>
        </li>
        <li>
          <span className={`${page === 3 ? "active" : null}`}>3</span>
          <div>
            <p className='step'>STEP 3</p>
            <p className='bold'>ADD-ONS</p>
          </div>
        </li>
        <li>
          <span
            className={`${page === 4 || page === "submit" ? "active" : null}`}
          >
            4
          </span>
          <div>
            <p className='step'>STEP 4</p>
            <p className='bold'>SUMMARY</p>
          </div>
        </li>
      </ul>
    </Wraper>
  );
};

const Wraper = styled.div`
  padding: 10% 0;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    width: 100%;
    height: 30%;
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    @media screen and (min-width: 600px) {
      height: 40%;
    }
    @media screen and (min-width: 800px) {
      display: none;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 1.5em;
  }
  li > span {
    border: 2px solid #c6c6c6;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    display: grid;
    place-content: center;
    color: var(--clr-white);
    font-weight: var(--fw-medium);
    font-size: 1.2rem;
  }
  li > span.active {
    background-color: var(--clr-grey-10);
    color: var(--clr-grey-2);
    border: none;
  }
  li > div {
    display: none;
  }
  .bold {
    color: var(--clr-white);
  }
  .step {
    color: #c6c6c6;
  }
  @media screen and (min-width: 600px) and (max-width: 799px) {
    ul {
      gap: 2.5em;
    }
  }
  @media screen and (min-width: 800px) {
    border-radius: 1rem;
    padding: 2em 1.5em;
    position: relative;
    grid-column: 1/2;
    grid-row: 1/3;
    align-self: stretch;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;

    ul {
      flex-direction: column;
    }
    li {
      display: flex;
      align-items: center;
      gap: 1em;
    }
    li > div {
      display: block;
    }
  }
  @media screen and (min-width: 1070px) {
    background-size: contain;
  }
`;

export default Buttons;
