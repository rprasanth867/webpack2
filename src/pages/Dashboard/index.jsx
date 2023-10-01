import React from 'react';
import Details from '../../components/Details';
import DisplayImages from '../../components/DisplayImages';

export default function Dashboard() {
  return (
    <div className='detials-images-wrapper'>
      <Details />
      <DisplayImages />
    </div>
  );
}
