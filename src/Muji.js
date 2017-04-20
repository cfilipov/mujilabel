import React, { Component } from 'react';
import { QRCode } from 'react-qr-svg';
import InputText from './InputText.js';
import './Muji.css';

const download = require('downloadjs');

const xmlEncodingDeclaration = '<?xml version="1.0" encoding="utf-8"?>\n';

class Muji extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.downloadSvg = this.downloadSvg.bind(this);
        this.downloadPng = this.downloadPng.bind(this);
        this.svgElement = null;
        this.state = {
            isEditing: false
        };
        this.inputProps = {
            onChange: this.onInputChange,
            onBeginEditing:  () => this.setState({ isEditing: true }),
            onEndEditing: () => this.setState({ isEditing: false })
        };
    }
    get svgString() {
        print(this.svgElement.html())
        return xmlEncodingDeclaration + this.svgElement.html()
    }
    downloadSvg() {
        console.log('downloading svg...');
        const $svg = this.svgElement.cloneNode(true);
        const svgData = xmlEncodingDeclaration + (new XMLSerializer().serializeToString($svg));
        download(svgData, 'label.svg', 'image/svg+xml');
    }
    downloadPng() {
        console.log('downloading png...');
        let [ width, height ] = [ 393, 639 ];
        const $svg = this.svgElement.cloneNode(true);
        const svgData = new XMLSerializer().serializeToString($svg);
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        this.initializeCanvas(canvas);
        const ctx = canvas.getContext('2d');
        const img = document.createElement('img');
        img.onload = () => {
            ctx.drawImage(img, 0, 0, width, height);
            const imgData = canvas.toDataURL('image/png');
            download(imgData, 'label.png', 'image/png');
        };
        img.setAttribute('src', 'data:image/svg+xml;base64,\n' + btoa(svgData));
    }
    get vcard() {
        var card = '';
        card += 'BEGIN:VCARD';
        card += '\nVERSION:2.1'
        card += '\nFN:' + this.props.model.name
        card += '\nTEL;CELL:' + this.props.model.phone
        card += '\nEMAIL:' + this.props.model.email
        card += '\nEND:VCARD'
        return card
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
    render() {
        return (
            <div
                style={{
                    height: "85vh",
                    textAlign: "center",
                    margin: "20px 5px 20px 5px"
                }}
            >
                <svg
                    ref={(svgElement) => { this.svgElement = svgElement; }}
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px"
                    viewBox="0 0 130.4 212.6" 
                    style={{
                        enableBackground: "new 0 0 130.4 212.6",
                        height: "100%",
                        border: "1px solid rgb(187, 187, 187)",
                        textAlign: "left"
                    }}
                    xmlSpace="preserve">
                    <style type="text/css">{
                        `.st4{font-family:'AndaleMono';}
                        .st5{font-size:9px;}
                        .st6{font-family:'HelveticaNeue-Bold';}
                        .st7{font-size:5.5px;}
                        .st8{font-size:12px;}
                        .st9{font-size:10px;}
                        .st10{font-size:20px;}
                        .st12{font-size:4.25px;}
                        .st14{fill:white;}`
                    }
                    </style>
                    <rect x="0" y="0" width="130.4" height="212.6" className="st14" />

                    <InputText name="phone" {...this.inputProps} transform="matrix(1 0 0 1 4.7237 154.7231)"  className="st6 st7" style={{width: 120.9, textOverflow: "ellipsis"}}>{this.props.model.phone}</InputText>
                    <InputText name="email" {...this.inputProps} transform="matrix(1 0 0 1 4.7237 147.7231)" className="st6 st7" style={{width: 120.9, textOverflow: "ellipsis"}}>{this.props.model.email}</InputText>
                    <InputText name="label11" {...this.inputProps} transform="matrix(1 0 0 1 4.7237 140.7231)" className="st6 st7" style={{width: 120.9, textOverflow: "ellipsis"}}>{this.props.model.label11}</InputText>

                    <InputText name="label17" {...this.inputProps} transform="matrix(4.489659e-11 -1 1 4.489659e-11 124.6667 207.5264)" className="st4 st5">{this.props.model.label17}</InputText>
                    <InputText name="label16" {...this.inputProps} transform="matrix(4.489659e-11 -1 1 4.489659e-11 115.1134 207.5264)" className="st6 st7">{this.props.model.label16}</InputText>
                    <InputText name="label15" {...this.inputProps} transform="matrix(4.489659e-11 -1 1 4.489659e-11 107.6498 207.5264)" className="st4 st5">{this.props.model.label15}</InputText>
                    <InputText name="label14" {...this.inputProps} transform="matrix(4.489659e-11 -1 1 4.489659e-11 98.0965 207.5264)" className="st6 st7">{this.props.model.label14}</InputText>

                    <InputText name="label10" {...this.inputProps} transformInput="translate(-120.5, -14)" transform="matrix(1 0 0 1 125.6 124.3796)" textAnchor="end" className="st6 st8">{this.props.model.label10}</InputText>
                    <InputText name="name" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 99.7475)" textAnchor="middle" className="st6 st9" style={{width: 120.9}}>{this.props.model.name}</InputText>
                    <InputText name="label8" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 82.7475)" textAnchor="middle" className="st6 st9" style={{width: 120.9}}>{this.props.model.label8}</InputText>
                    <InputText name="label7" {...this.inputProps} transformInput="translate(-60.45, -20)" transform="matrix(1 0 0 1 65.15 71.3641)" textAnchor="middle" className="st6 st10" style={{width: 120.9, height: 24.25}}>{this.props.model.label7}</InputText>
                    <InputText name="label6" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 49.2475)" textAnchor="middle" className="st6 st9" style={{width: 120.9}}>{this.props.model.label6}</InputText>
                    <InputText name="label5" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 31.9131)" textAnchor="middle" className="st6 st12" style={{width: 120.9}}>{this.props.model.label5}</InputText>
                    <InputText name="label4" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 25.9131)" textAnchor="middle" className="st6 st12" style={{width: 124}}>{this.props.model.label4}</InputText>
                    <InputText name="label3" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 19.9131)" textAnchor="middle" className="st6 st12" style={{width: 120.9}}>{this.props.model.label3}</InputText>
                    <InputText name="label2" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 13.9131)" textAnchor="middle" className="st6 st12" style={{width: 120.9}}>{this.props.model.label2}</InputText>
                    <InputText name="label1" {...this.inputProps} transformInput="translate(-60.45, -14)" transform="matrix(1 0 0 1 65.15 7.9131)" textAnchor="middle" className="st6 st12" style={{width: 120.9}}>{this.props.model.label1}</InputText>

                    <rect x="4.7" y="126.7" width="120.9" height="4.1"/>
                    <rect x="4.7" y="85.6" width="120.9" height="4.1"/>
                    <rect x="4.7" y="35.8" width="120.9" height="4.1"/>
                    <rect x="4.7" y="51.2" width="120.9" height="2.1"/>

                    <g transform="matrix(1 0 0 1 4.7 160.8)">
                        <QRCode
                            x="4.7" y="160.8"
                            value={this.vcard}
                            size={46.7}
                            level="M"
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                        />
                    </g>

                </svg>
                <div style={{padding: 15}} hidden={this.state.isEditing}>
                    download:
                    [<a href="#" onClick={this.downloadSvg}>svg</a>
                    |
                    <a href="#" onClick={this.downloadPng}>png</a>]
                </div>
            </div>
        );
    }
    onInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const changes = {[name]: value};
        this.props.onChange({...this.props.model,...changes});
    }
}

Muji.defaultProps = {
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
    name: 'JOHN DOE',
    label10: 'ACME CO.',
    label11: 'IF FOUND, CONTACT:',
    email: 'John@example.com',
    phone: '555.555.5555',
    label14: 'EMPLOYEE ID',
    label15: '1234567',
    label16: 'SERIAL NUMBER',
    label17: 'D09TR5XGTTRL'
  }
}

export default Muji;