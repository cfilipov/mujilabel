import React, { Component } from 'react';
import './App.css';

const qrcanvas = require('qrcanvas');

class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      label1: 'THIS DEVICE CONTAINS TRADE SECRET INFORMATION ',
      label2: 'OF ACME CORPORATION AND MAY ONLY BE VIEWED BY',
      label3: 'AUTHORIZED PERSONS. UNAUTHORIZED VIEWING OR',
      label4: 'DISCLOSURE IS STRICTLY PROHIBITED AND MAY RESULT',
      label5: 'IN SERIOUS LEGAL CONSEQUENCES.',
      label6: '15-inch 2016',
      label7: 'NOTEBOOK',
      label8: 'MacBookPro13,3',
      label9: 'JOHN DOE',
      label10: 'ACME INC.',
      label11: 'IF FOUND, CONTACT:',
      label12: 'Jown_Doe@example.com',
      label13: '555.555.5555',
      label14: 'EMPLOYEE ID',
      label15: '1234567',
      label16: 'SERIAL NUMBER',
      label17: 'D09TR5XGTTRL',
      name: 'John Doe',
      phone: '+15555555555',
      email: 'John_Doe@example.com'
    };
  }
  render() {
    return (
      <div className="App">
        <div id="preview">
          <canvas width={262} height={426} style={{border: "1px solid #BBB"}} ref="canvas"></canvas>
        </div>
        <div id="inputs">
          <input type="text" name="label1" value={this.state.label1} onChange={this.onInputChange} />
          <input type="text" name="label2" value={this.state.label2} onChange={this.onInputChange} />
          <input type="text" name="label3" value={this.state.label3} onChange={this.onInputChange} />
          <input type="text" name="label4" value={this.state.label4} onChange={this.onInputChange} />
          <input type="text" name="label5" value={this.state.label5} onChange={this.onInputChange} />
          <input type="text" name="label6" value={this.state.label6} onChange={this.onInputChange} />
          <input type="text" name="label7" value={this.state.label7} onChange={this.onInputChange} />
          <input type="text" name="label8" value={this.state.label8} onChange={this.onInputChange} />
          <input type="text" name="label9" value={this.state.label9} onChange={this.onInputChange} />
          <input type="text" name="label10" value={this.state.label10} onChange={this.onInputChange} />
          <input type="text" name="label11" value={this.state.label11} onChange={this.onInputChange} />
          <input type="text" name="label12" value={this.state.label12} onChange={this.onInputChange} />
          <input type="text" name="label13" value={this.state.label13} onChange={this.onInputChange} />
          <input type="text" name="label14" value={this.state.label14} onChange={this.onInputChange} />
          <input type="text" name="label15" value={this.state.label15} onChange={this.onInputChange} />
          <input type="text" name="label16" value={this.state.label16} onChange={this.onInputChange} />
          <input type="text" name="label17" value={this.state.label17} onChange={this.onInputChange} />
          <h4>QR Code Data</h4>
          <div id="vcard">
            <div className="labeledInput"><label>name</label><input name="name" value={this.state.name} onChange={this.onInputChange} className="qr" type="text" /></div>
            <div className="labeledInput"><label>phone</label><input name="phone" value={this.state.phone} onChange={this.onInputChange} className="qr" type="text" /></div>
            <div className="labeledInput"><label>email</label><input name="email" value={this.state.email} onChange={this.onInputChange} className="qr" type="text" /></div>
          </div>
        </div>
      </div>
    );
  }
  onInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  componentDidMount() {
      this.renderCanvas();
  }
  componentDidUpdate() {
        this.renderCanvas();
    }
  renderCanvas() {
    let canvas = this.refs.canvas;
    this.clearCanvas(canvas);
    this.drawMujiLabelCanvas(canvas, this.makeRect(0, 0, 262, 426), undefined);
  }
  drawMujiLabelCanvas(canvas, targetFrame, resizing, model) {
    //// General Declarations
    var context = canvas.getContext('2d');
    
    //// Resize to Target Frame
    context.save();
    var resizedFrame = this.applyResizingBehavior(resizing, this.makeRect(0, 0, 131, 213), targetFrame);
    context.translate(resizedFrame.x, resizedFrame.y);
    context.scale(resizedFrame.w / 131, resizedFrame.h / 213);
    
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    //// Color Declarations
    var textForeground = 'rgba(0, 0, 0, 1)';
    var fillColor2 = 'rgba(0, 0, 0, 1)';
    
    //// Label Drawing
    context.save();
    context.translate(112.67, 207.53);
    context.rotate(-90 * Math.PI / 180);
    
    var labelRect = this.makeRect(0, 0, 64.81, 13);
    context.fillStyle = textForeground;
    context.font = '9px AndaleMono, "Andale Mono", AndaleMono, monospace';
    context.textAlign = 'left';
    var labelTotalHeight = 9 * 1.3;
    context.fillText(this.state.label17, labelRect.x, labelRect.y + 8 + labelRect.h / 2 - labelTotalHeight / 2);
    
    context.restore();
    
    
    //// Label 2 Drawing
    var label2Rect = this.makeRect(4.72, 134.72, 78.65, 8);
    context.fillStyle = textForeground;
    context.font = 'bold 5.5px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'left';
    var label2TotalHeight = 5.5 * 1.3;
    context.fillText(this.state.label11, label2Rect.x, label2Rect.y + 5 + label2Rect.h / 2 - label2TotalHeight / 2);
    
    
    //// Label 3 Drawing
    var label3Rect = this.makeRect(4.72, 141.72, 84.55, 8);
    context.fillStyle = textForeground;
    context.font = 'bold 5.5px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'left';
    var label3TotalHeight = 5.5 * 1.3;
    context.fillText(this.state.label12, label3Rect.x, label3Rect.y + 5 + label3Rect.h / 2 - label3TotalHeight / 2);
    
    
    //// Label 4 Drawing
    var label4Rect = this.makeRect(4.72, 148.73, 33.64, 8);
    context.fillStyle = textForeground;
    context.font = 'bold 5.5px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'left';
    var label4TotalHeight = 5.5 * 1.3;
    context.fillText(this.state.label13, label4Rect.x, label4Rect.y + 5 + label4Rect.h / 2 - label4TotalHeight / 2);
    
    
    //// Label 5 Drawing
    context.save();
    context.translate(105.11, 207.53);
    context.rotate(-90 * Math.PI / 180);
    
    var label5Rect = this.makeRect(0, 0, 45.83, 8);
    context.fillStyle = textForeground;
    context.font = 'bold 5.5px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'left';
    var label5TotalHeight = 5.5 * 1.3;
    context.fillText(this.state.label16, label5Rect.x, label5Rect.y + 5 + label5Rect.h / 2 - label5TotalHeight / 2);
    
    context.restore();
    
    
    //// Label 6 Drawing
    context.save();
    context.translate(91.65, 207.53);
    context.rotate(-90 * Math.PI / 180);
    
    var label6Rect = this.makeRect(0, 0, 37.81, 13);
    context.fillStyle = textForeground;
    context.font = '9px AndaleMono, "Andale Mono", AndaleMono, monospace';
    context.textAlign = 'left';
    var label6TotalHeight = 9 * 1.3;
    context.fillText(this.state.label15, label6Rect.x, label6Rect.y + 8 + label6Rect.h / 2 - label6TotalHeight / 2);
    
    context.restore();
    
    
    //// Label 7 Drawing
    context.save();
    context.translate(84.1, 207.53);
    context.rotate(-90 * Math.PI / 180);
    
    var label7Rect = this.makeRect(0, 0, 37.79, 8);
    context.fillStyle = textForeground;
    context.font = 'bold 5.5px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'left';
    var label7TotalHeight = 5.5 * 1.3;
    context.fillText(this.state.label14, label7Rect.x, label7Rect.y + 5 + label7Rect.h / 2 - label7TotalHeight / 2);
    
    context.restore();
    
    
    //// Label 8 Drawing
    var label8Rect = this.makeRect(120.95, 108.38, 120.95, 19);
    context.fillStyle = textForeground;
    context.font = 'bold 12px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'right';
    var label8TotalHeight = 12 * 1.3;
    context.fillText(this.state.label10, label8Rect.x, label8Rect.y + 12 + label8Rect.h / 2 - label8TotalHeight / 2);
    
    
    //// Label 9 Drawing
    var label9Rect = this.makeRect(24.82, 70.75, 81.5, 15);
    context.fillStyle = textForeground;
    context.font = 'bold 10px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label9TotalHeight = 10 * 1.3;
    context.fillText(this.state.label8, label9Rect.x + label9Rect.w/2, label9Rect.y + 10 + label9Rect.h / 2 - label9TotalHeight / 2);
    
    
    //// Label 10 Drawing
    var label10Rect = this.makeRect(21.23, 87.75, 88.68, 15);
    context.fillStyle = textForeground;
    context.font = 'bold 10px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label10TotalHeight = 10 * 1.3;
    context.fillText(this.state.label9, label10Rect.x + label10Rect.w/2, label10Rect.y + 10 + label10Rect.h / 2 - label10TotalHeight / 2);
    
    
    //// Label 11 Drawing
    var label11Rect = this.makeRect(32.87, 37.25, 65.39, 15);
    context.fillStyle = textForeground;
    context.font = 'bold 10px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label11TotalHeight = 10 * 1.3;
    context.fillText(this.state.label6, label11Rect.x + label11Rect.w/2, label11Rect.y + 10 + label11Rect.h / 2 - label11TotalHeight / 2);
    
    
    //// Label 12 Drawing
    var label12Rect = this.makeRect(7.97, 51.36, 115.2, 25);
    context.fillStyle = textForeground;
    context.font = 'bold 20px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label12TotalHeight = 20 * 1.3;
    context.fillText(this.state.label7, label12Rect.x + label12Rect.w/2, label12Rect.y + 20 + label12Rect.h / 2 - label12TotalHeight / 2);
    
    
    //// Rectangle 16 Drawing
    context.beginPath();
    context.rect(4.73, 126.62, 120.95, 4.15);
    context.fillStyle = fillColor2;
    context.fill();
    
    
    //// Rectangle 17 Drawing
    context.beginPath();
    context.rect(4.73, 85.62, 120.95, 4.15);
    context.fillStyle = fillColor2;
    context.fill();
    
    
    //// Rectangle 18 Drawing
    context.beginPath();
    context.rect(4.73, 35.82, 120.95, 4.15);
    context.fillStyle = fillColor2;
    context.fill();
    
    
    //// Rectangle 19 Drawing
    context.beginPath();
    context.rect(4.73, 51.27, 120.95, 2.05);
    context.fillStyle = fillColor2;
    context.fill();
    
    
    //// Label 13 Drawing
    var label13Rect = this.makeRect(7.78, 1.91, 114.83, 7);
    context.fillStyle = textForeground;
    context.font = 'bold 4.25px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label13TotalHeight = 4.25 * 1.3;
    context.fillText(this.state.label1, label13Rect.x + label13Rect.w/2, label13Rect.y + 4 + label13Rect.h / 2 - label13TotalHeight / 2);
    
    //// Label 14 Drawing
    var label14Rect = this.makeRect(6.86, 7.91, 116.66, 7);
    context.fillStyle = textForeground;
    context.font = 'bold 4.25px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label14TotalHeight = 4.25 * 1.3;
    context.fillText(this.state.label2, label14Rect.x + label14Rect.w/2, label14Rect.y + 4 + label14Rect.h / 2 - label14TotalHeight / 2);
    
    
    //// Label 15 Drawing
    var label15Rect = this.makeRect(8.33, 13.91, 113.72, 7);
    context.fillStyle = textForeground;
    context.font = 'bold 4.25px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label15TotalHeight = 4.25 * 1.3;
    context.fillText(this.state.label3, label15Rect.x + label15Rect.w/2, label15Rect.y + 4 + label15Rect.h / 2 - label15TotalHeight / 2);
    
    
    //// Label 16 Drawing
    var label16Rect = this.makeRect(4.9, 19.92, 120.59, 7);
    context.fillStyle = textForeground;
    context.font = 'bold 4.25px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label16TotalHeight = 4.25 * 1.3;
    context.fillText(this.state.label4, label16Rect.x + label16Rect.w/2, label16Rect.y + 4 + label16Rect.h / 2 - label16TotalHeight / 2);
    
    //// Label 17 Drawing
    var label17Rect = this.makeRect(26.07, 25.92, 78.25, 7);
    context.fillStyle = textForeground;
    context.font = 'bold 4.25px HelveticaNeue-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    var label17TotalHeight = 4.25 * 1.3;
    context.fillText(this.state.label5, label17Rect.x + label17Rect.w/2, label17Rect.y + 4 + label17Rect.h / 2 - label17TotalHeight / 2);
    
    var subcanvas = qrcanvas({
        data: this.makeVcard(this.state.name, this.state.phone, this.state.email),
        size: 1024,
        noAlpha: false
    });
    let _ = subcanvas.getContext('2d');
    context.drawImage(subcanvas, 5, 162, 46, 46);
    
    context.restore();
  }
  makeVcard(name,phone,email) {
	  return (
`BEGIN:VCARD
VERSION:2.1
FN:${name}
TEL;CELL:${phone}
EMAIL:${email}
END:VCARD`)
  }
  initializeCanvas(canvas) {
    if ('paintCodePixelRatio' in canvas) return canvas;
    // This function should only be called once on each canvas.
    var context = canvas.getContext('2d');
    
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStorePixelRatio = context.webkitBackingStorePixelRatio
    || context.mozBackingStorePixelRatio
    || context.msBackingStorePixelRatio
    || context.oBackingStorePixelRatio
    || context.backingStorePixelRatio
    || 1;
    
    var pixelRatio = devicePixelRatio / backingStorePixelRatio;
    
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    canvas.width *= pixelRatio;
    canvas.height *= pixelRatio;
    canvas.paintCodePixelRatio = pixelRatio;
    
    context.scale(pixelRatio, pixelRatio);
    return canvas;
  }
  makeSize(w, h) {
    return { w: w, h: h };
  }
  equalRects(r1, r2) {
    return r1.x === r2.x && r1.y === r2.y && r1.w === r2.w && r1.h === r2.h;
  }
  makeRect(x, y, w, h) {
    return { x: x, y: y, w: w, h: h };
  }
  clearCanvas(canvas) {
    canvas = this.initializeCanvas(typeof canvas === 'string' ? document.getElementById(canvas) : canvas);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }
  // Possible arguments for 'resizing' parameter are:
  //   'aspectfit': The content is proportionally resized to fit into the target rectangle.
  //   'aspectfill': The content is proportionally resized to completely fill the target rectangle.
  //   'stretch': The content is stretched to match the entire target rectangle.
  //   'center': The content is centered in the target rectangle, but it is NOT resized.
  applyResizingBehavior(resizing, rect, targetRect) {
    if (targetRect === undefined || this.equalRects(rect, targetRect) || this.equalRects(targetRect, this.makeRect(0, 0, 0, 0))) {
        return rect;
    }
    
    var scales = this.makeSize(0, 0);
    scales.w = Math.abs(targetRect.w / rect.w);
    scales.h = Math.abs(targetRect.h / rect.h);
    
    switch (resizing) {
        case 'aspectfit': {
            scales.w = Math.min(scales.w, scales.h);
            scales.h = scales.w;
            break;
        }
        case 'aspectfill': {
            scales.w = Math.max(scales.w, scales.h);
            scales.h = scales.w;
            break;
        }
        case 'stretch':
        case undefined:
        break;
        case 'center': {
            scales.w = 1;
            scales.h = 1;
            break;
        }
        default:
        throw new Error('Unknown resizing behavior "' + resizing + '". Use "aspectfit", "aspectfill", "stretch" or "center" as resizing behavior.');
    }
    
    var result = this.makeRect(Math.min(rect.x, rect.x + rect.w), Math.min(rect.y, rect.y + rect.h), Math.abs(rect.w), Math.abs(rect.h));
    result.w *= scales.w;
    result.h *= scales.h;
    result.x = targetRect.x + (targetRect.w - result.w) / 2;
    result.y = targetRect.y + (targetRect.h - result.h) / 2;
    return result;
  }
}

export default App;
