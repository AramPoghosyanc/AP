class Eater extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 3;
    }

   
    chooseCell(character) {
        super.getNewCordinates();
        return super.chooseCell(character);
     }

    mul() {
        let greyCells = this.chooseCell(0);
        let greenCells = this.chooseCell(1);
        let yellowCells = this.chooseCell(2);
        let emptyCells = [...greenCells, ...greyCells, ...yellowCells]

        let newCell = random(emptyCells);

        if (newCell && this.energy >= 10) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            let newEater = new Eater(newX, newY, 3);
            eaterArr.push(newEater);
            super.multiply = 0;
        }
    }


    eat() {
        let greenCells = this.chooseCell(1);
        let yellowCells = this.chooseCell(2);
        let emptyCells = [...greenCells, ...yellowCells]
        let newCell = random(emptyCells);

        if (newCell) {
            if(this.energy<=10){
                this.energy++;
            }
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            
        }
        else{
            this.move()
        }
    }

    
    die(){
        if (this.energy <= 0) {
         matrix[this.y][this.x] = 0;        
            for (var i in eaterArr) {
             if (this.x == eaterArr[i].x && this.y == eaterArr[i].y) {
                  eaterArr.splice(i, 1);
                  break;
             }
            }
    
         }
    }
    
    

    move() { 
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        this.energy--;
        if (newCell && this.energy>=0) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
        }
    }
}