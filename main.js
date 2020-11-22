var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition;

function talk(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content==="take my selfie"){
        speak()
    }
    
}
function speak(){
    var apikey=window.speechSynthesis
    var speakData="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    apikey.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot()
        save()
    },5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
jpeg_quality: 90
});
var camera=document.getElementById("div1")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("div2").innerHTML='<img id="imgSave" src="'+data_uri+'"/>'
    })
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("imgSave").src;
    link.href=image
    link.click()
}
