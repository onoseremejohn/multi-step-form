import styled from "styled-components";
import { useGlobalContext } from "../Context";
const Step1 = () => {
  const {
    setUser,
    name,
    email,
    phoneNumber,
    error: { name: nameError, email: emailError, number: phoneNumberError },
  } = useGlobalContext();
  return (
    <Wrapper>
      <h2>Personal info</h2>
      <p>Provide your name, email address, and phone number</p>
      <form>
        <div className='form-control'>
          <label htmlFor='name'>
            Name <span>{nameError}</span>
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            placeholder='e.g. Stephen King'
            onChange={setUser}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>
            Email Address <span>{emailError}</span>
          </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            placeholder='e.g. stephenking@lorem.com'
            onChange={setUser}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='phoneNumber'>
            Phone Number <span>{phoneNumberError}</span>
          </label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            value={phoneNumber}
            placeholder='e.g. +1 234 567 890'
            onChange={setUser}
          />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    font-size: 1.2rem;
    margin-bottom: 1em;
    color: #999999;
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
    &:focus-visible {
      outline: 1px solid purple;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    padding: 0 1em;
    max-width: 600px;
  }

  label {
    display: flex;
  }

  label > span {
    color: red;
    font-weight: 600;
    margin-left: auto;
  }

  @media screen and (min-width: 800px) {
    .form-control input {
      height: 3em;
    }
  }
`;

export default Step1;
