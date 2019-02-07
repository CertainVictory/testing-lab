/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(things) {
        this.amountDue = things.amountDue;
        this.cashTendered = 0;
        this.type = things.type;
        this.quarter = 25;
        this.dime = 10;
        this.nickel = 5;
        this.penny = 1;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        this.cashTendered += type;
        // const quarter = 25;
        if (this.type === this.quarter){
            this.cashTendered + this.quarter;
        } if (this.type === this.dime){
            this.cashTendered + this.dime;
        } if (this.type === this.nickel){
            this.cashTendered + this.nickel;
        } if (this.type === this.penny){
            this.cashTendered + this.penny;
        }



    //  if (type === quarter) {
    //      cashTendered + quarter;
    //      return cashTendered;
    //  }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
    }

    giveChange() {
        // TODO return the correct change in the following format...
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}


// const vendingMachine = new ChangeHandler(100)