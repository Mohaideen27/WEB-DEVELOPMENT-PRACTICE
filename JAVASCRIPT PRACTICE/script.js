var expect = function (val) {
  return {
    equal: function (expectedVal) {
      if (val === expectedVal) {
        return console.log(true);
      } else {
        throw new Error("Not Equal");
      }
    },
    notequal: function (expectedVal) {
      if (val !== expectedVal) {
        return console.log(true);
      } else {
        throw new Error("Equal");
      }
    },
  };
};

expect(5).equal(5); // true
expect(5).notequal(6); // throws "Equal"
expect(5).equal(6); // throws "Equal"
expect(5).notequal(5); // throws "Equal"
