// A constructor to make new friends 
var Friends = function (name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
};

//new friends built into the database. Not ones that get added throught the UI
var friendOne = new Friends ("Jeff", "https://img.buzzfeed.com/buzzfeed-static/static/2014-09/1/11/campaign_images/webdr11/16-blissful-moments-from-jeff-winger-on-community-2-8099-1409585315-1_dblbig.jpg", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]);
var friendTwo = new Friends ("Abed", "https://zombiesruineverything.files.wordpress.com/2015/04/screen-shot-2015-04-22-at-10-28-08-pm.png", [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]);
var friendThree = new Friends ("Britta","https://wheregoodthoughtsgotodie.files.wordpress.com/2014/08/britta.jpg", [1,1,1,1,1,3,3,4,5,1] )


console.log(friendOne);
console.log(friendTwo);
console.log(friendThree);