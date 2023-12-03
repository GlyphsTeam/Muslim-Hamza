import React, { useState } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";
import jobStyle from "../../assets/style/form/postJob.module.css";
import useAxios from "../../hooks/useAxios";
import Dropzone from "react-dropzone";
import housingStyle from "../../assets/style/form/postHousing.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RightPostJob() {
  const [housingFormData, setHousingFormData] = useState({
    email: "",
    place: "",
    type: "",
    description: "",
    phone: "",
    price: "",
    anonymous: "false",
    title: "",
    area: "",
    bathrooms: "",
    bedrooms: "",
    gender: "",
    images: [],
  });

  const [send, setSend] = useState(false);

  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);

  const [showTitleWarn, setShowTitleWarn] = useState(false);
  const [showLocationWarn, setShowLocationWarn] = useState(false);
  const [showTypeWarn, setShowTypeWarn] = useState(false);
  const [requireWarn, setRequireWarn] = useState(false);
  const [showEmailRegexWarn, setShowEmailRegexWarn] = useState(false);
  const [showImageWarn, setShowImageWarn] = useState(false);

  let formData = new FormData();
  housingFormData.title && formData.append("title", housingFormData?.title);
  housingFormData.description &&
    formData.append("description", housingFormData?.description);
  housingFormData.gender && formData.append("gender", housingFormData?.gender);
  housingFormData.email && formData.append("email", housingFormData?.email);
  housingFormData.phone && formData.append("phone", housingFormData?.phone);
  housingFormData.price && formData.append("price", housingFormData?.price);
  housingFormData.bathrooms &&
    formData.append("bathrooms", housingFormData?.bathrooms);
  housingFormData.bedrooms &&
    formData.append("bedrooms", housingFormData?.bedrooms);
  housingFormData.type && formData.append("type", housingFormData?.type);
  housingFormData.area && formData.append("area", housingFormData?.area);
  housingFormData.place && formData.append("place", housingFormData?.place);
  housingFormData.anonymous &&
    formData.append("anonymous", housingFormData?.anonymous);
  housingFormData.is_bathroom_shared &&
    formData.append("is_bathroom_shared", housingFormData?.is_bathroom_shared);
  housingFormData.images &&
    housingFormData?.images?.forEach((image) => {
      formData.append("images[]", image);
    });

  let url = "rents/create";
  let cityUrl = `cities`;

  const [Data] = useAxios(cityUrl);
  const city = Data?.data;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHousingFormData({ ...housingFormData, [name]: value });
  };

  const [Res] = useFetch(url, formData, send);

  const handleSubmit = async () => {
    setShowTitleWarn(false);
    setShowEmailRegexWarn(false);
    setRequireWarn(false);
    setShowLocationWarn(false);
    setShowTypeWarn(false);
    if (
      housingFormData.title === "" ||
      housingFormData.place === "" ||
      housingFormData.type === "" ||
      (housingFormData.phone === "" && housingFormData.email === "") ||
      housingFormData.images.length === 0
    ) {
      if (housingFormData.title === "") {
        setShowTitleWarn(true);
      }
      if (housingFormData.place === "") {
        setShowLocationWarn(true);
      }
      if (housingFormData.type === "") {
        setShowTypeWarn(true);
      }
      if (housingFormData.images.length === 0) {
        setShowImageWarn(true);
      }
      if (regex.test(housingFormData.email)) {
        setShowEmailRegexWarn(true);
      }
      if (housingFormData.phone === "" && housingFormData.email === "") {
        setRequireWarn(true);
      }
    } else {
      setSend(true);
      setTimeout(() => {
        setCount(4);
        setShowAlert(true);
        setHousingFormData({
          email: "",
          place: "",
          type: "",
          description: "",
          phone: "",
          salary_type: "",
          price: "",
          anonymous: "false",
          title: "",
          area: "",
          bathrooms: "",
          bedrooms: "",
        });
        setSend(false);
      }, 100);
    }
  };

  const anonymousClick = () => {
    if (
      housingFormData.anonymous === "false" ||
      housingFormData.anonymous !== "true"
    ) {
      setHousingFormData({ ...housingFormData, anonymous: "true" });
    } else {
      setHousingFormData({ ...housingFormData, anonymous: "false" });
    }
  };

  const sharedClick = () => {
    if (
      housingFormData.is_bathroom_shared === "" ||
      housingFormData.is_bathroom_shared !== "true"
    ) {
      setHousingFormData({ ...housingFormData, is_bathroom_shared: "true" });
    } else {
      setHousingFormData({ ...housingFormData, is_bathroom_shared: "false" });
    }
  };

  const handleImageDrop = (acceptedFiles) => {
    setHousingFormData({
      ...housingFormData,
      images: [...housingFormData?.images, ...acceptedFiles],
    });
  };
  const handleRemoveImage = (index) => {
    const updatedImages = [...housingFormData.images];
    updatedImages.splice(index, 1);
    setHousingFormData({
      ...housingFormData,
      images: updatedImages,
    });
  };

  return (
    <div className={`${style.registerFormDiv}`}>
      <form>
        <div className={`w-100 ${housingStyle.uploadImageDiv}`}>
          <Dropzone onDrop={handleImageDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={housingStyle.postHousingUploadImage}>
                  <LazyLoadImage src={require("../../assets/images/uploadImage.png")} alt="uploadImage"/>
                  <p>{"Upload Your Images"}</p>
                </div>
              </div>
            )}
          </Dropzone>
          <div className={housingStyle.imageContainerDiv}>
            {housingFormData?.images?.map((image, index) => (
              <div key={image.name} className={style.imageContainer}>
                <LazyLoadImage
                  src={URL.createObjectURL(image)}
                  // className={style.image}
                  alt=""
                />
                <button
                  className={housingStyle.removeButton}
                  onClick={() => handleRemoveImage(index)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        {showImageWarn && (
          <p className={jobStyle.required}>Image is required</p>
        )}
        <input
          className={`w-100`}
          name="title"
          type="text"
          placeholder="Title"
          value={housingFormData.title}
          onChange={handleChange}
        />
        {showTitleWarn && (
          <p className={jobStyle.required}>Title is required</p>
        )}

        <select
          name="place"
          id="place"
          value={housingFormData.place}
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
          value={housingFormData.type}
          onChange={handleChange}
          className={`w-100 ${jobStyle.dropDownMain}`}
        >
          <option value="">Accommodation Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="room">Room</option>
          <option value="townhouse_type">Townhouse</option>
        </select>
        {showTypeWarn && (
          <p className={jobStyle.required}>Accommodations Type is required</p>
        )}

        {/* <div className={`d-flex w-100`}> */}
        <select
          id="gender"
          name="gender"
          onChange={handleChange}
          value={housingFormData.gender}
          className={`w-100 ${jobStyle.dropDownMain}`}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="any">Any</option>
        </select>

        <div className={`d-flex w-100`}>
          <select
            id="bedrooms"
            name="bedrooms"
            onChange={handleChange}
            value={housingFormData.bedrooms}
            className={`w-50 ${jobStyle.dropDownMain} ${jobStyle.inputMargin}`}
          >
            <option value="">Bedroom</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          <select
            id="bathrooms"
            name="bathrooms"
            value={housingFormData.bathrooms}
            onChange={handleChange}
            className={`w-50 ${jobStyle.dropDownMain}`}
          >
            <option value="">Bathroom</option>
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className={`w-100 mb-4 ${style.checkboxDivPost}`}>
          <input
            id="bathroomShared"
            name="bathroomShared"
            type="checkbox"
            className={`col-1`}
            onClick={sharedClick}
          />
          <label htmlFor="bathroomShared" className="col-11">
            Bathroom Shared?
          </label>
        </div>

        <input
          type="text"
          id="price"
          name="price"
          onChange={handleChange}
          value={housingFormData.price}
          placeholder={"Price"}
          className={`w-100`}
        />

        <input
          type="text"
          id="area"
          name="area"
          onChange={handleChange}
          value={housingFormData.area}
          placeholder={"Square Feet"}
          className={`w-100`}
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={housingFormData.phone}
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
          value={housingFormData.email}
        />

        <textarea
          className={jobStyle.textArea}
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={housingFormData.description}
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
