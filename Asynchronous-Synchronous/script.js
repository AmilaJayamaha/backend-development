function syncCode() {
    var outputText = "";
    outputText += "Going to kitchen\n";
    outputText += "Put water to the kettle\n";
    outputText += "Plug the kettle\n";
    outputText += "Water boils for 5mins. I'm waiting till it's boiled.\n";
    outputText += "Water is boiled. Now I put sugar and tea leaves to a cup\n";
    outputText += "Pour water into the cup and stir\n";
    document.getElementById('sync-output').innerText = outputText;
}

function asyncCode() {
    var outputText = "";
    outputText += "Going to kitchen\n";
    outputText += "Put water to the kettle\n";
    outputText += "Plug the kettle\n";
    outputText += "Water will boil for 5mins. I'll do some other stuff\n";
    setTimeout(function() {
        // Water is boiling for 5 mins and then this code will execute (5 seconds)
        outputText += "WATER IS BOILED NOW\n";
        outputText += "Pour water into the cup and stir\n";
        document.getElementById('async-output').innerText = outputText;
    },5000)
    outputText += "Water is still boiling, until then I put sugar and tea leaves to a cup\n";
    document.getElementById('async-output').innerText = outputText;
}
