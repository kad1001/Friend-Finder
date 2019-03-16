// ===============================================================================
// DATA
// Below data will hold all of the user information (survey data)
// ===============================================================================

// function Friend(name, photo, scores){
//     this.name = name;
//     this.photo = photo;
//     this.scores = scores
// }

// new Friend("Johnny Applesauce", "apples", ["2", "3", "2", "4"]);

    // function getScores(item) {
    //   // puts the /api/friends body contents into an array for comparison
    // //   var scores = item.scores;
    //   for (i = 0; i < this.scores.length; i++) {
    //     this.scores[i] = parseInt(this.scores[i])
    //   }
    //   console.log(this.scores);
    // }

var friendsData = [{
        name: "Santa Claus",
        photo: "https://r.hswstatic.com/w_907/gif/santa-claus-orig.jpg",
        scores: ["5", "2", "5", "20"]
    },
    {
        name: "Johnny Applesauce",
        photo: "https://visitjulian.com/wp-content/uploads/2018/08/johnny-appleseed.jpg",
        scores: ["3", "2", "6", "100"]
    },
    {
        name: "Aladdin",
        photo: "https://is3-ssl.mzstatic.com/image/thumb/Video60/v4/27/7d/fe/277dfef2-0682-0efe-9a6b-642df2c36724/pr_source.jpg/320x0w.jpg",
        scores: ["10", "9", "10", "45"]
    },
    {
        name: "Reptile",
        photo: "https://www.nationalgeographic.com/content/dam/animals/pictures/hero/reptiles-hero.jpg",
        scores: ["1", "2", "4", "82"]
    },
    {
        name: "Horse",
        photo: "https://thehorse.com/wp-content/uploads/2017/09/paint-horse-running-in-field.jpg",
        scores: ["6", "3", "6", "29"]


    }

];


// makes it accessible to other files using require.
module.exports = friendsData;