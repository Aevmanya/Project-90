function adduser(){
player1_name= document.getElementById("player1_name_input").value;
player2_name= document.getElementById("player2_name_input").value;
    
localStorage.setItem("Player_1_name", player1_name);
localStorage.setItem("Player_2_name", player2_name);
    
window.location= "quiz_game_page.html";
}