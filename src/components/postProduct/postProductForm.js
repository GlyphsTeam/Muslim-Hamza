import React ,{ useState } from 'react'
import useAxios from '../../hooks/useAxios';
import style from "../../assets/style/postProduct/postProduct.module.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Dropzone from "react-dropzone";
import MarketPlacePostOption from './MarketPlace'
import Alert from '../alert/Alert';
function ProductForm() {
    const [marketFormData, setMarketFormData] = useState({
        title: "",
        price: "",
        email: "",
        phone_number: "",
        main_category: "",
        sub_category: "",
        year: "",
        color: "false",
        condition: "",
        anonymous: "",
        description: "",
        place: "",
        category: "",
        looking: "",
        images: [],
    });
    const [showImageWarn, setShowImageWarn] = useState(false);
    const [send, setSend] = useState(false);
    const [showCategoryWarn, setShowCategoryWarn] = useState(false);
    const [showSubCategoryWarn, setShowSubCategoryWarn] = useState(false);
    const [showMainCategoryWarn, setShowMainCategoryWarn] = useState(false);
    const [showTitleWarn, setShowTitleWarn] = useState(false);
    const [showLocationWarn, setShowLocationWarn] = useState(false);
    const [count, setCount] = useState(4);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedMainCategoryID, setSelectedMainCategoryID] = useState("");
    const [selectedSubCategoryID, setSelectedSubCategoryID] = useState("");
    const [lookingState, setLooking] = useState(0);
    const [descriptionWarning, setDescriptionWarning] = useState(false);
    const [showEmailRegexWarn, setShowEmailRegexWarn] = useState(false);
    const [showLooking, setShowLooking] = useState(false);
    const [requireWarn, setRequireWarn] = useState(false);
    const [showTypeWarn, setShowTypeWarn] = useState(false);

    let formData = new FormData();
    marketFormData.title && formData.append("title", marketFormData?.title);

    marketFormData.description &&
      formData.append("description", marketFormData?.description.replace(/\n/g, "<br>"));
  
    marketFormData.email && formData.append("email", marketFormData?.email);
    marketFormData.phone_number &&
      formData.append("phone_number", marketFormData?.phone_number);
    marketFormData.price && formData.append("price", marketFormData?.price);
    marketFormData.condition &&
      formData.append("condition", marketFormData?.condition);
  
  
    marketFormData.category &&
      formData.append("sub_id", marketFormData?.category);
    marketFormData.color && formData.append("color", marketFormData?.color);
    marketFormData.sub_category &&
      formData.append("model_id", marketFormData?.sub_category);
    marketFormData.main_category &&
      formData.append("main_id", marketFormData?.main_category);
    marketFormData.place && formData.append("place", marketFormData?.place);
    lookingState && formData.append("looking", lookingState);
  
    marketFormData.anonymous &&
      formData.append("anonymous", marketFormData?.anonymous);
  
    marketFormData.images &&
      marketFormData?.images?.forEach((image) => {
        formData.append("images[]", image);
      });
  
    marketFormData.points &&
      marketFormData?.points?.forEach((image) => {
        formData.append("points[]", marketFormData.points);
      });
      let colorUrl = `color`;
      let yearUrl = `year`;
      let cityUrl = `cities`;
      const [Data] = useAxios(colorUrl);
      const [colorData] = useAxios(yearUrl);
      const [cityData] = useAxios(cityUrl);
      const [categoryData] = useAxios(`main-market/categories`);
      const [subCategoryData] = useAxios(
        `category-market?main_id=${selectedMainCategoryID}`
      );
      const [modelData] = useAxios(
        `product-model?sub_id=${selectedSubCategoryID}`

      );
      const color = Data?.data;
      const city = cityData?.data;
      const year = colorData?.data;
      const category = categoryData?.data?.main;
      const subCategory = subCategoryData?.data;
      const model = modelData?.data;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const handleChange = (e) => {
        const { name, value } = e.target;
        setMarketFormData({ ...marketFormData, [name]: value });
      };
      const handleSubmit = async () => {
        setShowTitleWarn(false);
        setShowEmailRegexWarn(false);
        setRequireWarn(false);
        setShowLocationWarn(false);
        setShowTypeWarn(false);
        setShowCategoryWarn(false);
        setShowSubCategoryWarn(false);
        setShowMainCategoryWarn(false);
        setShowLooking(false);
        setDescriptionWarning(false);
    
        if (
          marketFormData.title === "" ||
          // marketFormData.place === "" ||
          marketFormData.type === "" ||
          (marketFormData.phone === "" && marketFormData.email === "") ||
          marketFormData.images.length === 0
        ) {
          if (marketFormData.title === "") {
            setShowTitleWarn(true);
          }
          if (marketFormData.category === "") {
            setShowCategoryWarn(true);
          }
          if (marketFormData.sub_category === "") {
            setShowSubCategoryWarn(true);
          }
          if (marketFormData.main_category === "") {
            setShowMainCategoryWarn(true);
          }
          if (lookingState === 0) {
            setShowLooking(true);
          }
    
          if (marketFormData.images.length === 0) {
            setShowImageWarn(true);
          }
          if (regex.test(marketFormData.email)) {
            setShowEmailRegexWarn(true);
          }
          if (marketFormData.phone_number === "" && marketFormData.email === "") {
            setRequireWarn(true);
          }
          if (marketFormData.description === "") {
            setDescriptionWarning(true);
          }
        } else {
          const token = localStorage.getItem("muslim_comunity_token");
          let baseURL = `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}/market/create`;
          console.log("marketFormData>>>",marketFormData)
          try {
            await fetch(`${baseURL}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
              method: "POST",
              body: formData,
            }).then((result) => {
              console.log("result>>>", result)
              setSend(true);
              setTimeout(() => {
                setCount(4);
                setShowAlert(true);
                setMarketFormData({
                  title: "",
                  price: "",
                  email: "",
                  phone_number: "",
                  main_category: "",
                  sub_category: "",
                  year: "",
                  color: "false",
                  condition: "",
                  anonymous: "",
                  description: "",
                  place: "",
                  images:[]
                });
                setSend(false);
              }, 100);
            })
          } catch (error) {
            console.log("errorBusiness>>", error);
          }
        }
      };
      const handleCategoryChange = (e) => {
        const selectedMainCategory = e.target.value;
        setSelectedMainCategoryID(selectedMainCategory);
        setMarketFormData({
          ...marketFormData,
          main_category: selectedMainCategory,
        });
    
        // Update the sub-category selection based on the selected main category
        const selectedSubCategory = setSelectedSubCategoryID(selectedMainCategory);
        setSelectedSubCategoryID(selectedSubCategory);
    
        handleChange(e);
      };
      const handleSubCategoryChange = (e) => {
        setSelectedSubCategoryID(e.target.value);
        setMarketFormData({ ...marketFormData, category: e.target.value });
        handleChange(e);
      };
    
      const handleImageDrop = async (acceptedFiles) => {
        const editedImages = [];
      
        for (const file of acceptedFiles) {
          const editedImage = await convertToWebP(file);
          editedImages.push(editedImage);
        }
      
        setMarketFormData({
          ...marketFormData,
          images: [...marketFormData?.images, ...editedImages],
        });
      };
      const convertToWebP = (file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
      
          reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
      
            img.onload = () => {
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
      
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
              // Convert the image to WebP
              canvas.toBlob(
                (blob) => {
                  const webpFile = new File([blob], file.name.replace(/\.[^/.]+$/, '.webp'), {
                    type: 'image/webp',
                    lastModified: Date.now(),
                  });
      
                  resolve(webpFile);
                },
                'image/webp',
                0.8 // Quality parameter (adjust as needed)
              );
            };
          };
      
          reader.readAsDataURL(file);
        });
      };
      const handleRemoveImage = (index) => {
        const updatedImages = [...marketFormData.images];
        updatedImages.splice(index, 1);
        setMarketFormData({
          ...marketFormData,
          images: updatedImages,
        });
      };
    
    return (
        <div className={`${style.registerFormDiv}`}>
        <form>
          <div className={`w-100 ${style.uploadImageDiv}`}>
            <Dropzone onDrop={handleImageDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className={style.postHousingUploadImage}>
                    <LazyLoadImage src={require("../../assets/images/uploadImage.png")} alt="uuploadIage" />
                    <p>Upload Your Images</p>
                  </div>
                </div>
              )}
            </Dropzone>
            <div className={style.imageContainerDiv}>
              {marketFormData?.images?.map((image, index) => (
                <div key={image.name} className={style.imageContainer}>
                  <LazyLoadImage
                    src={URL.createObjectURL(image)}
                    // className={style.image}
                    alt=""
                  />
                  <button
                    className={style.removeButton}
                    onClick={() => handleRemoveImage(index)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {showImageWarn && (
            <p className={style.required}>Image is required</p>
          )}
          <select
            name="main_category"
            id="main_category"
            value={marketFormData.main_category}
            // onChange={handleChange}
            className={`w-100 ${style.dropDownMain}`}
            onChange={handleCategoryChange}
          >
            <option value="">Main Category</option>
            {category?.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {showMainCategoryWarn && (
            <p className={style.required}>main category is required</p>
          )}
  
          {marketFormData.main_category && (
            <select
              name="category"
              id="category"
              value={marketFormData.category}
              onChange={handleSubCategoryChange}
              className={`w-100 ${style.dropDownMain}`}
            >
              <option value="">Sub Category</option>
              {subCategory?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          )}
          {marketFormData.main_category && showCategoryWarn && (
            <p className={style.required}>sub category is required</p>
          )}
  
          {marketFormData?.category && marketFormData?.main_category && (
            <select
              name="sub_category"
              id="sub_category"
              value={marketFormData.sub_category}
              onChange={handleChange}
              className={`w-100 ${style.dropDownMain}`}
            >
              <option value="">Type</option>
              {model?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          )}
          {marketFormData.category &&
            marketFormData.main_category &&
            showSubCategoryWarn && (
              <p className={style.required}> Type is required</p>
            )}
  
          <input
            className={`w-100`}
            name="title"
            type="text"
            placeholder="Title"
            value={marketFormData.title}
            onChange={handleChange}
          />
          {showTitleWarn && (
            <p className={style.required}>Title is required</p>
          )}
  
          {/* <div className={`${style.typeField} ${style.requiredClass}`}>
            <input
              type="radio"
              id="lookingFor"
              name="accomodation-rent"
              onChange={() => setLooking(1)}
            />
            <label className="px-2" htmlFor="lookingFor">
              {t("For buy")}
            </label>
          </div> */}
          {/* <div className={`${style.typeField} ${style.requiredClass}`}>
            <input
              type="radio"
              id="rent"
              name="accomodation-rent"
              onChange={() => setLooking(2)}
            />
            <label className="px-2" htmlFor="rent">
              {t("For sale")}
            </label>
          </div> */}
          {/* {showLooking && (
            <p className={style.required}>
              {t("Looking for sale or buy is required")}
            </p>
          )} */}
  
          <input
            className={`w-100`}
            name="price"
            type="text"
            placeholder="Price"
            value={marketFormData.price}
            onChange={handleChange}
          />
  
          <select
            name="year"
            id="year"
            value={marketFormData.year}
            onChange={handleChange}
            className={`w-100 ${style.dropDownMain}`}
          >
            <option value="">Year</option>
            {year?.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {/* {showLocationWarn && (
            <p className={style.required}>year is required</p>
          )} */}
  
          <select
            name="color"
            id="color"
            value={marketFormData.color}
            onChange={handleChange}
            className={`w-100 ${style.dropDownMain}`}
          >
            <option value="">Color</option>
            {color?.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {showLocationWarn && (
            <p className={style.required}>Location is required</p>
          )}
  
          <select
            id="condition"
            name="condition"
            value={marketFormData.condition}
            onChange={handleChange}
            className={`w-100 ${style.dropDownMain}`}
          >
            <option value="">Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
  
          {/* <div className={`d-flex w-100`}> */}
          {city && (
            <select
              name="place"
              id="place"
              value={marketFormData.place}
              onChange={handleChange}
              className={`w-100 ${style.dropDownMain}`}
            >
              <option value="">Place</option>
              {city?.map((item) => {
                return (
                  <option key={item?.city} value={item?.city}>
                    {item?.city}
                  </option>
                );
              })}
            </select>
          )}
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={marketFormData.email}
            placeholder="Email"
            className={`w-100`}
          />
  
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            onChange={handleChange}
            value={marketFormData.phone_number}
            placeholder="Phone number"
            className={`w-100`}
          />
          {requireWarn && (
            <p className={style.required}>
              Please fill phone number or email address
            </p>
          )}
  
          <MarketPlacePostOption
            handleChange={handleChange}
            value={marketFormData.points}
            marketFormData={marketFormData}
            setMarketFormData={marketFormData}
          />
  
          <textarea
            className={style.textArea}
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={marketFormData.description}
          ></textarea>
          {descriptionWarning && (
            <p className={style.required}>Description is required</p>
          )}
        </form>
        <div className="d-flex justify-content-end align-items-center">
          {/* <div className={`w-50 ${style.checkboxDivPost}`}>
            <input
              id="remember"
              name="anonymous"
              type="checkbox"
              className={`col-1`}
              onClick={anonymousClick}
            />
            <label htmlFor="remember" className="col-11">
              {t("Anonymous post")}
            </label>
          </div> */}
          <button className={`${style.btn}`} onClick={handleSubmit}>
            Create
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
    )
}

export default ProductForm
