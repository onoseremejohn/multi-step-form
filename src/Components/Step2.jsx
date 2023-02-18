import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { plans } from "../data";
import SinglePlan from "./SinglePlan";
const Step2 = () => {
  const {
    plan: { name },
    setPlan,
  } = useGlobalContext();
  const handleSwitch = (e) => {
    const duration = e.target.checked ? "yearly" : "monthly";
    setPlan("duration", duration);
  };
  return (
    <Wrapper>
      <h2>Select your plan</h2>
      <p className='text'>You have the option of monthly or yearly billing</p>
      <div className='plans'>
        {plans.map((plan) => (
          <SinglePlan key={plan.id} {...plan} selected={name === plan.name} />
        ))}
      </div>
      <div className='time'>
        <p>Monthly</p>
        <label className='switch'>
          <input type='checkbox' onChange={handleSwitch} />
          <span></span>
        </label>
        <p>Yearly</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text {
    font-size: 1.2rem;
    margin-bottom: 1em;
    color: #999999;
  }
  .plans {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 2em;
  }
  .time {
    display: flex;
    background-color: var(--clr-grey-10);
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    border-radius: var(--radius);
    padding: 0.5em 0;
    p {
      font-weight: 600;
      font-size: 1rem;
    }
  }
  .switch {
    position: relative;
    width: 40px;
    height: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    span {
      position: absolute;
      inset: 0;
      transition: var(--transition);
      background-color: var(--clr-grey-2);
      border-radius: 20px;
      &::before {
        position: absolute;
        content: "";
        width: 35%;
        aspect-ratio: 1/1;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--clr-white);
        transition: var(--transition);
        border-radius: 50%;
      }
    }
    input {
      display: none;
      &:checked + span::before {
        right: 5px;
        left: unset;
      }
    }
  }
  @media screen and (min-width: 800px) {
    .plans {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Step2;
