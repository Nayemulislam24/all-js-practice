const paymentSuccess = true;
const marks = 90;

function enroll() {
  console.log("Course enrollment is in progress .");
//   document.getElementById("demo").innerHTML = params;
  const promisePractice = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });
  return promisePractice;
}
function progress() {
  const promisePractice = new Promise(function (resolve, reject) {
    console.log("Course on progress");
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 3000);
  });
  return promisePractice;
}
function getCertificate() {
  const promisePractice = new Promise(function (resolve) {
    console.log("Progress your certificate");
    setTimeout(function () {
      resolve("Congrats! You got the certificate");
    }, 1000);
  });
  return promisePractice;
}

// function call
// function call
// function call
// function call
// function call
// function call

async function course() {
  try {
    await enroll();
    await progress();
    const massage = await getCertificate();
    console.log(massage);
  } catch (error) {
    console.log(error);
  }
}
course();

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (params) {
//     document.getElementById("demo").innerHTML = params;
//   })
//   .catch(function (params) {
//     document.getElementById("demo").innerHTML = params;
//   });
