import styled from "styled-components";

const Form = () => {
  return (
    <Wrapper className='section-center'>
      <h2>Personal info</h2>
      <p>Provide your name, email address, and phone number</p>
      <form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='name' name='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input type='number' id='phoneNumber' name='phoneNumber' />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  box-shadow: var(--dark-shadow);
  padding: 3em 2em;
  border-radius: var(--radius);
  margin-top: -20%;
  background-color: var(--clr-white);
  position: relative;
  z-index: 5;
  p {
    font-size: 1.2rem;
    margin-bottom: 1em;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  .form-control {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .form-control input {
    height: 2em;
    outline: none;
    border: 1px solid grey;
    border-radius: var(--radius);
  }
`;

export default Form;
