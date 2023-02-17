import styled from "styled-components";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
const Buttons = () => {
  return (
    <Wraper>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </Wraper>
  );
};

const Wraper = styled.div`
  background-color: blue;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 25vh;
  padding-top: 4em;
  ul {
    display: flex;
    justify-content: center;
    gap: 1.5em;
  }
  li {
    border: 2px solid white;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    display: grid;
    place-content: center;
    color: white;
    font-weight: var(--fw-medium);
    font-size: 1.2rem;
  }
`;

export default Buttons;
