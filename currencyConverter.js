document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "kA2FfLf3fwdaKDUf223pnbbYK8Df2b83");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    const from = document.querySelector("#from").value.toUpperCase();
    const to = document.querySelector("#to").value.toUpperCase();
    const amount = document.querySelector("#amount").value;



    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        document.querySelector("#result").innerHTML =`Result= ${result.result.toFixed(3)}`;
      })

      .catch((error) => console.log("error", error));

    return false;
  };
});
