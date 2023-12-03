import style from "../assets/style/404PageStyle.module.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className={style.colorDiv}>
      {" "}
      <div className={style.mainbox}>
        {/* <div class="err">4</div>
        <i className="far fa-question-circle fa-spin"></i> */}
        <div className={style.err2}>404</div>
        <div className={style.msg}>
         oops page not found
          <p>
            Let's go <Link className={style.homeButton} to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;