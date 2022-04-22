describe("The bookingCost Function", function () {
  it("should return the total amount of booking on Monday", function () {
    assert.equal(
      135.0,
      bookingCost({
        check_in_day: "Monday",
        duration: 3,
        cat_name: "Snowy",
      })
    );
  });
  it("should return the total amount of booking on Wednesday", function () {
    assert.equal(
      101.25,
      bookingCost({
        check_in_day: "Wednesday",
        duration: 3,
        cat_name: "Snowy",
      })
    );
  });
  it("should return the total amount of booking on Friday", function () {
    assert.equal(
      114.75,
      bookingCost({
        check_in_day: "Friday",
        duration: 3,
        cat_name: "Snowy",
      })
    );
  });
});
