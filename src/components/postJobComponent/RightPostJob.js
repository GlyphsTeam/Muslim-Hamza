import React, { useState } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";
import jobStyle from "../../assets/style/form/postJob.module.css";
import useAxios from "../../hooks/useAxios";

function RightPostJob() {
  const [jobFormData, setJobFormData] = useState({
    email: "",
    place: "",
    type: "",
    description: "",
    phone: "",
    salary_type: "",
    salary: "",
    anonymous: "false",
    title: "",
  });

  const [send, setSend] = useState(false);

  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);

  const [showTitleWarn, setShowTitleWarn] = useState(false);
  const [showLocationWarn, setShowLocationWarn] = useState(false);
  const [showTypeWarn, setShowTypeWarn] = useState(false);

  const [requireWarn, setRequireWarn] = useState(false);
  const [showEmailRegexWarn, setShowEmailRegexWarn] = useState(false);

  let formData = new FormData();
  jobFormData.title && formData.append("title", jobFormData?.title);
  jobFormData.anonymous && formData.append("anonymous", jobFormData?.anonymous);
  jobFormData.description &&
    formData.append("description", jobFormData?.description);
  jobFormData.salary && formData.append("salary", jobFormData?.salary);
  jobFormData.salary_type &&
    formData.append("salary_type", jobFormData?.salary_type);
  jobFormData.type && formData.append("type", jobFormData?.type);
  jobFormData.company && formData.append("company", jobFormData?.company);
  jobFormData.email && formData.append("email", jobFormData?.email);
  jobFormData.phone && formData.append("phone", jobFormData?.phone);
  jobFormData.place && formData.append("place", jobFormData?.place);

  let url = "jobs/create";
  let cityUrl = `cities`;

  const [Data] = useAxios(cityUrl);
  const city = Data?.data;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobFormData({ ...jobFormData, [name]: value });
  };

  const [Res] = useFetch(url, formData, send);


  const handleSubmit = async () => {
    setShowTitleWarn(false);
    setShowEmailRegexWarn(false);
    setRequireWarn(false);
    setShowLocationWarn(false);
    setShowTypeWarn(false);

    if (
      jobFormData.title === "" ||
      jobFormData.place === "" ||
      jobFormData.type === "" ||
      (jobFormData.phone === "" && jobFormData.email === "")
    ) {
      if (jobFormData.title === "") {
        setShowTitleWarn(true);
      }
      if (jobFormData.place === "") {
        setShowLocationWarn(true);
      }
      if (jobFormData.type === "") {
        setShowTypeWarn(true);
      }
      if (regex.test(jobFormData.email)) {
        setShowEmailRegexWarn(true);
      }
      if (jobFormData.phone === "" && jobFormData.email === "") {
        setRequireWarn(true);
      }
    } else {
      setSend(true);
      setTimeout(() => {
        setCount(4);
        setShowAlert(true);
        setJobFormData({
          email: "",
          place: "",
          type: "",
          description: "",
          phone: "",
          salary_type: "",
          salary: "",
          anonymous: "false",
          title: "",
        });
        setSend(false);
      }, 100);
    }
  };

  const anonymousClick = () => {
    if (jobFormData.anonymous === "false" || jobFormData.anonymous !== "true") {
      setJobFormData({ ...jobFormData, anonymous: "true" });
    } else {
      setJobFormData({ ...jobFormData, anonymous: "false" });
    }
  };

  return (
    <div className={`${style.registerFormDiv}`}>
      <form>
        <input
          className={`w-100`}
          name="title"
          type="text"
          placeholder="Title"
          value={jobFormData.title}
          onChange={handleChange}
        />
        {showTitleWarn && (
          <p className={jobStyle.required}>Title is required</p>
        )}

        <select
          name="place"
          id="place"
          value={jobFormData.place}
          onChange={handleChange}
          className={`w-100 ${jobStyle.dropDownMain}`}
        >
          <option value="">Location</option>
          {city?.map((item) => {
            return (
              <option key={item.city} value={item.city}>
                {item.city}
              </option>
            );
          })}
        </select>
        {showLocationWarn && (
          <p className={jobStyle.required}>Location is required</p>
        )}

        <select
          id="type"
          name="type"
          onChange={handleChange}
          className={`w-100 ${jobStyle.dropDownMain}`}
        >
          <option value="">Job Type</option>
          <option value="full">Full time</option>
          <option value="part">Part time</option>
          <option value="both">Both</option>
        </select>
        {showTypeWarn && (
          <p className={jobStyle.required}>Job type is required</p>
        )}

        <div className={`d-flex w-100`}>
          <input
            className={`w-50 ${jobStyle.inputMargin}`}
            name="salary"
            type="text"
            placeholder="Salary"
            value={jobFormData.salary}
            onChange={handleChange}
          />

          <select
            name="salary_type"
            id="salary_type"
            onChange={handleChange}
            className={`w-50 ${jobStyle.dropDownMain}`}
          >
            <option value="">Salary Type</option>
            <option value="h">Hour</option>
            <option value="d">Day</option>
            <option value="w">Week</option>
            <option value="m">Month</option>
          </select>
        </div>

        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={jobFormData.phone}
          placeholder={"Phone number"}
          className={`w-100`}
        />
        {requireWarn && (
          <p className={style.validationWarn}>
            Please fill phone number or email.
          </p>
        )}

        <input
          className={`w-100`}
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={jobFormData.email}
        />

        <textarea
          className={jobStyle.textArea}
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={jobFormData.description}
        ></textarea>
      </form>
      <div className="d-flex justify-content-between align-items-center">
        <div className={`w-50 ${style.checkboxDivPost}`}>
          <input
            id="remember"
            name="anonymous"
            type="checkbox"
            className={`col-1`}
            onClick={anonymousClick}
          />
          <label htmlFor="remember" className="col-11">
            Anonymous post
          </label>
        </div>
        <button className={`${jobStyle.btn}`} onClick={handleSubmit}>
          Add
        </button>
      </div>
      {showAlert && (
        <Alert
          type="success"
          message="Your Post Has been Published successfully"
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          count={count}
          setCount={setCount}
        />
      )}
    </div>
  );
}

export default RightPostJob;
