
module.exports = function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.newd = [];
    this.total = 0;
  
      // Finds difference for each of the scores
    this.newArray = function (cr) {
      var differences = [];

      var v = this.newd[0];
  
      for (let i = 0; i < 4; i++) {
        //   Difference between this.scores and req.body scores
        var diff = Math.abs(v[i] - cr[i]);
  
        // console.log(diff);
        // Globalize
        differences.push(diff);
      }
      // this.newd.push(differences);
      return this.total = differences;
    };


    // Must be used with .map method
    this.parsed = function(x) {
      return parseInt(x);
    }
  }