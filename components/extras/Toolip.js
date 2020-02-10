// const ReactTooltip = require('react-tooltip');
//
// const Tooltip = ({ children, title, place }) => {
//     const id = Utils.GUID();
//     return (
//         <span className="question-tooltip">
//             {title ? <span data-for={id} data-tip>{title}</span>
//                 : <span className="ion ion-ios-help" data-for={id} data-tip/>}
//             <ReactTooltip
//               id={id} place={place || 'top'} type="dark"
//               effect="solid"
//             >
//                 {children}
//             </ReactTooltip>
//         </span>
//     );
// };
//
// Tooltip.propTypes = {
//     children: propTypes.node,
//     place: propTypes.string,
//     title: propTypes.string,
// };
//
// module.exports = Tooltip;
