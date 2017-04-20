import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

/*
Some known issues

- CSS transforms on `foreignObject` elements break input fields
- Can't use `text-align: right` on `input` elements inside `foreignObject`
- `input` element renders in corner on text overflow when in `foreignObject`
    - http://stackoverflow.com/questions/42347671
    - https://bugs.chromium.org/p/chromium/issues/detail?id=483497
*/

const KEYCODES = {
    CR: 13,
    ESCAPE: 27,
};

class InputText extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onClickText = this.onClickText.bind(this);
        this.handleOutsideMouseClick = this.handleOutsideMouseClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.state = {
            isEditing: false
        };
    }
    
    componentDidMount() {
        if (this.props.closeOnEsc) {
            document.addEventListener('keydown', this.handleKeydown);
        }
        if (this.props.closeOnOutsideClick) {
            document.addEventListener('mouseup', this.handleOutsideMouseClick);
            document.addEventListener('touchstart', this.handleOutsideMouseClick);
        }
    }
    
    componentWillUnmount() {
        if (this.props.closeOnEsc) {
            document.removeEventListener('keydown', this.handleKeydown);
        }
        if (this.props.closeOnOutsideClick) {
            document.removeEventListener('mouseup', this.handleOutsideMouseClick);
            document.removeEventListener('touchstart', this.handleOutsideMouseClick);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isEditing) {
            if (prevState.isEditing !== this.state.isEditing) {
                this.props.onBeginEditing();
            }
            this.refs.input.focus();
        } else if (prevState.isEditing !== this.state.isEditing) {
            this.props.onEndEditing();
        }
    }
    
    handleOutsideMouseClick(e) {
        const domNode = findDOMNode(this);

        if ((!domNode || !domNode.contains(event.target))) {
            this.setState({
                isEditing: false
            });
        }
    }

    isDoneKey(code) {
        return code === KEYCODES.ESCAPE || code === KEYCODES.CR;
    }

    handleKeydown(e) {
        if (this.isDoneKey(e.keyCode) && this.state.isEditing) {
            this.setState({
                isEditing: false
            });
        }
    }
    
    onInputChange (e) {
        this.props.onChange(e);
    }
    
    onClickText (e) {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    
    render () {
        var passThroughProps = Object.assign({}, this.props);
        Object.keys(this.constructor.defaultProps).forEach(function (key) {
            delete passThroughProps[key];
        });
        const style = passThroughProps.style;
        delete passThroughProps.style;
        
        if (this.state.isEditing) {
            return (
            /*
            Safari won't render the foreignObject element unless it is properly 
            namespaced and also has a width and height property.

            We don't know what height it should be because that depends on the 
            text/input font size, but that doesn't really matter because it seems 
            to ignore the width and height anyway.
            */
            <foreignObject width={1000} height={1000} transform={`${passThroughProps.transform} ${this.props.transformInput}`}>
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <input ref="input" name={this.props.name} onChange={this.onInputChange} type="text" value={this.props.children} className={this.props.className} style={{...style, padding: 0, margin: 0, border: 0, color: "#1919a9", outline: "none", textAlign: (passThroughProps.textAnchor === "middle" ? "center" : "left")}} />
                </div>
            </foreignObject>
            );
        } else {
            return (
                <text ref="label" {...passThroughProps} onClick={this.onClickText} style={style}>{this.props.children}</text>
            );
        }
    }
}

InputText.defaultProps = {
    onChange: function () {},
    name: null,
    closeOnEsc: true,
    closeOnOutsideClick: true,
    focusOnOpen: true,
    transformInput: "translate(0, -14)",
    onBeginEditing: function () {},
    onEndEditing: function () {}
};

export default InputText;