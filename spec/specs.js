describe('encrypt', function() {

  it('does it right', function() {
    expect(encrypt("four!$%^$%^#$^")).to.equal("fuor")
    expect(encrypt("hello you")).to.equal("hloeo uly")
    expect(encrypt("don't compare yourself to others, compare yourself to the person you were yesterday")).
      to.equal("drfcu hotoe toreu enyom spwrt oopee edcut alrra orhrf seyms eetoy peryo neals otys");
  });
});

// this is a string!@#$%^&*()_+=-'<>:
