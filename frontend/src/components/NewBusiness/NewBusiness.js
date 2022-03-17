import NewBusinessForm from "./NewBusinessForm/NewBusinessForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const NewBusiness = () => {
  const current_user = useSelector((state) => state.session.user);
  const history = useHistory();

  console.log(current_user);

  if (!current_user) {
    history.push("/signup");
  }
  return (
    <div className="newBus-container">
      <h1>NEW BUSINESS COMPONENT</h1>
      <NewBusinessForm current_user={current_user} />
    </div>
  );
};

export default NewBusiness;
