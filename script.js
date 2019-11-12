var level,corectAnswer,isPlaying,loseOption;

init();

document.querySelector('.option-0').addEventListener('click', function(){
    checkAnswer(this.id);
});
document.querySelector('.option-1').addEventListener('click', function(){
    checkAnswer(this.id);
});
document.querySelector('.option-2').addEventListener('click', function(){
    checkAnswer(this.id);
});
document.querySelector('.option-3').addEventListener('click', function(){
    checkAnswer(this.id);
});

document.getElementById('newgame').addEventListener('click', init);


function newLevel() {
    document.getElementById("level-number").textContent = "Level : " + level;

    var color = newColor(); 
    var options = [newColor(),newColor(),newColor()];
    var correctOption = Math.floor(Math.random() * 4);   
    
    corectAnswer = 'option-'+correctOption;    
    document.querySelector('.option-'+correctOption).style.backgroundColor = 'rgb('+color.r+','+color.g+','+color.b+')';    
    
    for (var i = 0 ; i < 4 ; i++){
        if (i !== correctOption) {
            var newOption = newColor();
                document.querySelector('.option-'+i).style.backgroundColor = 'rgb('+newOption.r+','+newOption.g+','+newOption.b+')';            
        }        
    }    
    document.querySelector('.color-1').style.backgroundColor = 'rgb('+color.r+',256,256)';
    document.querySelector('.color-2').style.backgroundColor = 'rgb(256,'+color.g+',256)';
    document.querySelector('.color-3').style.backgroundColor = 'rgb(256,256,'+color.b+')';     
}


function newColor() {
    var color = {
        r : Math.floor(Math.random() * 265),
        g : Math.floor(Math.random() * 265),
        b : Math.floor(Math.random() * 265)
    }    
    return color;
}

function checkAnswer(id){
    if (isPlaying){
        if (id === corectAnswer){
            win();
        } else {
            loseOption = id;     
            document.querySelector('body').classList.add('losegame');
            document.getElementById(id).classList.add('lose') ;
            document.getElementById(corectAnswer).classList.add('win') ;
            isPlaying = false;

        }
    }    
}

function win(){
    level += 1;
    newLevel(); 

}

function init() {
    level = 0 ;
    isPlaying = true;
    if (loseOption)
    document.getElementById(loseOption).classList.remove('lose');
    document.querySelector('body').classList.remove('losegame');

    if (corectAnswer)
    document.getElementById(corectAnswer).classList.remove('win');
    newLevel();    
}