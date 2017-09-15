"use strict";

var Nightmare = require("nightmare");
var expect = require("chai").expect;

  describe("testing logo", function() {
	  this.timeout(20000);
  it("should go to Blue Jackets' homepage", function(done) {
	Nightmare ({ show: true })
	  .goto("http://localhost:8080/")
	  .wait(2000)
	  .click("#bluejackets")
	  .screenshot("bluejSS.png")
	  .evaluate(function() {
		return document.title;
	})
	.end()
	.then(function(title) {
	  expect(title).to.equal("NHL Fanatics");
	  done();
	});
	});
});

describe("test2", function() {
	this.timeout(20000);
  it("should go to the Blue Jackets' schedule")	
   Nightmare({ show: true })
    .goto("http://localhost:8080/bluejackets/")
    .click("#bluej")
    .screenshot("bluesche.png")
    .scrollTo(2000, 0)
    .screenshot("opponents.png")
    .evaluate(function() {
	  return document.querySelector("a[href='/bluejackets/schedule']");
  })
  .then(function(schedule) {
	expect(schedule).to.not.equal(undefined);
	done();
  });
});
