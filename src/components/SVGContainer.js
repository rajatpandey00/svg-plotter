import React, { Component } from 'react';

export class SVGContainer extends Component {
    render() {
        const { children } = this.props;
        const componentToReturn = children ? children : "Hi This is Simple from SVGContainter!!!";
        return componentToReturn;
    }
}

export default SVGContainer;