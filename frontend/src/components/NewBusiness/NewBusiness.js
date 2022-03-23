import NewBusinessForm from "./NewBusinessForm/NewBusinessForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./NewBusiness.css";

const NewBusiness = () => {
  const current_user = useSelector((state) => state.session.user);
  const history = useHistory();

  console.log(current_user);

  if (!current_user) {
    history.push("/signup");
  }
  return (
    <>
      <div className="newBus-container">
        <div className="newBus-content-container">
          <NewBusinessForm current_user={current_user} />
          <div className="newBus-img-container">
            <img
              src="https://freesvg.org/img/Online-Store-Open-English.png"
              alt=""
              className="newBus-img"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewBusiness;
