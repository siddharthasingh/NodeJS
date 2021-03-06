describe("Testing Two Numbers", function() {
	var a = 4;
	var b = 3;
    it("Add Numbers", function() {
        expect(addTwoNumber(a,b,false)).toEqual(7);
    });
    it("Multiply Numbers", function() {
        expect(multiplyTwoNumber(a,b,false)).toEqual(12);
    });
 
    it("Compare Numbers to be Greater Than", function() {
    	expect(a).toBeGreaterThan(b);
    });
 
    it("Compare Numbers to be Less Than", function() {
    	expect(b).toBeLessThan(a);
    });
});
