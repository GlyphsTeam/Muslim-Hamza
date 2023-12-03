import style from '../../assets/style/shopProfile/shopProfile.module.css'

function SocialMedia({ showStoreData }) {

  return (
    <>
      {(showStoreData?.facebook_link || showStoreData?.twitter_link || showStoreData?.instagram_link) && (
    <div className={`${style.socialMediaSection}`}>
          <div className={`${style.socialMediaIcon} col-2 mt-3`}>
            {showStoreData?.twitter_link && (
              <a href={showStoreData?.twitter_link} target="blank" >
                <i className="fab fa-twitter"></i>
              </a>
            )}

            {showStoreData?.facebook_link && (
              <a href={showStoreData?.facebook_link} target="blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            )}

            {showStoreData?.instagram_link && (
              <a href={showStoreData?.instagram_link} target="blank">
                <i className="fab fa-instagram"></i>
              </a>
            )}
          </div>
      
    </div>
)}
    </>
  );
}
export default SocialMedia;
