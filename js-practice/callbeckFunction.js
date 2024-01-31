const paymentSuccess = true;
const marks = 90;

function enroll(callbeck) {
  console.log("Course enrollment is in progress .");
  setTimeout(function () {
    if (paymentSuccess) {
      callbeck();
    } else {
      console.log("payment failed");
    }
  }, 2000);
}

function progress(callbeck) {
  console.log("Course on progress");  
  setTimeout(function () {
    if (marks >= 80) {
      callbeck();
    } else {
      console.log('You could not get enough marks to get the certificate');
    }
  }, 3000);
}
function getCertificate() {
  console.log("Progress your certificate");
  setTimeout(function () {
    console.log('Congrats! You got the certificate');
  }, 1000);
}

// enroll(progress);
// progress(getCertificate);
// progress(getCertificate);
// progress(getCertificate);
// progress(getCertificate);

enroll(function () {        //anonimus function call system 
    progress(getCertificate);
});
