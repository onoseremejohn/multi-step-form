import { addOns } from "../data";
import { useGlobalContext } from "../Context";
const SingleCheckout = ({ name }) => {
  const {
    plan: { duration },
  } = useGlobalContext();
  const match = addOns.find((addon) => addon.name === name);
  return (
    <li className='flex'>
      <p className='grey'>{name}</p>
      <p>
        +${match[duration]}/{duration === "monthly" ? "mo" : "yr"}
      </p>
    </li>
  );
};

export default SingleCheckout;
