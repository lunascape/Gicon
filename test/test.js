// var assert = require("assert");
var fs = require("fs");
var gicon = require("../index");
var assert = require('assert');

describe("GetPath", function() {
  this.timeout(10000);

  it("get the favicon.ico", function(done) {
    gicon.favicon("www.baidu.com", function(err, path) {
      if(err) { throw err; }
      done();
    });
  });

  it("get the other type favicon from website", function(done) {
    gicon.favicon("requirejs.org", function(err, path) {
      if(err) { throw err; }
      done();
    });
  });

  it("get the favicon file buffer", function(done) {
    gicon.favicon("github.com", function(err, path, buffer) {
      if(err) { throw err; }
      // fs.writeFileSync("github.com.png", buffer);
      done();
    });
  });

  it("shortcut icon no base url", function(done) {
    gicon.favicon("facebook.github.io/react", function(err, path, buffer) {
      if(err) { throw err; }
      console.log(JSON.stringify(path));
      assert.ok(path.length);
      done();
    });
  });

  it("shortcut icon relative base url", function(done) {
    gicon.favicon("facebook.github.io/react-native", function(err, path, buffer) {
      if(err) { throw err; }
      console.log(JSON.stringify(path));
      assert.ok(path.length);
      done();
    });
  });

  it("shortcut icon full base url", function(done) {
    gicon.favicon("http://tuvivietnam.vn/", function(err, path, buffer) {
      if(err) { throw err; }
      console.log(JSON.stringify(path));
      assert.ok(path.length);
      done();
    });
  });

  it("site has redirect", function(done) {
    gicon.favicon("facebook.github.io", function(err, path, buffer) {
      if(err) { throw err; }
      console.log(JSON.stringify(path));
      assert.ok(path.length);
      done();
    });
  });

  it("No specify icon", function(done) {
    gicon.favicon("https://www.raywenderlich.com/36475", function(err, path, buffer) {
      if(err) { throw err; }
      console.log(JSON.stringify(path));
      assert.ok(path.length);
      done();
    });
  });
});
