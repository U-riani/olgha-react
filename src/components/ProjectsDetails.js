import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import OpenImage from "./OpenImage";

const ProjectsDetails = () => {
  const projectsDetailsData = {
    project1: [
      {
        id: 1,
        src: require("../images/project-1/1.jpg"),
      },
      {
        id: 2,
        src: require("../images/project-1/2.jpg"),
      },
      {
        id: 3,
        src: require("../images/project-1/3.jpg"),
      },
      {
        id: 4,
        src: require("../images/project-1/4.jpg"),
      },
      {
        id: 5,
        src: require("../images/project-1/5.jpg"),
      },
      {
        id: 6,
        src: require("../images/project-1/6.jpg"),
      },
      {
        id: 7,
        src: require("../images/project-1/7.jpg"),
      },
      {
        id: 8,
        src: require("../images/project-1/8.jpg"),
      },
      {
        id: 9,
        src: require("../images/project-1/9.jpg"),
      },
      {
        id: 10,
        src: require("../images/project-1/10.jpg"),
      },
      {
        id: 11,
        src: require("../images/project-1/11.jpg"),
      },
      {
        id: 12,
        src: require("../images/project-1/12.jpg"),
      },
      {
        id: 13,
        src: require("../images/project-1/13.jpg"),
      },
      {
        id: 14,
        src: require("../images/project-1/14.jpg"),
      },
      {
        id: 15,
        src: require("../images/project-1/15.jpg"),
      },
    ],
    project2: [
      {
        id: 1,
        src: require("../images/project-2/1.jpg"),
      },
      {
        id: 2,
        src: require("../images/project-2/2.jpg"),
      },
      {
        id: 3,
        src: require("../images/project-2/3.jpg"),
      },
      {
        id: 4,
        src: require("../images/project-2/4.jpg"),
      },
      {
        id: 5,
        src: require("../images/project-2/5.jpg"),
      },
      {
        id: 6,
        src: require("../images/project-2/6.jpg"),
      },
      {
        id: 7,
        src: require("../images/project-2/7.jpg"),
      },
      {
        id: 8,
        src: require("../images/project-2/8.jpg"),
      },
      {
        id: 9,
        src: require("../images/project-2/9.jpg"),
      },
      {
        id: 10,
        src: require("../images/project-2/10.jpg"),
      },
    ],
  };

  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [newSrc, setNewSrc] = useState("");

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
    setNewSrc(src);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center make-background-blur">
        {projectsDetailsData[id].map((data) => {
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

export default ProjectsDetails;
