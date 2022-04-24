Webcam.set({
    width:350,
    height:350,
    img_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="picture" src="' + data_uri + '"/>'
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ULKx5IScp/model.json');

function modelLoaded(){
    console.log("Model Loaded!");
}