import style from "../../assets/style/common/contact.module.css";
import { useLocation } from "react-router-dom";

function ContactInfo({ data }) {
  const location = useLocation();
  const pathName = location.pathname;
  const capitalJobUrl = `/show-job/${data?.id}`;
  const smallJobUrl = `/Show-Job/${data?.id}`;
  const showStore = `/Shop-Profile/${data?.id}`;

  return (
    <div
      className={`${
        pathName === capitalJobUrl || pathName === smallJobUrl
          ? style.contactInfoMobileDiv
          : style.contactInfoDiv
      } ${pathName === showStore ? style.contactInfoMobileShop : ""} `}
    >
      <h5
        className={
          pathName === showStore ? style.showStoreTitle : style.showTitle
        }
      >
        Contact Info
      </h5>
      {data?.phone && (
        <p >
          <a href={`tel:${data?.phone}`}>
            <i className={`fas fa-phone-alt ${style.iconPadding}`}></i>
            {data?.phone}
          </a>
        </p>
      )}

      {data?.email && (
        <p >
          <a href={`mailto:${data?.email}`}>
            <i
              className={`fas fa-envelope-open-text ${style.shareIconMargin}`}
            ></i>
            {data?.email}
          </a>
        </p>
      )}
    </div>
  );
}

export default ContactInfo;
