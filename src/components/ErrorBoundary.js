import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

    componentDidCatch(error, info) {
        this.stState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
        return <h1>Ooops. This is not good</h1>
    }
    return this.props.children
    }
}

export default ErrorBoundary;