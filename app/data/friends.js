// ===============================================================================
// DATA
// Below data will hold all of the user information (survey data)
// ===============================================================================

function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.newd = [];
    this.total = 0;
  
    this.newArray = function(current) {
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
  var examples = [];

  var Santa = new Friend("Santa Claus", "https://r.hswstatic.com/w_907/gif/santa-claus-orig.jpg", ["5", "2", "5", "20"]);
  var Applesauce = new Friend("Johnny Applesauce", "https://visitjulian.com/wp-content/uploads/2018/08/johnny-appleseed.jpg", ["3", "2", "6", "100"]);
  var Aladdin = new Friend("Aladdin", "https://is3-ssl.mzstatic.com/image/thumb/Video60/v4/27/7d/fe/277dfef2-0682-0efe-9a6b-642df2c36724/pr_source.jpg/320x0w.jpg",["10", "9", "10", "45"]);
  var Reptile = new Friend("Reptile", "https://www.nationalgeographic.com/content/dam/animals/pictures/hero/reptiles-hero.jpg",["1", "2", "4", "82"]);
  var Horse = new Friend("Horse", "https://thehorse.com/wp-content/uploads/2017/09/paint-horse-running-in-field.jpg",["6", "3", "6", "29"]);


  examples.push(Santa, Applesauce, Aladdin, Reptile, Horse);

// makes it accessible to other files using require.
module.exports = examples;