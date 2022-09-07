var EmpytShip = new Ship(12, 12);
var shipEmpyt = new Ship(1, 10);

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Ship.prototype.muatanKapal = function() {
    muatan = this.draft + (this.crew * 1.5);
    if(muatan > 20) {
      return 'lebih banyak muatan orangnya';
    }
    else {
      return 'Banyak nih muatan kapalnya';
    }
}

console.log(EmpytShip.muatanKapal())
console.log(shipEmpyt.muatanKapal())
