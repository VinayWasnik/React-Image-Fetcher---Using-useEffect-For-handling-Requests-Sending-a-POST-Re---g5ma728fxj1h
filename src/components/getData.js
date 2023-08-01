export const getData = async () => {
    // This function simulates an asynchronous operation by sleeping for 2 seconds.
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    return "Hello, world!";
  };
  
