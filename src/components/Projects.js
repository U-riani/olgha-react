import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      src: require("../images/projects/1.jpg"),
      link: "projects/project1",
      title: "Beauty Center",
    },
    {
      id: 2,
      src: require("../images/projects/2.jpg"),
      link: "projects/project2",
      title: "DMS Beauty Box",
    },
  ];

  return (
    <Container fluid>
      <Row className="my-4">
        {projectsData.map((data) => {
          return (
            <Col sm={6} key={data.id} className="my-1 projects ">
              <Link to={data.link}>
                <div className="image-container">
                  <Image
                    src={data.src}
                    className="w-100 h-100 main-details-image "
                  />
                  <div className="image-title">
                    <h2 className="text-center image-h2">{data.title}</h2>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
