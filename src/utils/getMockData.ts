export const getMockData = (obj: any): Promise<any> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(obj),
      1500
    )
  );
