//https://teachablemachine.withgoogle.com/models/TrpQTDxKR/

Webcam.set({
    width: 350,
    height: 300,
    dest_width: 350,
    dest_height: 300,
    image_format: 'png',
    png_quality: 99.99
});
Webcam.attach("#Camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Image_capture").innerHTML='<img id="i1" src="'+data_uri+'">';
    }) ;
    
}

console.log("ml5version",ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TrpQTDxKR/model.json",model_loaded);


function model_loaded(){
    console.log("model loaded succesfully");
};


function check(){
    image=document.getElementById("i1");
    classifier.classify(image,got_result);
};

function got_result(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("Object_name").innerHTML=result[0].label;
        document.getElementById("Accuracy").innerHTML=result[0].confidence;
    }
}