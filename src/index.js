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
 /**
     * Cevap; Bu kodla ilgili sorun, setTimeout işlevinde ayarlanan gecikme süresinin (50ms) çok kısa olmasıdır,
     *  bu da setState işlevinin çok sık çağrılmasına neden olarak bileşenin gereksiz yere yeniden oluşturulmasına ve performansın düşmesine neden olur.
     *  ** Asıl sorun ise kullanıcının inputa giriş yaparken yeterli süresinin olmamasıdır. Dolayısıyla bu senaryoda
     *  settimeout işlevi için 250 ms vermek daha doğru olacaktır. Çünkü girilen değeri setstate ile set ederken kullanıcıya 50 ms verirsek istediği değeri girmesi için yeterli süreye sahip olmaz.
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      });
    }, 250);
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
