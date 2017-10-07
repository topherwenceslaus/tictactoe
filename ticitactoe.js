var tictactoe = {
  style:'width:100px;height:100px;margin:2px;float:left;background-color: #f9e2da;',
  player1:'X',
  player2:'O',
  turn: '',
  play:['E','E','E','E','E','E','E','E','E'],

  createLayout :  function(){
    var divWrapper = document.createElement('div');
    divWrapper.id = 'divWrapper';
    divWrapper.style= 'width:312px';
      for(var i = 0 ; i < 9;i++){
          var div = document.createElement('div');
          div.id = i;
          div.style = this.style;
          divWrapper.appendChild(div);
      }

      document.getElementsByTagName('body')[0].appendChild(divWrapper);
  },


  reteriveIndices: function(){
    var that = this, temp ='';
      this.play.filter(function(ele,i){
            if(that.turn == ele){
                temp += i;
            }
      });

      return temp;
  },


  checkRow:function(){
      var temp=this.reteriveIndices(), winningCombination = ["012","345","678"];
      this.deductCombination(winningCombination,temp );
  },

  checkColumn:function(){
    var winningCombination = ["036","147","258"],
    temp= this.reteriveIndices();
    this.deductCombination(winningCombination,temp );
  },

  deductCombination: function(arr,plays){
    var that = this;
    arr.map(function(combination){
          if(plays.indexOf(combination) > -1){
              alert("winner is " +  that.turn);
          }
      });
  },

  checkDiagonal:function(){
    var temp=this.reteriveIndices(), winningCombination = ["048","246"];
    this.deductCombination(winningCombination,temp );
  },

  decideWin: function(){
      this.checkRow();
      this.checkColumn();
      this.checkDiagonal();
  },

  decideTurn: function(index){
      this.turn = this.turn === 'X' ? 'O' :'X';
      this.play[index] = this.turn;
      return this.turn;
  },

  draw: function(event){
      var target = event.target;
      target.innerHTML = this.decideTurn(target.id);
      this.decideWin();
  },

  bindListeners: function(){
      document.getElementById('divWrapper').addEventListener('click', this.draw.bind(this));
  },

  init: function(){
    this.createLayout();
    this.bindListeners();
  }

 
}