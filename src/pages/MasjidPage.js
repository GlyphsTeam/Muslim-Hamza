import React, { useState } from 'react'
import MasjidContainer from '../components/masjidComponent/MasjidContainer'
import useAxios from "../hooks/useAxios";

function MasjidPage() {
  const [masjidKeyword , setMasjidKeyword] = useState('');
  const url = `masjid/azan`;
  // const url = `masjid/azan`;
  const [Data] = useAxios(url);
  const findMasjidData = Data?.data;
  return (
    <div className='container pt-4'>
      <MasjidContainer findMasjidData={findMasjidData} masjidKeyword = {masjidKeyword} setMasjidKeyword={setMasjidKeyword} />
    </div>
  )
}

export default MasjidPage