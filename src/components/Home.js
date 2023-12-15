import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import imagesData from "../imagesData.json";

const Home = () => {
  const mainData = [
    {
      id: 1,
      src: require("../images/main/main-1.jpg"),
      link: "main/main1",
    },
    {
      id: 2,
      src: require("../images/main/main-2.jpg"),
      link: "main/main2",
    },
    {
      id: 3,
      src: require("../images/main/main-3.jpg"),
      link: "main/main3",
    },
    {
      id: 4,
      src: require("../images/main/main-4.jpg"),
      link: "main/main4",
    },
    {
      id: 5,
      src: require("../images/main/main-5.jpg"),
      link: "main/main5",
    },
    {
      id: 6,
      src: require("../images/main/main-6.jpg"),
      link: "main/main6",
    },
  ];

  return (
    <Container fluid className="py-4">
      <Row>
        {mainData.map((data) => {
          return (
            <Col sm={4} key={data.id} className="px-1 my-1">
              <Link to={data.link}>
                <Image src={data.src} fluid className="h-100 main-image" />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
