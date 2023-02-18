import styled from "styled-components";

const Step4 = () => {
  return (
    <Wrapper>
      <h2>Finishing up</h2>
      <p className='text'>Double-check everything looks OK before confirming</p>
      <div className='dark-bg'>
        <div className='flex'>
          <div>
            <h4>Arcade (Monthly)</h4>
            <p className='grey' style={{ textDecoration: "underline" }}>
              Change
            </p>
          </div>
          <p style={{ fontWeight: "600" }}>+$90/yr</p>
        </div>
        <div className='flex'>
          <p className='grey'>Online service</p>
          <p>+$10/yr</p>
        </div>
        <div className='flex'>
          <p className='grey'>Larger storage</p>
          <p>+$20/yr</p>
        </div>
      </div>
      <div className='flex total'>
        <p className='grey'>Total (per year)</p>
        <p style={{ fontWeight: "600", color: "purple" }}>$120/yr</p>
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
  .total {
    padding: 0 1em;
  }
  .grey {
    color: #999999;
  }
`;

export default Step4;
