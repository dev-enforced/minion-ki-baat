var translateButton = document.querySelector("#translate-btn")
var inputText = document.querySelector(".text-input")
var outputText = document.querySelector(".text-output")

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(input){
  var encoded = encodeURI(input)
  return url + "?" + "text=" + encoded;
}

function catchError(error) {
  console.log(e);
  alert("Something went wrong with the Server");
}

function clickHandler(event) {
  var txtInput = inputText.value;
  fetch(getTranslatedUrl(txtInput)).then(response => response.json()).then(json => {
    var translatedText = json.contents.translated;
    outputText.innerText = translatedText;
  }).catch(catchError)
}

translateButton.addEventListener("click",clickHandler)