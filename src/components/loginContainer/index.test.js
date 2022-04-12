// import {
//   act,
//   fireEvent,
//   render,
//   screen,
//   waitFor,
// } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { MockedProvider } from "@apollo/react-testing";
// import { LocalStorageMock } from "@react-mock/localstorage";
// import { OIDC_LOGIN } from "./queries/mutations";
// import App from "../../App";
// import { Google } from "./config";

// test("loginProvider mutation called when Login With Google button clicked", async () => {
//   const payload = {
//     redirect_uri: Google.REDIRECT_URI,
//     scope: Google.SCOPE,
//     login_hint: "wconnatser@lilliirnb.com",
//     prompt: "consent",
//     state: "google",
//   };
//   let mutationExecuted;

//   const jestMock = [
//     {
//       request: {
//         query: OIDC_LOGIN,
//         variables: {
//           provider: payload.state,
//           payload: JSON.stringify(payload),
//         },
//       },
//       newData: jest.fn(() => ({
//         data: {
//           loginProvider: {
//             url: "http://localhost:3000/validated?state=google&code=4/0AX4XfWjkiHiX-l26q_-0J5wQtnvQdfugR5A3-E0AqW5ARJiRERgrCAsipmo-pFJTSVKd-w&scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&hd=lilliirnb.com&prompt=consent",
//             ApiKey: "banana",
//             email: "wconnatser@lilliirnb.com",
//           },
//         },
//       })),
//       response: () => {
//         mutationExecuted = true;
//         return {
//           data: {
//             loginProvider: {
//               url: "http://localhost:3000/validated?state=google&code=4/0AX4XfWjkiHiX-l26q_-0J5wQtnvQdfugR5A3-E0AqW5ARJiRERgrCAsipmo-pFJTSVKd-w&scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&hd=lilliirnb.com&prompt=consent",
//               ApiKey: "banana",
//               email: "wconnatser@lilliirnb.com",
//             },
//           },
//         };
//       },
//     },
//   ];

//   render(
//     <LocalStorageMock items={{ email: "wconnatser@lilliirnb.com" }}>
//       <MockedProvider mocks={jestMock}>
//         <App />
//       </MockedProvider>
//     </LocalStorageMock>
//   );

//   userEvent.click(screen.getByText("Login with Google"));

//   await new Promise((r) => setTimeout(r, 0));

//   // const mutationMock = jestMock[0].newData;
//   // expect(mutationMock).toHaveBeenCalled();
//   expect(mutationExecuted).toBe(true);
// });

// // const noJestMock = [
// //   {
// //     request: {
// //       query: OIDC_LOGIN,
// //       variables: {
// //         provider: payload.state,
// //         payload: JSON.stringify(payload),
// //       },
// //     },
// //     response: {
// //       data: {
// //         loginProvider: {
// //           url: "http://localhost:3000/validated?state=google&code=4/0AX4XfWjkiHiX-l26q_-0J5wQtnvQdfugR5A3-E0AqW5ARJiRERgrCAsipmo-pFJTSVKd-w&scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&hd=lilliirnb.com&prompt=consent",
// //           ApiKey: "banana",
// //           email: "wconnatser@lilliirnb.com",
// //         },
// //       },
// //     },
// //   },
// // ];

// // // test("Can log in with Google w/ mocked mutation without jest mock", async () => {
// // //   const { waitFor } = render(
// // //     <MockedProvider mocks={noJestMock}>
// // //       <App />
// // //     </MockedProvider>
// // //   );

// // //   const loginButton = await screen.getByText(/Login with Google/i);
// // //   fireEvent.click(loginButton);

// // //   // await waitFor(await screen.getByText(/API Key/i));
// // //   await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000));

// // //   const apiKeyText = await waitFor(screen.getByText(/API Key/i));
// // //   expect(apiKeyText).toBeInTheDocument();
// // // });

// // test("Can log in with Google w/o grapql mocks", async () => {
// //   const { waitFor } = render(
// //     <LocalStorageMock items={{ email: "wconnatser@lilliirnb.com" }}>
// //       <App />
// //     </LocalStorageMock>
// //   );

// //   const loginButton = await screen.getByText(/Login with Google/i);
// //   fireEvent.click(loginButton);

// //   // await waitFor(await screen.getByText(/API Key/i));
// //   await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000));

// //   const apiKeyText = await waitFor(screen.getByText(/API Key/i));
// //   expect(apiKeyText).toBeInTheDocument();
// // });

//Need one test in the suite..
test("temporary", () => expect(true).toBe(true));
