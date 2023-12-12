import { useState, useEffect } from "react";
import axios from 'axios';
// import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/CategoryRedux';

function useAxios(url) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // const { t, i18n } = useTranslation();

  const token = localStorage.getItem("muslim_comunity_token");

  const baseUrl = `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}`;

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));

      try {
        const response = await axios.get(`${baseUrl}/${url}`, {
          headers: { "Authorization": `Bearer ${token}` },
          cancelToken: new axios.CancelToken((c) => (setData.cancel = c)),
        });

        setData(response.data);
        dispatch(setLoading(false));
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error);
          dispatch(setLoading(false));
        }
      }
    };

    fetchData();
    return () => {
      if (setData.cancel) {
        setData.cancel("Request canceled by cleanup");
      }
    };
  }, [url, baseUrl, token, dispatch]);

  return [data, setData];
}

export default useAxios;
