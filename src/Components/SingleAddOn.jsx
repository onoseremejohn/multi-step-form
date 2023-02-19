import styled from "styled-components";
import { useGlobalContext } from "../Context";

const SingleAddOn = ({ name, text, selected, ...props }) => {
  const {
    plan: { duration },
    setAddOn,
  } = useGlobalContext();
  const handleSelect = (e) => {
    const val = e.target.checked;
    setAddOn(val, name);
  };
  return (
    <Wrapper selected={selected}>
      <input type='checkbox' onChange={handleSelect} checked={selected} />
      <div>
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
      <p className='bill'>
        +${props[duration]}/{duration === "monthly" ? "mo" : "yr"}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1em;
  border: ${({ selected }) =>
    selected ? "1px solid purple" : "1px solid #cccccc"};
  background-color: ${({ selected }) =>
    selected ? "var(--clr-grey-10)" : "none"};
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
    color: purple;
  }
`;

export default SingleAddOn;
