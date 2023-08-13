class Pemain {
    constructor(nama, health = 100, power = 10) {
      this.nama = nama;
      this.health = health;
      this.power = power;
    }
  
    pukul(power) {
      this.health -= power;
    }
  
    gunakanItem(item) {
      if (item.health === 10) {
        this.health += 10;
      } else if (item.power === 10) {
        this.power += 10;
      }
    }
  
    showStatus() {
      console.log(`${this.nama} (health => ${this.health}, power => ${this.power})`);
    }
  }
  
  class GameMenembak {
    constructor(player_A, player_B) {
      this.player_A = player_A;
      this.player_B = player_B;
    }
  
    getRandomItem() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return { health: 10, power: 0 };
      } else {
        return { health: 0, power: 10 };
      }
    }
  
    awal() {
      while (this.player_A.health > 0 && this.player_B.health > 0) {
        console.log("Status Pemain Sebelum Menembak:");
        this.player_A.showStatus();
        this.player_B.showStatus();
  
        const itemplayer_A = this.getRandomItem();
        const itemplayer_B = this.getRandomItem();
  
        console.log("Pemain mendapatkan item acak:");
        console.log(`${this.player_A.nama}: health +${itemplayer_A.health}, power +${itemplayer_A.power}`);
        console.log(`${this.player_B.nama}: health +${itemplayer_B.health}, power +${itemplayer_B.power}`);
  
        this.player_A.gunakanItem(itemplayer_A);
        this.player_B.gunakanItem(itemplayer_B);
  
        console.log("Status Pemain Setelah Menembak:");
        this.player_A.showStatus();
        this.player_B.showStatus();
  
        this.player_A.pukul(this.player_B.power);
        this.player_B.pukul(this.player_A.power);
  
        if (this.player_A.health <= 0) {
          console.log(`${this.player_B.nama} adalah pemenang!`);
          break;
        } else if (this.player_B.health <= 0) {
          console.log(`${this.player_A.nama} adalah pemenang!`);
          break;
        }
      }
    }
  }
  
  const player_A = new Pemain("player A");
  const player_B = new Pemain("player B");
  
  const game = new GameMenembak(player_A, player_B);
  game.awal();
  