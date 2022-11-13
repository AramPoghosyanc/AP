class People extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index)
        this.energy = 5;
    }

    chooseCell(character) {
        super.getNewCordinates();
        return super.chooseCell(character)
    }

    mul() {
        let greyCells = this.chooseCell(0);
        let greenCells = this.chooseCell(1)
        let yellowCells = this.chooseCell(2);
        let redCells = this.chooseCell(3)
        let emptyCells = [...greyCells, ...yellowCells, ...greenCells, ...redCells]

        let newCell = random(emptyCells);

        if (newCell && this.energy >= 5) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
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

            for (var i in eaterArr) {
                if (newX == eaterArr[i].x && newY == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
                    break;
                }
            }

            let newPeople = new People(newX, newY, 4);
            peopleArr.push(newPeople);
            super.multiply = 0;
        }
    }


    eat() {
        let yellowCells = this.chooseCell(2);
        let greenCells = this.chooseCell(1)
        let redCells = this.chooseCell(3);
        let emptyCells = [...greenCells, ...yellowCells, ...redCells]
        let newCell = random(emptyCells);

        if (newCell) {
            if(this.energy<=10){
                this.energy++;
            }
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in eaterArr) {
                if (newX == eaterArr[i].x && newY == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.move()
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;        
            for (var i in peopleArr) {
                if (this.x == peopleArr[i].x && this.y == peopleArr[i].y) {
                    peopleArr.splice(i, 1);
                    break;
                }
            }

        }
    }

    move() { 
        let greyCells = this.chooseCell(0);
        let greenCells = this.chooseCell(1)
        let yellowCells = this.chooseCell(2);
        let redCells = this.chooseCell(3);
        let emptyCells = [...greyCells, ...greenCells, ...yellowCells, ...redCells]
        let newCell = random(emptyCells);
        this.energy--;
        if (newCell && this.energy>=0) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
        }
    }
}


   