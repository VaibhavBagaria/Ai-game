function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tgoDAMksc/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        var_sound = "";
        if (results[0].label == "Clap") {
            var_sound = "Clap";
        } else if (results[0].label == "Snap") {
            var_sound = "Snap";
        } else if (results[0].label == "Bark") {
            var_sound = "Bark";
        } else if (results[0].label == "Whistle") {
            var_sound = "Whistle";
        } else {
            var_sound = "Meow";
        }

        numberGenerator = Math.floor(Math.random() * 5) + 1
        console.log(numberGenerator);
        Ai_emoji = "";
        if (numberGenerator == 1) {
            Ai_emoji = "👏";
            document.getElementById("result_emoji").innerHTML = "Emoji - " + Ai_emoji;
        } else if (numberGenerator == 2) {
            Ai_emoji = "Snap";
            document.getElementById("result_emoji").innerHTML = "Emoji - " + Ai_emoji;
        } else if (numberGenerator == 3) {
            Ai_emoji = "🎵";
            document.getElementById("result_emoji").innerHTML = "Emoji - " + Ai_emoji;
        } else if (numberGenerator == 4) {
            Ai_emoji = "🐶";
            document.getElementById("result_emoji").innerHTML = "Emoji - " + Ai_emoji;
        } else {
            Ai_emoji = "😺";
            document.getElementById("result_emoji").innerHTML = "Emoji - " + Ai_emoji;
        }

        score = 0;
        if (numberGenerator = 1 && var_sound == "Clap") {
            score = score + 1;
            document.getElementById("result_score").innerHTML = "Score= " + score
            numberGenerator = Math.floor(Math.random() * 5) + 1
            console.log(numberGenerator);
        }
        else if (numberGenerator = 2 && var_sound == "Snap") {
            score = score + 1;
            document.getElementById("result_score").innerHTML = "Score= " + score
            numberGenerator = Math.floor(Math.random() * 5) + 1
            console.log(numberGenerator);

        }
        else if (numberGenerator = 3 && var_sound == "Whistle") {
            score = score + 1;
            document.getElementById("result_score").innerHTML = "Score= " + score
            numberGenerator = Math.floor(Math.random() * 5) + 1
            console.log(numberGenerator);
            
        }
        else if (numberGenerator = 4 && var_sound == "Bark") {
            score = score + 1;
            document.getElementById("result_score").innerHTML = "Score= " + score
            numberGenerator = Math.floor(Math.random() * 5) + 1
            console.log(numberGenerator);
        
        }
        else if (numberGenerator = 5 && var_sound == "Meow") {
            score = score + 1;
            document.getElementById("result_score").innerHTML = "Score= " + score
            numberGenerator = Math.floor(Math.random() * 5) + 1
            console.log(numberGenerator);

        }
    }
}

