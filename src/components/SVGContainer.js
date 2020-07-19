import React, { Component } from 'react';
import Create from './SVGCreate';

export class SVGContainer extends Component {
    render() {
        const { children } = this.props;
        const componentToReturn = children ? children : <Create />;
        return componentToReturn;
    }
}

export default SVGContainer;