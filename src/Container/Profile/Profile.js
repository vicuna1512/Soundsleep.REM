import React, { Component } from "react";
import Cards from "components/Cards/Cards";
import CardHeader from "components/Cards/CardHeader";
import CardFooter from "components/Cards/CardFooter";
import CardBody from "components/Cards/CardBody";
import { EvStationSharp } from "@material-ui/icons";

class Profile extends Component {
  state = {
    user: { name: "Evans", age: "27", drugLevel: "33", sleepDuration: "11hrs" },
    score: "9.8",
  };

  render() {
    return (
      <div>
        <Cards>
          <CardHeader>{this.state.user.name}</CardHeader>
          <CardBody user = {this.state.user}>
           
          </CardBody>
          <CardFooter>{this.state.score}</CardFooter>
        </Cards>
      </div>
    );
  }
}

export default Profile;
