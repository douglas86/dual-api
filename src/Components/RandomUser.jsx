import React from "react";
import Users from "./API/Users";
import Weather from "./API/WeatherAPI";
import { Container, Row, Col } from "react-bootstrap";

const RandomUser = () => {
  const [users] = Users();
  return (
    <div style={{ backgroundColor: "#6ddced" }} className="Randomuser">
      <Container>
        <h1>This is a random user</h1>
        {users.map((user) => (
          <div key={user.login.uuid}>
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>
                  {user.name.first} {user.name.last}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={user.picture.large} alt="" />
                <p>Gender: {user.gender}</p>
              </Col>
              <Col>
                <p>City: {user.location.city}</p>
                <Weather props={user} />
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default RandomUser;
