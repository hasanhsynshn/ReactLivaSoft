import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = { search: "" };
  inputChange = event => {
    /**
     * Aşağıdaki mantık hatasını açıklayınız.
     * input a girilen değeri 250ms sonra ekrana yazdırınız
     */

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      });
    }, 50);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputChange} />
        {this.state.search ? <p>Aranan Değer: {this.state.search}</p> : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
