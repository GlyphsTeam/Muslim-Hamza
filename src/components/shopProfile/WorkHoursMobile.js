import style from '../../assets/style/shopProfile/workHours.module.css'

function WorkHoursMobile({showStoreData}) {
  return (
    <div className={style.workHoursContainerMobile}>
      <div className={style.workHoursDiv}>  {showStoreData?.worktime?.map((item, index) => (
        <div
          className={`${style.workHoursRight} col-lg-12 col-md-6 col-sm-6`}
          key={index}
        >
          {item.type === "r" ? (
            <p className={`${style.workHoursRightDays} col-4`}>
              {item.day_from} to {item.day_to}
            </p>
          ) : (
            <p className={`${style.workHoursRightDays} col-4`}>
              {item.day_from}
            </p>
          )}
          <p className="col-5">
            {item.start_time} - {item.end_time}
          </p>
          {item.status ? (
            <p className={`col-3 ${style.openWorkingHours}`}>Open</p>
          ) : (
            <p className={`col-3 ${style.closeWorkingHours}`}>Closed</p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default WorkHoursMobile;
