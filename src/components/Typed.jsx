import React from "react";
import Typed from "typed.js";

class TypedHeader extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    // const { text } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: this.props.strings,
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 400,
    smartBackspace: true, 
    onStringTyped: function(arrayPos, self) {
      if (arrayPos === 1) {
        self.backSpeed = 0;
        self.backDelay = 0;
        self.typeSpeed = 0;
      }
    },
    onComplete: function(self) { self.cursor.remove() },

    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
    );
  }
}

class TypedBody extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    // const { text } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: this.props.strings,
    typeSpeed: 10,
    startDelay: 200,
    smartBackspace: true, 
    onComplete: function(self) { self.cursor.remove() },

    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
    );
  }
}

export { TypedHeader, TypedBody };