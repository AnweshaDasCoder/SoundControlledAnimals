

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jzo3S5R1d/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'The accuracy is - '+ (results[0].confidence*100).toFixed(2)+" %";

    img = document.getElementById('ear')

img=""

    if (results[0].label == "Barking") {
      img.src = 'https://c.tenor.com/zfrbKsWNINEAAAAj/barking-the-pet-collective.gif';
      // img1.src = '';
      // img2.src = '';
      // img3.src = '';
      // img4.src = '';
    } else if (results[0].label == "meowing") {
      // img.src = '';
      img.src = 'https://c.tenor.com/7rSYdI-g3P4AAAAd/meow-cats.gif';
      // img2.src = '';
      // img3.src = '';
      // img4.src = '';
    } else if (results[0].label == "roaring") {
      // img.src = '';
      // img1.src = '';
      img.src = 'https://i.gifer.com/origin/c6/c6a95873df512c5b0ee3da782355db8c_w200.gif';
      // img3.src = '';
      // img4.src = '';
    } else if (results[0].label == "mooing") {
      img.src = 'https://img.women.com/images/images/000/116/139/large/calves.gif?1510945452';
      
    }else{
      // img.src = '';
      // img1.src = '';
      // img2.src = '';
      // img3.src = '';
      img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiA5qoxEjT33NCCK32_sNddkztOFhq1dXecw&usqp=CAU';
    }
  }
}