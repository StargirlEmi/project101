var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie --- ");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis
    
    speak_data = "Taking your selfie in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        imageid="selfie1", 
        take_snapshot();
        speak_data="taking your next selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);


setTimeout(function()
{
    imageid="selfie2", 
    take_snapshot();
    speak_data="taking your next selfie in 15 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 10000);
setTimeout(function()
{
    imageid="selfie3", 
    take_snapshot();
}, 15000);
}


Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera")

function take_snapshot()
{
    Webcam.snap(function(data_url) {
        if(imageid="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_url+'">';
        }
        if(imageid="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_url+'">';
        }
        if(imageid="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_url+'">';
        }

    });
}
