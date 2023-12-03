import Accordion from 'react-bootstrap/Accordion';
import style from '../../assets/style/common/filteredPage.module.css'
import { useLocation } from 'react-router-dom';

function AccordionComponent({title, id, subCategory, subData, index, filerAction, activeFilter, filterType, categoryState}) {
  const urlPath = useLocation();
  const pathName = urlPath.pathname;

  return (
    <>
    {filterType === 'category' ?

    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey={index}>
        <Accordion.Header><p className={`${categoryState.activeFilterTitle === title ? style.activeFilter : ""} ${style.categoryTitleFilter}`} onClick={() => filerAction(title, id)}>{title}</p></Accordion.Header>
        <Accordion.Body className={pathName === "/Jobs" || pathName === "/Housing"  ? "service-accordion" : ""}>
            {subData?.map((subTitle, index) =>
                <h4  className={`${categoryState.activeSubFilterTitle === subTitle.name ? style.activeFilter : ""} ${style.subFilterTitle}`} key={index} onClick={() => filerAction(title, subTitle.main_id, subTitle.name, subTitle.id)}>{subTitle.name}</h4>
            )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    :

    <Accordion defaultActiveKey="">
    <Accordion.Item eventKey={index}>
      <Accordion.Header className={style.accordionHeader}>{title}</Accordion.Header>
      <Accordion.Body className={pathName === "/Jobs" || pathName === "/Housing"  ? "service-accordion" : ""}>
          {subData?.map((subTitle, index) =>
              <h4  className={`${activeFilter === subTitle.value ? style.activeFilter : ""} ${style.subFilterTitle}`} key={index} onClick={() => filerAction(title, subTitle.value)}>{subTitle.name}</h4>
          )}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>

    }
</>
  );
}

export default AccordionComponent;