video="";
status="";
function preload()
{

}
function setup()
{
canvas=createCanvas(480,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(480,380);
}
function draw()
{
image(video,0,0,480,380);
}
function start()
{
objectdetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
objectname=document.getElementById("object").value;
}
function modelloaded()
{
    console.log("Model loaded!");
    status=true;
    console.log(objectname);
}