import React from 'react';

export const PhotoFrame = (data) => {
  return (
    <div className="photoframe">
      {console.log(data)}
      <img src={data.data.url} />
      <div className='caption'>{data.data.title}</div>
    </div>
  );
};
