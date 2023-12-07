import Accordion from './AccordionBusiness';
import style from '../../assets/style/common/filteredPage.module.css'
import useAxios from '../../hooks/useAxios';
import { setCategoryId } from '../../redux/CategoryRedux';
import { setSubCategoryId } from '../../redux/CategoryRedux';
import { setCategoryTitle } from '../../redux/CategoryRedux';
import { setSubCategoryTitle } from '../../redux/CategoryRedux';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  jobsReduxState,
  setType, 
  setGender,
  setCity,
  setActiveFilter
} from '../../redux/Job';

function FilterBuiness({filterType, filterTitle, categoryState, setCategoryState }) {
  const dispatch = useDispatch();
  const jobReduxState = useSelector(jobsReduxState);

//call redux data

  const navigate = useNavigate()


  let url = `filter/${filterType}`;
  const [Data] = useAxios(url);
  const filerAction = (mainId, subId) => {
    if(filterType === 'housing'){
      switch(mainId) {
        case 'Type':
          if(subId === jobReduxState.type){
            dispatch(setType(''))
            dispatch(setActiveFilter(''));
          }else{
            dispatch(setType(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        case 'Gender':
          if(subId === jobReduxState.gender){
            dispatch(setGender(''))
            dispatch(setActiveFilter(''));
          }else{
            dispatch(setGender(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        case 'City':
          if(subId === jobReduxState.city){
            dispatch(setCity(''))
            dispatch(setActiveFilter(''));
          }else{
            dispatch(setCity(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        default:
          break;
      }
    }
    if(filterType === 'job'){
      switch(mainId) {
        case 'Type':
          if(subId === jobReduxState.type){
            dispatch(setType(''))
            dispatch(setActiveFilter(''));
          }else{
            dispatch(setType(subId))
            dispatch(setActiveFilter(subId));
          }
          break;
        case 'City':
          if(subId === jobReduxState.city){
            dispatch(setCity(''))
            dispatch(setActiveFilter(''));
          }else{
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

    if(subTitle){

      if(categoryState.activeSubFilterTitle === subTitle){
        setCategoryState({...categoryState,activeFilterTitle: mainTitle, mainId: main_Id,activeSubFilterTitle: '', subId: ''});
        dispatch(setCategoryId(main_Id));
        dispatch(setSubCategoryId(''));
        dispatch(setCategoryTitle(mainTitle));
        dispatch(setSubCategoryTitle(''));
        localStorage.setItem('mainCategoryId', main_Id);
        localStorage.removeItem('subCategoryId');
        localStorage.setItem('mainCategoryTitle', mainTitle);
        localStorage.removeItem('subCategortTitle');
        navigate(`/show-bussines/${main_Id}/${sub_Id}`);
      }else{
        setCategoryState({...categoryState,activeFilterTitle: mainTitle, mainId: main_Id,activeSubFilterTitle: subTitle, subId: sub_Id});
        dispatch(setCategoryId(main_Id));
        dispatch(setSubCategoryId(sub_Id));
        dispatch(setCategoryTitle(mainTitle));
        dispatch(setSubCategoryTitle(subTitle));
        localStorage.setItem('mainCategoryId', main_Id);
        localStorage.setItem('subCategoryId', sub_Id);
        localStorage.setItem('mainCategoryTitle', mainTitle);
        localStorage.setItem('subCategoryTitle', subTitle);
        navigate(`/show-bussines/${main_Id}/${sub_Id}`);
      }

    }else{
      if(categoryState.activeFilterTitle === mainTitle){
        setCategoryState({...categoryState,activeFilterTitle: '', mainId: '',activeSubFilterTitle: '', subId: ''});
        dispatch(setCategoryId(''));
        dispatch(setSubCategoryId(''));
        dispatch(setCategoryTitle(''));
        dispatch(setSubCategoryTitle(''));
        localStorage.removeItem('mainCategoryId');
        localStorage.removeItem('subCategoryId');
        localStorage.removeItem('mainCategoryTitle');
        localStorage.removeItem('subCategoryTitle');
        navigate(`/show-bussines/${main_Id}/${sub_Id}`);
      }else{
        setCategoryState({...categoryState,activeFilterTitle: mainTitle, mainId: main_Id, activeSubFilterTitle:'', subId:''});
        dispatch(setCategoryId(main_Id));
        dispatch(setSubCategoryId(''));
        dispatch(setCategoryTitle(mainTitle));
        dispatch(setSubCategoryTitle(''));
        localStorage.setItem('mainCategoryId', main_Id);
        localStorage.setItem('mainCategoryTitle', mainTitle);
        localStorage.removeItem('subCategoryId');
        localStorage.removeItem('subCategoryTitle');
        navigate(`/show-bussines/${main_Id}/${sub_Id}`);
      }
    }

  }


  return (
    <>
    <div className={style.mainFilterDiv}>

            <h1 className={style.filterTitle}>{filterTitle}</h1>

                {/* Accordion */}

                {filterType === 'category'?
                
               Data?.data?.map((item, index) => (
                       <div key={index} className={style.accordionDiv}>
                        <Accordion index={index} subCategory={item.categories} title={item.title} id = {item.id} subData= {item.subtitle} filerAction = {filerActionCategory} categoryState = {categoryState} setCategoryState = {setCategoryState} filterType = {filterType} />
                       </div>
                    ))
              
                    :
                   Data?.data?.map((item, index) => (
                      <div key={index} className={style.accordionDiv}>
                       <Accordion subCategory={item.categories} index={index} title={item.title} subData= {item.subtitle} filerAction = {filerAction} activeFilter = {jobReduxState.activeFilter} />
                      </div>
                   ))

                    }

    </div>

    </>
  )
}

export default FilterBuiness