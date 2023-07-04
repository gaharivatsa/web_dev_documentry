function getweather(){
  return new Promise((resolve,reject) => {
    setTimeout(() =>{
      resolve(2);
    },1000)
  })
}

function basedgetweather(data){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
    switch(data){
      case 1:
        resolve("Best");
        break;
      case 2:
        resolve("Good");
        break;
      case 3:
        reject("Bad");
        break;
      default:
        reject("SUCK OFF");
    }
  },1000)
  })
}



getweather()
    .then(basedgetweather)
    .then((data) => {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          switch(data){
            case "Good":
              console.log("Thanks");
              break;
            case "Bad":
              console.log("OK");
              break;
            case "SUCK OFF":
              console.log("MIND IT !!!!!!");
              break;
          }
        },1000)
      })
    }).catch((error) =>
    {
      console.log(error);
    })