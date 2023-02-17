import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <button>Go Back </button>
        <button>Next Step</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 4rem;
  background-color: green;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Footer;
