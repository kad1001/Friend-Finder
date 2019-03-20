
module.exports = function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.newd = [];
    this.total = 0;
  
    this.newArray = function (current) {
      var differences = [];
      var w = this.scores;
  
      for (let i = 0; i < this.scores.length; i++) {
        //   Difference between this.scores and req.body scores
        var diff = Math.abs(w[i] - current[i]);
        // Globalize
        differences.push(diff);
      }
      this.newd.push(differences);
    };
  }