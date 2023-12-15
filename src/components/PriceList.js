import { Col, Container, Image, Row } from "react-bootstrap";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const PriceList = () => {
  const caruselImages = [
    {
      id: 1,
      src: require(`../images/main-1/1.jpg`),
      packet: "standart",
      price: "100",
      service: ["photoshoot"],
    },
    {
      id: 2,
      src: require(`../images/main-1/2.jpg`),
      packet: "premium",
      price: "150",
      service: ["photoshoot", "makeup"],
    },
    {
      id: 3,
      src: require(`../images/main-1/3.jpg`),
      packet: "gadagyvebi bolomde",
      price: "200",
      service: ["photoshoot", "makeup", "clothe artist", "qututuebis masazi"],
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container fluid="sm">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {caruselImages.map((data) => {
          return (
            <Carousel.Item key={data.id} className="carousel-itm">
              <Image
                src={data.src}
                text="First slide"
                className="carousel-image"
              />
              <Carousel.Caption className="d-flex priceList-inner-texts">
                <h3 className="price-background">{data.packet}</h3>
                <p className="price-background">{data.price} GEL</p>
                {data.service.map((service) => {
                  return (
                    <p className="price-background">{service}</p>
                  )
                })}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default PriceList;
