// ===============================================================================
// DATA
// ===============================================================================
function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
  this.newd = [];
  this.total = 0;

      // Finds difference for each of the scores
      this.newArray = function (cr) {
        var differences = [];
  
        var v = this.newd[0];
        console.log("v:", v);
    
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

const d = [

  new Friend("Santa Claus", "https://r.hswstatic.com/w_907/gif/santa-claus-orig.jpg", ["5", "2", "5", "20"]),
  new Friend("Johnny Applesauce", "https://visitjulian.com/wp-content/uploads/2018/08/johnny-appleseed.jpg", ["3", "2", "6", "100"]),
  new Friend("Aladdin", "https://is3-ssl.mzstatic.com/image/thumb/Video60/v4/27/7d/fe/277dfef2-0682-0efe-9a6b-642df2c36724/pr_source.jpg/320x0w.jpg",["10", "9", "10", "45"]),
  new Friend("Reptile", "https://www.nationalgeographic.com/content/dam/animals/pictures/hero/reptiles-hero.jpg",["1", "2", "4", "82"]),
  new Friend("Horse", "https://thehorse.com/wp-content/uploads/2017/09/paint-horse-running-in-field.jpg",["6", "3", "6", "29"]),
  new Friend("Rick Ross", "https://static.hiphopdx.com/2018/03/180304-Rick-Ross-Health-IG-800x600.jpg", ["6", "6", "6", "51"]),
  new Friend("Shark", "https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMy8yNzgvb3JpZ2luYWwvbWVnYWxvZG9uLmpwZw==", ["5", "2", "6", "0"])

  ];
module.exports = d;