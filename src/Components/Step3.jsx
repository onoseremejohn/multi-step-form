import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { addOns } from "../data";
import SingleAddOn from "./SingleAddOn";
const Step3 = () => {
  const { addOns: addOnsContext } = useGlobalContext();
  return (
    <Wrapper>
      <h2>Pick add-ons</h2>
      <p className='text'>Add-ons help enhance your gaming experience</p>
      <div className='addOns'>
        {addOns.map((item) => (
          <SingleAddOn
            key={item.id}
            {...item}
            selected={addOnsContext.includes(item.name)}
          />
        ))}
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
  .addOns {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export default Step3;
