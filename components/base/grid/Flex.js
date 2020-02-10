// propTypes: value: OptionalNumber
import React from 'react';
import propTypes from 'prop-types';

const cn = require('classnames');

const Flex = ({ className, children, value, ...rest }) => (
    <div
      {...rest}
      className={cn({
          'flex': true,
      }, `flex-${value}`, className)}
    >
        {children}
    </div>
);

Flex.displayName = 'Flex';

Flex.defaultProps = {
    value: 1,
};

Flex.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    children: propTypes.node,
    style: propTypes.any,
};

global.Flex = Flex;
