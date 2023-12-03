import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown({title, subData}) {
  return (
    <DropdownButton id="dropdown-item-button" title={title}>
      {subData?.map((subTitle, index) =>
            <h4 key={index}>{subTitle}</h4>
      )}
    </DropdownButton>
  );
}

export default DropDown;