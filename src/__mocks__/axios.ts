import axios from 'axios';

const mockAxios = jest.genMockFromModule("axios") as jest.Mocked<typeof axios>

mockAxios.create = jest.fn(() => mockAxios)

// export default mockAxios;

// mockAxios.create = jest.fn(() => {
//   return {
//       interceptors:{
//           request : {  
//               use: jest.fn(() => Promise.resolve({ data: {} })),
//           }
//       },

//       defaults:{
//             headers:{
//                 common:{
//                     "Content-Type":"",
//                     "Authorization":""
//                 }
//             }
//       },
//       get: jest.fn(() => Promise.resolve({data: { items: [{name: "Euler"}]}})),
//       post: jest.fn(() => Promise.resolve({ data: {} })),
//       put: jest.fn(() => Promise.resolve({ data: {} })),
//       delete: jest.fn(() => Promise.resolve({ data: {} })),
//   }
// })

export default mockAxios;

// export default {
//   defaults:{
//       headers:{
//           common:{
//               "Content-Type":"",
//               "Authorization":""
//           }
//       }
// },
// get: jest.fn(() => Promise.resolve({ data: {} })),
// post: jest.fn(() => Promise.resolve({ data: {} })),
// put: jest.fn(() => Promise.resolve({ data: {} })),
// delete: jest.fn(() => Promise.resolve({ data: {} })),
// create: jest.fn(function () {
//     return {
//         interceptors:{
//             request : {  
//                 use: jest.fn(() => Promise.resolve({ data: {} })),
//             }
//         },

//         defaults:{
//               headers:{
//                   common:{
//                       "Content-Type":"",
//                       "Authorization":""
//                   }
//               }
//         },
//         get: jest.fn(() => Promise.resolve({ data: {} })),
//         post: jest.fn(() => Promise.resolve({ data: {} })),
//         put: jest.fn(() => Promise.resolve({ data: {} })),
//         delete: jest.fn(() => Promise.resolve({ data: {} })),
//     }
// }),
// };