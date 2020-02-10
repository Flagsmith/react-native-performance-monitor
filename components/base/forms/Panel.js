import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

import Row from '../grid/Row';

const Panel = ({ className, icon, title, action, children }) => (
    <div
      className={cn({
          'panel': true,
          'panel-default': true,
      }, className)}
    >
        <div className="panel-heading">
            <Row space>
                <Row className="flex-1">
                    {icon && (
                        <span className="panel-icon">
                            <ion className={cn({ icon: true }, icon)}/>
                        </span>
                    )}
                    {title}
                </Row>
                {action}
            </Row>
        </div>
        <div className="panel-content">
            {children}
        </div>
    </div>
);

Panel.displayName = 'Panel';
global.Panel = Panel;
Panel.propTypes = {
    className: propTypes.any,
    action: propTypes.node,
    title: propTypes.node,
    icon: propTypes.string,
    children: propTypes.node,
};

export default Panel;
