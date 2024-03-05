export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: success });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return myPromise;
}
