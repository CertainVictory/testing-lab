// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function () {
    // Set up a test below...
    it("initializes with given values", function () {
        //Arranging information for this test
        var payMe = new ChangeHandler({
            amountDue: 10
        });
        //Assert (Assertion) below
        expect(payMe.amountDue).toBe(10);
    });
    it("verifies cashTendered", function () {
        var cash = new ChangeHandler({
            cashTendered: 0
        });
        //Assert (Assertion) bleow
        expect(cash.cashTendered).toBe(0);
    });


    //=================END CONST TESTS=================

    //-----------------BEGIN FUNCTION TESTS-----------------


    it("verifies insertCoin(quarter) adds 25 to cashTendered", function () {
        const quarter = 25
        var coin = new ChangeHandler({
            amountDue: 25,
            cashTendered: 0,
            type: quarter,

        })
        //Act
        coin.insertCoin(quarter)
        //Assert
        expect(coin.cashTendered).toEqual(25);
    })
    it("verifies insertCoin(dime) adds 10 to cashTendered", function () {
        const dime = 10
        var coin = new ChangeHandler({
            amountDue: 10,
            cashTendered: 0,
            type: dime,

        })
        //Act
        coin.insertCoin(dime)
        //Assert
        expect(coin.cashTendered).toEqual(10);
    })
    it("verifies insertCoin(nickel) adds 5 to cashTendered", function () {
        const nickel = 5
        var coin = new ChangeHandler({
            amountDue: 5,
            cashTendered: 0,
            type: nickel,

        })
        //Act
        coin.insertCoin(nickel)
        //Assert
        expect(coin.cashTendered).toEqual(5);
    })
    it("verifies insertCoin(penny) adds 1 to cashTendered", function () {
        const penny = 1
        var coin = new ChangeHandler({
            amountDue: 1,
            cashTendered: 0,
            type: penny,

        })
        //Act
        coin.insertCoin(penny)
        //Assert
        expect(coin.cashTendered).toEqual(1);
    })
});
