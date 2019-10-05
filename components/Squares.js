import React from "react";
import ReactDOM from "react-dom";
import NumberFormat from "react-number-format";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Square extends React.Component {
  render() {
    return (
      <div className="square">
        <div className = 'teritory-title'>teritory</div>
        {/* {this.props.idd} */}
        {this.props.num_factories + " "}
        <ButtonGroup className="mr_inline">
          <Button variant="secondary" size="sm" onClick={this.props.fx[0]}>
            +
          </Button>
          <Button variant="secondary" size="sm" onClick={this.props.fx[1]}>
            -
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Square;
