function getPS3(per) {
  return new Promise((res, rej) => {
    if (per >= 90) {
      console.log('Will get PS3');
    } else {
      console.log(`Won't get PS3`);
    }
  });
}

getPS3(78)
  .then((data) => {
    res();
  })
  .catch((err) => {
    rej();
  });
