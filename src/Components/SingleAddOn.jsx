import styled from "styled-components";

const SingleAddOn = ({ name, text, yearly, monthly }) => {
  return (
    <Wrapper>
      <input type='checkbox' />
      <div>
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
      <p className='bill'>{monthly}</p>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1em;
  border: 1px solid purple;
  background-color: var(--clr-grey-10);
  border-radius: var(--radius);
  padding: 0.8em;
  input[type="checkbox"] {
    width: 1.5rem;
    height: 1.5rem;
  }
  h4 {
    margin: 0;
    font-size: 1.15rem;
  }
  p {
    /* font-size: 1rem; */
    /* font-weight: 600; */
    color: #999999;
  }
  .bill {
    margin-left: auto;
  }
`;

export default SingleAddOn;
