import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { plans, addOns as data } from "../data";
import SingleCheckout from "./SingleCheckout";

const Step4 = () => {
  const {
    plan: { name, duration },
    addOns,
    setPage,
  } = useGlobalContext();
  const plan = plans.find((plan) => plan.name === name);
  const calculateTotal = () => {
    const planPrice = plan[duration];
    const addonsTotal = addOns.reduce((total, addon) => {
      const price = data.find((p) => p.name === addon)[duration];
      total += price;
      return total;
    }, 0);
    return addonsTotal + planPrice;
  };
  return (
    <Wrapper>
      <h2>Finishing up</h2>
      <p className='text'>Double-check everything looks OK before confirming</p>
      <ul className='dark-bg'>
        <li className='flex first'>
          <div>
            <h4>
              {name} ({duration})
            </h4>
            <p
              className='grey'
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setPage(2)}
            >
              Change
            </p>
          </div>
          <p style={{ fontWeight: "600" }}>
            ${plan[duration]}/{duration === "monthly" ? "mo" : "yr"}
          </p>
        </li>
        {addOns.length > 0 && <hr />}
        {addOns.map((addon) => (
          <SingleCheckout name={addon} key={addon} />
        ))}
      </ul>
      <div className='flex total'>
        <p className='grey'>Total (per year)</p>
        <p style={{ fontWeight: "600", color: "#5a06c0" }}>
          ${calculateTotal()}/{duration === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h4 {
    margin: 0;
    font-size: 1.05rem;
  }
  .text {
    font-size: 1.2rem;
    margin-bottom: 1em;
    color: #999999;
  }
  .dark-bg {
    background-color: #f2f5f8;
    padding: 1em 1em 0.5em;
    border-radius: var(--radius);
    margin-bottom: 2em;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
  }
  hr {
    margin: 1.5em 0;
  }
  .total {
    padding: 0 1em;
    margin-bottom: 0;
  }
  .grey {
    color: #999999;
  }
`;

export default Step4;
