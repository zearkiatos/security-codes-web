import React, { Component } from "react";
import Loading from "../Loading";
import config from "../../config";

class ClassState extends Component {
  FAKE_LOADING_TIMER = 3000;
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: ""
    };
  }

  onClickHandler = () => {
    this.setState({
      loading: true
    });
  };

  onChangeHandler = (event) => {
    this.setState({
      error: false,
      value: event.target.value
    });
  };

  componentDidUpdate() {
    const { loading, value } = this.state;
    loading &&
      setTimeout(() => {
        if (config.SECURITY_CODE === value) {
          this.setState({
            loading: false
          });
        } else {
          this.setState({
            error: true,
            loading: false
          });
        }
      }, this.FAKE_LOADING_TIMER);
  }
  render() {
    const { name } = this.props;
    const { error, loading, value } = this.state;
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Please, write the security code.</p>
        {error && <p>The code was wrong</p>}
        {loading && <Loading />}
        <input
          placeholder="Security Code"
          value={value}
          onChange={this.onChangeHandler}
        />
        <button onClick={this.onClickHandler}>Check</button>
      </div>
    );
  }
}

export default ClassState;
