player1name = localStorage.getItem("player1name")
player2name = localStorage.getItem("player2name")
player1score = 0
player2score = 0
document.getElementById("player1_name").innerHTML = player1name + " : "
document.getElementById("player2_name").innerHTML = player2name + " : "
document.getElementById("player1_score").innerHTML = player1score
document.getElementById("player2_score").innerHTML = player2score
document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    c1 = word.charAt(1);
    length1 = Math.floor(word.length / 2);
    c2 = word.charAt(length1)
    length2 = word.length - 1;
    c3 = word.charAt(length2);
    remove_c1 = word.replace(c1, "_")
    remove_c2 = remove_c1.replace(c2, "_")
    remove_c3 = remove_c2.replace(c3, "_")
    question_word = "<h4 id='word_display'>Q. " + remove_c3 + "</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row; document.getElementById("word").value = "";
}
q_turn="player1"
answer_turn="player2"
function check(){
    get_answer=document.getElementById("input_check_box").value
    answer=get_answer.toLowerCase();
    if (answer==word) {
        if (answer_turn=="player1") {
            player1score=player1score+1
            document.getElementById("player1_score").innerHTML=player1score
        }
        else{player2score=player2score+1
            document.getElementById("player2_score").innerHTML=player2score}
    }
    if (q_turn=="player1") {
        q_turn="player2"
        document.getElementById("player_question").innerHTML="question turn - "+player2name;
    }
    else{
        q_turn="player1"
        document.getElementById("player_question").innerHTML="question turn - "+player1name;
    }
    if (answer_turn=="player1") {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn - "+player2name;
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn - "+player1name;
    }
    document.getElementById("output").innerHTML=""
}