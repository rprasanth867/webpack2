import React from 'react';
import gif from '../../assets/images/goku gif.gif';
import jpg from '../../assets/images/goku-dragon-ball-kai-art.jpg';
import png from '../../assets/images/goten.png';
import Svg from '../../assets/images/webpack.svg';

export function DisplayImages() {

  return (
    <section className="images-wrapper" id="images-section">
      <img className="square-200" src={jpg} />
      <img className="square-200 obj-fit" src={png} />
      <img className="square-200" src={Svg} />
      <img className="square-200" src={gif} />
    </section>
  );
}
