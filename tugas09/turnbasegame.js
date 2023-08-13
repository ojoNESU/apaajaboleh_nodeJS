class Player {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.attack = 10;
    }
  
    takeDamage(damage) {
      this.health -= damage;
    }
  
    attackEnemy(enemy) {
      console.log(`${this.name} menyerang ${enemy.name} dengan serangan sebesar ${this.attack}`);
      enemy.takeDamage(this.attack);
    }
  }
  
  class Game {
    constructor(player1, player2) {
      this.players = [player1, player2];
      this.currentPlayerIndex = 0;
    }
  
    switchTurn() {
      this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }
  
    start() {
      console.log('Permainan dimulai!');
      const player1 = this.players[0];
      const player2 = this.players[1];
  
      while (player1.health > 0 && player2.health > 0) {
        const currentPlayer = this.players[this.currentPlayerIndex];
        const opponent = this.players[1 - this.currentPlayerIndex];
  
        currentPlayer.attackEnemy(opponent);
  
        console.log(`${opponent.name} memiliki sisa kesehatan ${opponent.health}`);
  
        if (opponent.health <= 0) {
          console.log(`${opponent.name} kalah!`);
          break;
        }
  
        this.switchTurn();
      }
  
      console.log('Permainan berakhir.');
    }
  }
  
  const player1 = new Player('Pemain 1');
  const player2 = new Player('Pemain 2');
  
  const game = new Game(player1, player2);
  game.start();
  