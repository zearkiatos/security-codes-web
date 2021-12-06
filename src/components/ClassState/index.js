import React, { Component } from "react";
import Loading from "../Loading";

class ClassState extends Component {
  FAKE_LOADING_TIMER = 3000;
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false
    };
  }

  onClickHandler = (error) => {
    this.setState({
      error: !error,
      loading: true
    });
  };

  componentDidUpdate() {
    const { loading } = this.state;
    loading &&
      setTimeout(() => {
        this.setState({
            loading: false
        })
      }, this.FAKE_LOADING_TIMER);
  }
  render() {
    const { name } = this.props;
    const { error, loading } = this.state;
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Please, write the security code.</p>
        {error && <p>The code was wrong</p>}
        {loading && <Loading />}
        <input placeholder="Security Code" />
        <button onClick={() => this.onClickHandler(error)}>Check</button>
      </div>
    );
  }
}

export default ClassState;
