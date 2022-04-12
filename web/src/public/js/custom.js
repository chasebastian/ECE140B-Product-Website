const input = document.getElementById("card_number");

input.onkeydown = pad;

function pad(e) {
    var stripped_string = input.value.replace(/ /g,"");
    if(stripped_string.length > 0) {
        if(stripped_string.length % 4 == 0) {
            input.value += " ";
        }
    }
}