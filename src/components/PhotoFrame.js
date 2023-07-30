import React from 'react';

export const PhotoFrame = ({url, title}) => {
   <div className="photograme">
   <img src={url} alt={title} />
   <div className="caption">{title}</div>
   </div>
};
