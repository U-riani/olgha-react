import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import OpenImage from "./OpenImage";

const MainDetails = () => {
  const mainDetailsData = {
    main1: [
      {
        id: 1,
        src: require(`../images/main-1/1.jpg`),
      },
      {
        id: 2,
        src: require(`../images/main-1/2.jpg`),
      },
      {
        id: 3,
        src: require(`../images/main-1/3.jpg`),
      },
      {
        id: 4,
        src: require(`../images/main-1/4.jpg`),
      },
      {
        id: 5,
        src: require(`../images/main-1/5.jpg`),
      },
      {
        id: 6,
        src: require(`../images/main-1/6.jpg`),
      },
      {
        id: 7,
        src: require(`../images/main-1/7.jpg`),
      },
      {
        id: 8,
        src: require(`../images/main-1/8.jpg`),
      },
      {
        id: 9,
        src: require(`../images/main-1/9.jpg`),
      },
      {
        id: 10,
        src: require(`../images/main-1/10.jpg`),
      },
    ],
    main2: [
      {
        id: 1,
        src: require(`../images/main-2/1.jpg`),
      },
      {
        id: 2,
        src: require(`../images/main-2/2.jpg`),
      },
      {
        id: 3,
        src: require(`../images/main-2/3.jpg`),
      },
      {
        id: 4,
        src: require(`../images/main-2/4.jpg`),
      },
      {
        id: 5,
        src: require(`../images/main-2/5.jpg`),
      },
      {
        id: 6,
        src: require(`../images/main-2/6.jpg`),
      },
      {
        id: 7,
        src: require(`../images/main-2/7.jpg`),
      },
      {
        id: 8,
        src: require(`../images/main-2/8.jpg`),
      },
      {
        id: 9,
        src: require(`../images/main-2/9.jpg`),
      },
      {
        id: 10,
        src: require(`../images/main-2/10.jpg`),
      },
    ],
    main3: [
      {
        id: 1,
        src: require(`../images/main-3/1.jpg`),
      },
      {
        id: 2,
        src: require(`../images/main-3/2.jpg`),
      },
      {
        id: 3,
        src: require(`../images/main-3/3.jpg`),
      },
      {
        id: 4,
        src: require(`../images/main-3/4.jpg`),
      },
      {
        id: 5,
        src: require(`../images/main-3/5.jpg`),
      },
      {
        id: 6,
        src: require(`../images/main-3/6.jpg`),
      },
      {
        id: 7,
        src: require(`../images/main-3/7.jpg`),
      },
      {
        id: 8,
        src: require(`../images/main-3/8.jpg`),
      },
      {
        id: 9,
        src: require(`../images/main-3/9.jpg`),
      },
      {
        id: 10,
        src: require(`../images/main-3/10.jpg`),
      },
    ],
    main4: [
      {
        id: 1,
        src: require(`../images/main-4/1.jpg`),
      },
      {
        id: 2,
        src: require(`../images/main-4/2.jpg`),
      },
      {
        id: 3,
        src: require(`../images/main-4/3.jpg`),
      },
      {
        id: 4,
        src: require(`../images/main-4/4.jpg`),
      },
      {
        id: 5,
        src: require(`../images/main-4/5.jpg`),
      },
      {
        id: 6,
        src: require(`../images/main-4/6.jpg`),
      },
      {
        id: 7,
        src: require(`../images/main-4/7.jpg`),
      },
      {
        id: 8,
        src: require(`../images/main-4/8.jpg`),
      },
      {
        id: 9,
        src: require(`../images/main-4/9.jpg`),
      },
      {
        id: 10,
        src: require(`../images/main-4/10.jpg`),
      },
    ],
    main5: [
      {
        id: 1,
        src: require(`../images/main-5/1.jpg`),
      },
      {
        id: 2,
        src: require(`../images/main-5/2.jpg`),
      },
      {
        id: 3,
        src: require(`../images/main-5/3.jpg`),
      },
      {
        id: 4,
        src: require(`../images/main-5/4.jpg`),
      },
      {
        id: 5,
        src: require(`../images/main-5/5.jpg`),
      },
      {
        id: 6,
        src: require(`../images/main-5/6.jpg`),
      },
      {
        id: 7,
        src: require(`../images/main-5/7.jpg`),
      },
      {
        id: 8,
        src: require(`../images/main-5/8.jpg`),
      },
      {
        id: 9,
        src: require(`../images/main-5/9.jpg`),
      },
      {
        id: 10,
        src: require(`../images/main-5/10.jpg`),
      },
    ],
    main6: [
      {
        id: 1,
        src: require(`../images/main-6/1.jpg`),
      },
      {
        id: 2,
        src: require(`../images/main-6/2.jpg`),
      },
      {
        id: 3,
        src: require(`../images/main-6/3.jpg`),
      },
      {
        id: 4,
        src: require(`../images/main-6/4.jpg`),
      },
      {
        id: 5,
        src: require(`../images/main-6/5.jpg`),
      },
      {
        id: 6,
        src: require(`../images/main-6/6.jpg`),
      },
      {
        id: 7,
        src: require(`../images/main-6/7.jpg`),
      },
      {
        id: 8,
        src: require(`../images/main-6/8.jpg`),
      },
      {
        id: 9,
        src: require(`../images/main-6/9.jpg`),
      },
      {
        id: 10,
        src: require(`../images/main-6/10.jpg`),
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [newSrc, setNewSrc] = useState('');

  const { id } = useParams();

  const checkIfOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      document.querySelector('.make-background-blur').classList.remove('blur-background');
    } else {
      setIsOpen(true);
      document.querySelector('.make-background-blur').classList.add('blur-background');
    }
  };



  const imageSrc = (src) => {
    setNewSrc(src)
  }

  return (
    <Container fluid>
      <Row className="justify-content-center make-background-blur">
        {mainDetailsData[id].map((data) => {
          return (
            <Col
              key={data.id}
              sm={4}
              className="px-1 my-1"
              onClick={checkIfOpen}
            >
              <Image
                src={data.src}
                className="w-100 h-100 main-details-image"
                onClick={() => imageSrc(data.src)}
              />
            </Col>
          );
        })}
      </Row>
      {isOpen && <OpenImage checkIfOpen={checkIfOpen} imageSrc={newSrc} />}
    </Container>
  );
};

export default MainDetails;
