import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://ox1bm.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data
      });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map((products) => {
            return (
              <Col sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={products.imageURL}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{products.name}</CardTitle>

                    <CardText>{products.description}</CardText>
                    <Button>Add to Card</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
