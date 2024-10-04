// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          calculateArea});
      
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
      
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(10, 47)).toEqual(470);
          });
      
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("a",true)).toEqual(undefined);
            expect(calculateArea("12", 3)).toEqual(undefined);
            expect(calculateArea(1, "4")).toEqual(undefined);
          });

    })   
})  
