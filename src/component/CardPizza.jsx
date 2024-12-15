import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const CardPizza = ({name, price, ingredients}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Pizza{name}</Card.Title>
          <Card.Text>
            Ingredientes: {ingredients}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          
          <ListGroup.Item>Precio:${price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button>Ver más</Button>
            <Button>Añadir</Button>

          
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;
