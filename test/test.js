"use strict";

var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("testing", function() {	
	this.timeout(1500);
  describe("testing logo", function() {
  it("should go to Blue Jackets' homepage", function(done) {
	var nightmare = Nightmare();
	nightmare ({ show: true })
	  .goto("http://localhost:8080/")
	  .click("#bluejackets")
	  .screenshot("bluejSS.png")
	  .evaluate(function() {
		return document.page;
	})
	.end()
	.then(function(page) {
	  expect(page).to.equal("http://localhost:8080/bluejackets/");
	  done();
	});
	});
});

//   it("should go to the Blue Jackets' schedule")	
//    nightmare({ show: true })
//     .goto("http://localhost:8080/")
//     .click("#bluejackets")
//     .click("#bluej")
//     .screenshot("bluesche.png")
//     .scrollto(4736, 0)
//     .screenshot("opponents.png")
//     .evaluate(function() {
// 	  return document.querySelector("a[href='/bluejackets/schedule']");
//   })
//   .then(function(schedule) {
// 	expect(schedule).to.not.equal(undefined);
// 	done();
//   });
// });
