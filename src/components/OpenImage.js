import { Image } from "react-bootstrap";
import { useState } from "react";

const OpenImage = ({ checkIfOpen, imageSrc }) => {
  const [checkImage, setCheckImage] = useState(true);

  const handleClick = () => {
    if (checkImage) {
      setCheckImage(false);
      document.querySelector('.make-background-blur').classList.remove('blur-background');
    } else {
      setCheckImage(true);
      document.querySelector('.make-background-blur').add('blur-background');
    }
  };



  return (
    <div
      onClick={handleClick}
      className="open-image-fullscreen-container h-100"
    >
      <div
        className="open-image-container h-100 w-100 d-flex justify-content-center"
        onClick={() => checkIfOpen(checkImage)}
      >
        {/* <div className="blur-background">c</div> */}
        <Image src={imageSrc} fluid className="open-image h-100" />
      </div>
    </div>
  );
};

export default OpenImage;
