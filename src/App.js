import React, { Component } from 'react';
import { drawMujiLabelCanvas, makeRect } from './mujiCanvas';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div id="preview">
          <canvas width={262} height={426} style={{border: "1px solid #BBB"}} ref="canvas"></canvas>
        </div>
        <div id="inputs">
          <input type="text" name="label1" value={this.props.model.label1} onChange={this.onInputChange} />
          <input type="text" name="label2" value={this.props.model.label2} onChange={this.onInputChange} />
          <input type="text" name="label3" value={this.props.model.label3} onChange={this.onInputChange} />
          <input type="text" name="label4" value={this.props.model.label4} onChange={this.onInputChange} />
          <input type="text" name="label5" value={this.props.model.label5} onChange={this.onInputChange} />
          <input type="text" name="label6" value={this.props.model.label6} onChange={this.onInputChange} />
          <input type="text" name="label7" value={this.props.model.label7} onChange={this.onInputChange} />
          <input type="text" name="label8" value={this.props.model.label8} onChange={this.onInputChange} />
          <input type="text" name="label9" value={this.props.model.label9} onChange={this.onInputChange} />
          <input type="text" name="label10" value={this.props.model.label10} onChange={this.onInputChange} />
          <input type="text" name="label11" value={this.props.model.label11} onChange={this.onInputChange} />
          <input type="text" name="label12" value={this.props.model.label12} onChange={this.onInputChange} />
          <input type="text" name="label13" value={this.props.model.label13} onChange={this.onInputChange} />
          <input type="text" name="label14" value={this.props.model.label14} onChange={this.onInputChange} />
          <input type="text" name="label15" value={this.props.model.label15} onChange={this.onInputChange} />
          <input type="text" name="label16" value={this.props.model.label16} onChange={this.onInputChange} />
          <input type="text" name="label17" value={this.props.model.label17} onChange={this.onInputChange} />
          <h4>QR Code Data</h4>
          <div id="vcard">
            <div className="labeledInput"><label>name</label><input name="name" value={this.props.model.name} onChange={this.onInputChange} className="qr" type="text" /></div>
            <div className="labeledInput"><label>phone</label><input name="phone" value={this.props.model.phone} onChange={this.onInputChange} className="qr" type="text" /></div>
            <div className="labeledInput"><label>email</label><input name="email" value={this.props.model.email} onChange={this.onInputChange} className="qr" type="text" /></div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.renderCanvas();
  }
  componentDidUpdate() {
    this.renderCanvas();
  }
  onInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const changes = {[name]: value};
    this.props.onChange({...this.props.model,...changes});
  }
  renderCanvas() {
    drawMujiLabelCanvas(
      this.refs.canvas,
      makeRect(0, 0, 262, 426),
      undefined,
      this.props.model);
  }
}

App.defaultProps = {
  onChange() { },
  model: {
    label1: 'THIS DEVICE CONTAINS TRADE SECRET INFORMATION ',
    label2: 'OF ACME CORPORATION AND MAY ONLY BE VIEWED BY',
    label3: 'AUTHORIZED PERSONS. UNAUTHORIZED VIEWING OR',
    label4: 'DISCLOSURE IS STRICTLY PROHIBITED AND MAY RESULT',
    label5: 'IN SERIOUS LEGAL CONSEQUENCES.',
    label6: '15-inch 2016',
    label7: 'NOTEBOOK',
    label8: 'MacBookPro13,3',
    label9: 'JOHN DOE',
    label10: 'ACME Corp.',
    label11: 'IF FOUND, CONTACT:',
    label12: 'John_Doe@example.com',
    label13: '555.555.5555',
    label14: 'EMPLOYEE ID',
    label15: '1234567',
    label16: 'SERIAL NUMBER',
    label17: 'D09TR5XGTTRL',
    name: 'John Doe',
    phone: '+15555555555',
    email: 'John_Doe@example.com'
  }
}

export default App;
