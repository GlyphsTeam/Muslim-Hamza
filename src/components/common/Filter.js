import Accordion from './Accordion';
import style from '../../assets/style/common/filteredPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/CategoryRedux';
import { setSubCategoryId } from '../../redux/CategoryRedux';
import { setCategoryTitle } from '../../redux/CategoryRedux';
import { setSubCategoryTitle } from '../../redux/CategoryRedux';
import { useNavigate } from "react-router-dom";
import { marketState, setCategoryState , setActiveFilter, setCity, setGender ,setPage, setType } from '../../redux/Market';
function Filter({filterType, filterTitle }) {
  const dispatch = useDispatch();
  const marketStateList = useSelector(marketState);


  const navigate = useNavigate()


  // let url = `filter/${filterType}`;
  // const [Data] = useAxios(url);

  const filerAction = (mainId, subId) => {
    if (filterType === 'housing') {
      switch (mainId) {
        case 'Type':
          if (subId === marketStateList.market.type) {
            dispatch(setType(''))
            dispatch(setActiveFilter(''));
          } else {
            dispatch(setType(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        case 'Gender':
          if (subId === marketStateList.market.gender) {
            dispatch(setGender(''))
            dispatch(setActiveFilter(''));
          } else {
            dispatch(setGender(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        case 'City':
          if (subId === marketStateList.market.city) {
            dispatch(setCity(''))
            dispatch(setActiveFilter(''));
          } else {
            dispatch(setCity(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        default:
          break;
      }
    }
    if (filterType === 'job') {
      switch (mainId) {
        case 'Type':
          if (subId === marketStateList.market.type) {
            dispatch(setType(''))
            dispatch(setActiveFilter(''));
          } else {
            dispatch(setType(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        case 'City':
          if (subId === marketStateList.market.city) {
            dispatch(setCity(''))
            dispatch(setActiveFilter(''));
          } else {
            dispatch(setCity(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        default:
          break;
      }
    }
  }

  const filerActionCategory = (mainTitle, main_Id, subTitle, sub_Id) => {

    if (subTitle) {

      if (marketStateList.market.categoryState.activeSubFilterTitle === subTitle) {
        dispatch(setCategoryState({ ...marketStateList.market.categoryState, activeFilterTitle: mainTitle, mainId: main_Id, activeSubFilterTitle: '', subId: '' }));
        dispatch(setCategoryId(main_Id));
        dispatch(setSubCategoryId(''));
        dispatch(setCategoryTitle(mainTitle));
        dispatch(setSubCategoryTitle(''));
        localStorage.setItem('mainCategoryId', main_Id);
        localStorage.removeItem('subCategoryId');
        localStorage.setItem('mainCategoryTitle', mainTitle);
        localStorage.removeItem('subCategortTitle');
        navigate(`/stores/${main_Id}/${sub_Id}`);
      } else {
        dispatch(setCategoryState({ ...marketStateList.market.categoryState, activeFilterTitle: mainTitle, mainId: main_Id, activeSubFilterTitle: subTitle, subId: sub_Id }));
        dispatch(setCategoryId(main_Id));
        dispatch(setSubCategoryId(sub_Id));
        dispatch(setCategoryTitle(mainTitle));
        dispatch(setSubCategoryTitle(subTitle));
        localStorage.setItem('mainCategoryId', main_Id);
        localStorage.setItem('subCategoryId', sub_Id);
        localStorage.setItem('mainCategoryTitle', mainTitle);
        localStorage.setItem('subCategoryTitle', subTitle);
        navigate(`/stores/${main_Id}/${sub_Id}`);
      }

    } else {
      if (marketStateList.market.categoryState.activeFilterTitle === mainTitle) {
        dispatch(setCategoryState({ ...marketStateList.market.categoryState, activeFilterTitle: '', mainId: '', activeSubFilterTitle: '', subId: '' }));
        dispatch(setCategoryId(''));
        dispatch(setSubCategoryId(''));
        dispatch(setCategoryTitle(''));
        dispatch(setSubCategoryTitle(''));
        localStorage.removeItem('mainCategoryId');
        localStorage.removeItem('subCategoryId');
        localStorage.removeItem('mainCategoryTitle');
        localStorage.removeItem('subCategoryTitle');
        navigate(`/stores/${main_Id}/${sub_Id}`);
      } else {
        dispatch(setCategoryState({ ...marketStateList.market.categoryState, activeFilterTitle: mainTitle, mainId: main_Id, activeSubFilterTitle: '', subId: '' }));
        dispatch(setCategoryId(main_Id));
        dispatch(setSubCategoryId(''));
        dispatch(setCategoryTitle(mainTitle));
        dispatch(setSubCategoryTitle(''));
        localStorage.setItem('mainCategoryId', main_Id);
        localStorage.setItem('mainCategoryTitle', mainTitle);
        localStorage.removeItem('subCategoryId');
        localStorage.removeItem('subCategoryTitle');
        navigate(`/stores/${main_Id}/${sub_Id}`);
      }
    }

  }


  return (
    <>
      <div className={style.mainFilterDiv}>

        <h1 className={style.filterTitle}>{filterTitle}</h1>

        {/* Accordion */}

        {filterType == 'category' ?

          marketStateList?.market?.marketList?.main?.map((item, index) => (
            <div key={index} className={style.accordionDiv}>
              <Accordion index={index} subCategory={item.categories} title={item.name} id={item.id} subData={item.subtitle} filerAction={filerActionCategory} categoryState={marketStateList.market.categoryState} setCategoryState={setCategoryState} filterType={filterType} />
            </div>
          ))

          :
          marketStateList?.market?.marketList?.main?.map((item, index) => (
            <div key={index} className={style.accordionDiv}>
              <Accordion subCategory={item.categories} index={index} title={item.name} subData={item.subtitle} filerAction={filerAction} activeFilter={marketStateList.market.activeFilter} />
            </div>
          ))

        }

      </div>

    </>
  )
}

export default Filter