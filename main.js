prediction = "";

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
});
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("", modelLoaded);
function modelLoaded(){
console.log("Model Loaded!");
}

function speak(){
var synth = window.speechSynthesis;
speakdata = "The predicted Hand Signal is: " + prediction
var utterThis = new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);
}