import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clickButton from './actions'
import clickButton2 from './actions'
import './App.css';

class App extends Component {
      state = {
        inputValue: ''
      }

      inputChange = event => {
          this.setState({
              inputValue: event.target.value
          })
      }

      limparState = {
          limparValor: ''
      }

      somaChange = e => {
        this.setState({
            limparValor: e.target.value
        })
      }


 render(){
    const {
      clickButton,
      newValue
    } = this.props;

    const {
      clickButton2,
      novoValor
    } = this.props;

    const {inputValue} = this.state;
    const {limparValor} = this.limparState;

    return (
    <div className="App">
        <h1>Oi, Cronos !</h1>
        <p>Aprendendo React com Redux</p>
        <input type='text' 
          onChange={this.inputChange}
          value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)}>Enviar</button>
        <h3>{newValue}</h3>
        <hr></hr>

        <button onClick={() => clickButton2(limparValor)}>Limpar tela</button>
        <h3>{limparValor}</h3>


    </div>
    );
  }  
}

//mapeamento da store
const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  novoValor: store.limparState.novoValor
});

const mapDispatchToProps = dispatch => bindActionCreators({clickButton,clickButton2 }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(App);
