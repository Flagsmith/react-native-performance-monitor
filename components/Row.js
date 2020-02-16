/**
 * Created by kylejohnson on 24/07/2016.
 */
import cn from 'classnames';
import React from 'react';
import propTypes from 'prop-types';

const Row = ({ children, className, space, ...rest }) => (
    <div
      {...rest}
      className={cn({
          'flex-row': true,
          space,
      }, className)}
    >
        {children}
    </div>
);

Row.displayName = 'Row';

Row.defaultProps = {
    children: null,
    className: '',
    space: false,
    style: null,
};

Row.propTypes = {
    className: propTypes.string,
    space: propTypes.bool,
    children: propTypes.node,
    style: propTypes.any,
};

global.Row = Row;
export default Row;
