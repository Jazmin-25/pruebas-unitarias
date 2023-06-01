const { test } = require("./main.js");

test("Suma dos números  2 + 2 =4",
     () => {
        expect(suma(2,2)).toBe(4);
     }
);
test("Sumar dos números 20 + 20 =40",
() => {
    expect(suma(20,20)).toBe(40);
}
);