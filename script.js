
var app = new Vue({
    el: '#app',
    data: {
        player1: 'Player1',
        player2: ' Player2',
        step: 2,
        gameGrid: [
            { value: "" },
            { value: "" },
            { value: "" },
            { value: "" },
            { value: "" },
            { value: "" },
            { value: "" },
            { value: "" },
            { value: "" }
        ],
        currentPlayer: '1',
        isOver: false,
        winner: ''
    },
    methods : {

        setGridBoxValue: function(gridBox){

            if(gridBox.value == ''){

                gridBox.value = this.currentPlayer;

                if(this.currentPlayer == '1'){
                    this.currentPlayer = '2';
                } else{
                    this.currentPlayer = '1';
                }
            }

            this.checkWinner();
        },

        getGridBoxClasses: function(gridBox){
            const classes = {
                'grid-box': true, 
                'background-empty': gridBox.value == '',
                'background-player1': gridBox.value == '1',
                'background-player2': gridBox.value == '2'
            }

            return classes;

        },

        checkWinner: function(){
            
            if(this.gameGrid[0].value == '1' && this.gameGrid[1].value == '1' && this.gameGrid[2].value == '1' ){
                this.winner = this.player1;
                isOver = true;
            }
            

        }

    }
});
