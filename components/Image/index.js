import React from 'react';

const Image = ({ src, alt, title }) => <div className="imageContainer">
  <div className="center">
    <img
      src={src}
      alt={alt}
    />
  </div>
  <div className="center">
    {title}
  </div>
</div>

export default Image;