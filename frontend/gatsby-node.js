// // exports.onCreateNode = ({node}) => {
// //   console.log(`Node created of type ${node.internal.type}`)
// // }

// exports.createPages = async ({ graphql, actions }) => {
//   const result = await graphql(`
//     query donatePage {
//       strapiDonatePage {
//         title
//         content
//         moneroAddress
//         moneroQr {
//           formats {
//             thumbnail {
//               url
//             }
//           }
//         }
//       }
//     }
//   `);
//   // console.log(result)

//   this.createPages({
//     path: 'donate',
//     component: path.resolve('./src/pages/donate.tsx'),

//   })
// };
