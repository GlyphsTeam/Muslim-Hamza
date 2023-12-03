import React, {useState} from 'react';
import Card from './ShopCard';
import Pagination from '../common/Pagination';
import style from '../../assets/style/house/housingCard.module.scss';
import shopStyle from '../../assets/style/shop/shopPage.module.scss';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/CategoryRedux';
import { setSubCategoryId } from '../../redux/CategoryRedux';
import { setCategoryTitle } from '../../redux/CategoryRedux';
import { setSubCategoryTitle } from '../../redux/CategoryRedux';
import {useNavigate} from "react-router-dom";
import Map from '../common/Map'

function HouseSection({limit, mainidC,categoryData, previousPage, nextPage, total, setActiveIndex, activeIndex, page, setPage, scrollPagination,categoryState, setCategoryState}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [isShop, setIsShop] = useState(true);
  const [isMap, setIsMap] = useState(false);

  const removeFilter = (e) => {
    if(e === 'main'){
      setCategoryState({...categoryState, activeFilterTitle:'', mainId:'', activeSubFilterTitle:'', subId:''})
      dispatch(setCategoryId(''));
      dispatch(setSubCategoryId(''));
      dispatch(setCategoryTitle(''));
      dispatch(setSubCategoryTitle(''));
      localStorage.removeItem('mainCategoryId');
      localStorage.removeItem('subCategoryId');
      localStorage.removeItem('mainCategoryTitle');
      localStorage.removeItem('subCategoryTitle');
      navigate('/Category');
  }else if(e === 'sub'){
      setCategoryState({...categoryState, activeSubFilterTitle:'', subId:''})
      dispatch(setSubCategoryId(''));
      dispatch(setSubCategoryTitle(''));
      localStorage.removeItem('subCategoryId');
      localStorage.removeItem('subCategoryTitle');
  }
  }

  const menuAction = () => {
      setIsShop(!isShop);
      setIsMap(!isMap);
  }

  return (
    <>
       <div className={`row `}>
        <div className={`col-6 ${shopStyle.menu} ${isShop? shopStyle.activeMenue : '' }`} onClick={() => menuAction()}>
          <h2>Shops</h2>
        </div>
        <div className={`col-6 ${shopStyle.menu} ${isMap? shopStyle.activeMenue : '' }`} onClick={() => menuAction()}>
          <h2>Map</h2>
        </div>

       </div>
       <div className={`row `}>
        {categoryState.activeFilterTitle && (
          <h3 className={style.filterResult}>{categoryState.activeFilterTitle} <i className="far fa-times-circle" onClick={()=> removeFilter('main')}></i></h3>
        )}
        {categoryState.activeSubFilterTitle && (
          <h3 className={style.filterResult}>{categoryState.activeSubFilterTitle} <i className="far fa-times-circle" onClick={()=> removeFilter('sub')}></i></h3>
        )}

    </div>
    <div className={`row `}>

        {isShop ? 
        categoryData?.map((item, index)=>
        
        <Card mainidC={mainidC} navUrl={`/Shop-Profile/${item.id}/${mainidC}`} key={index} isFavorite = {item.favorites} categoryData = {item} />
        )
        :
        <Map data = {categoryData} height='600px' />
        }

    </div>

            {limit < total && (
                <Pagination
                    totalPosts={total}
                    postsPerPage={limit}
                    setCurrentPage={setPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    currentPage={page}
                    setActiveIndex={setActiveIndex}
                    activeIndex={activeIndex}
                    scrollPagination={scrollPagination}
                />
            )
            }
    </>
  )
}

export default HouseSection