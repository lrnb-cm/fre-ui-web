import { UserData } from "./index";

export const getMockData = (): Promise<UserData> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          picture: "profilePicture.png",
          name: "Thomas Thompson",
          position: "Director Complaint Management",
          email: "thomas.thopmson@gmail.com",
          phone: "+1 3039 3494 4949",
          membership: "premium",
          nextPayment: "15.10.2021",
          subscriptionId: "Monthly",
          price: "$30.00",
        }),
      1500
    )
  );
