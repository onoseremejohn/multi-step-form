import styled from "styled-components";
import { useGlobalContext } from "../Context";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Form = () => {
  const { page } = useGlobalContext();
  return (
    <Wrapper className='section-center'>
      {/* {page === 1 && <Step1 />}
      {page === 2 && <Step2 />}
      {page === 3 && <Step3 />}
      {page === 4 && <Step4 />} */}
      <Step2 />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  box-shadow: var(--dark-shadow);
  padding: 3em 2em;
  border-radius: var(--radius);
  background-color: var(--clr-white);

  @media screen and (min-width: 800px) {
    width: unset;
    margin: unset;
    box-shadow: unset;
    grid-column: 2/3;
    grid-row: 1/2;
    padding: 0 2em;
  }
  @media screen and (min-width: 1070px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export default Form;
