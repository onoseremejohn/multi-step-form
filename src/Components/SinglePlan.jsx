import styled from "styled-components";
import { useGlobalContext } from "../Context";

const SinglePlan = ({ name, icon, selected, ...props }) => {
  const {
    plan: { duration },
    setPlan,
  } = useGlobalContext();
  return (
    <Wrapper onClick={() => setPlan("name", name)} selected={selected}>
      <img src={icon} alt={name} />
      <div>
        <h4>{name}</h4>
        <p className='bill'>{props[duration]}</p>
        {duration === "yearly" && <p>2 months free</p>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  border: ${({ selected }) =>
    selected ? "1px solid purple" : "1px solid #cccccc"};
  background-color: ${({ selected }) =>
    selected ? "var(--clr-grey-10)" : "none"};
  border-radius: var(--radius);
  padding: 1em;
  cursor: pointer;
  h4 {
    margin: 0;
    font-size: 1.15rem;
  }
  .bill {
    font-size: 1rem;
    font-weight: 600;
    color: #999999;
  }
  @media screen and (min-width: 800px) {
    flex-direction: column;
    align-items: start;
    gap: 2.5em;
    h4 {
      margin-bottom: 0.2em;
    }
  }
`;

export default SinglePlan;
