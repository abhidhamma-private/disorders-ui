// import React from 'react';
// import styled from 'styled-components';
// import Card from '../../Card';
// const Plan = styled.div`
//   display: grid;
//   justify-content: center;
//   grid-gap: 10px;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   background: rgb(241, 243, 245);
//   text-align: center;
//   grid-area: Plan;
//   padding: 10px;
// `;
// class PlanListComponent extends React.Component<any> {
//   public render() {
//     return (
//       <Plan>
//         {this.props.plan
//           .slice(0)
//           .reverse()
//           .map(plan => (
//             <Card
//               thumbnail={plan.thumbnail}
//               writer={plan.writer}
//               avatar={plan.avatar}
//               title={plan.title}
//               content={plan.content}
//               createdAt={plan.createdAt}
//               planId={plan.planId}
//               key={plan.planId}
//               href={'/Plan'}
//             />
//           ))}
//       </Plan>
//     );
//   }
// }

// export default PlanListComponent;
