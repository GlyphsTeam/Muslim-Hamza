import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

function useFetch(url, formData, send) {
  const [Res, setRes] = useState([]);
  const [Err, setErr] = useState([]);
  const { t, i18n } = useTranslation();

  const token = localStorage.getItem("muslim_comunity_token");
  const baseUrl = token? `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}` : `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}`;

  useEffect(() => {
    if(send){
     try {
        fetch(`${baseUrl}/${url}`, {
            headers: { 'Authorization': `Bearer ${token}` , 'Accept': 'application/json' },
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then((data) => {
            setRes(data)
          }
          )
      } 
      catch (error) {
        setRes(error)
      }
    }
    }, [url, formData, send]);
 
    return [Res , setRes, setErr, Err];
}
  

export default useFetch;
