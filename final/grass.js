class Grass extends LivingCreature{
    
    mul () {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        
        if(newCell && this.multiply >= 6){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
 
            let newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}