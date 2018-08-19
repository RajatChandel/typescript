var FacebookAbout = /** @class */ (function () {
    function FacebookAbout(name, work, college, highschool, currentcity, hometown, movies, tvshows, music, sports, phonenumber, emailAddress, age, sociallinks, dateofbirth, gender, languages, relationship, familymembers, AboutMe, nickname, totalFriends, numposts) {
        var _this = this;
        this.name = name;
        this.work = work;
        this.college = college;
        this.highschool = highschool;
        this.currentcity = currentcity;
        this.hometown = hometown;
        this.movies = movies;
        this.tvshows = tvshows;
        this.music = music;
        this.sports = sports;
        this.phonenumber = phonenumber;
        this.emailAddress = emailAddress;
        this.age = age;
        this.sociallinks = sociallinks;
        this.dateofbirth = dateofbirth;
        this.gender = gender;
        this.languages = languages;
        this.relationship = relationship;
        this.familymembers = familymembers;
        this.AboutMe = AboutMe;
        this.nickname = nickname;
        this.totalFriends = totalFriends;
        this.numposts = numposts;
        this.getname = function () {
            return _this.name;
        };
        this.setname = function (name) {
            _this.name = name;
        };
        this.getwork = function () {
            return _this.work;
        };
        this.setwork = function (work) {
            _this.work.push(work);
        };
        this.getnumposts = function () {
            return _this.numposts;
        };
        this.getcollege = function () {
            return _this.college;
        };
        this.setcollege = function (college) {
            _this.college.push(college);
        };
        this.gethighschool = function () {
            return _this.highschool;
        };
        this.sethighschool = function (highschool) {
            _this.highschool.push(highschool);
        };
        this.getcurrentcity = function () {
            return _this.currentcity;
        };
        this.setcurrentcity = function (currentcity) {
            _this.currentcity = currentcity;
        };
        this.gethometown = function () {
            return _this.hometown;
        };
        this.sethometown = function (hometown) {
            _this.hometown = hometown;
        };
        this.getphonenumber = function () {
            return _this.phonenumber;
        };
        this.setphonenumber = function (phonenumber) {
            _this.phonenumber = phonenumber;
        };
        this.getemailAddresss = function () {
            return _this.emailAddress;
        };
        this.getage = function () {
            return _this.age;
        };
        this.getsociallinks = function () {
            return _this.sociallinks;
        };
        this.setsociallinks = function (sociallinks) {
            _this.sociallinks.push(sociallinks);
        };
        this.getdateofbirth = function () {
            return _this.dateofbirth;
        };
        this.setdateofbirth = function (dateofbirth) {
            _this.dateofbirth = dateofbirth;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getlanguages = function () {
            return _this.languages;
        };
        this.setlanguages = function (languages) {
            _this.languages.push(languages);
        };
        this.gettvshows = function () {
            return _this.tvshows;
        };
        this.settvshows = function (tvshow) {
            _this.languages.push(tvshow);
        };
        this.getMovies = function () {
            return _this.movies;
        };
        this.setMovies = function (movie) {
            _this.languages.push(movie);
        };
        this.getrelationship = function () {
            return _this.relationship;
        };
        this.setrelationship = function (relationship) {
            _this.relationship = relationship;
        };
        this.getfamilymembers = function () {
            return _this.familymembers;
        };
        this.setfamilymembers = function (familymembers) {
            _this.familymembers.push(familymembers);
        };
        this.getAboutMe = function () {
            return _this.AboutMe;
        };
        this.setAboutMe = function (AboutMe) {
            _this.AboutMe = AboutMe;
        };
        this.getMusic = function () {
            return _this.music;
        };
        this.setMusic = function (music) {
            _this.languages.push(music);
        };
        this.getSports = function () {
            return _this.sports;
        };
        this.setSports = function (sport) {
            _this.sports.push(sport);
        };
        this.getnickname = function () {
            return _this.nickname;
        };
        this.setnickname = function (nickname) {
            _this.nickname.push(nickname);
        };
        this.gettotalFriends = function () {
            return _this.totalFriends;
        };
        this.name = name;
        this.work = work;
        this.music = music;
        this.college = college;
        this.sports = sports;
        this.highschool = highschool;
        this.numposts = numposts;
        this.currentcity = currentcity;
        this.hometown = hometown;
        this.movies = movies;
        this.tvshows = tvshows;
        this.phonenumber = phonenumber;
        this.emailAddress = emailAddress;
        this.age = age;
        this.sociallinks = sociallinks;
        this.dateofbirth = dateofbirth;
        this.gender = gender;
        this.languages = languages;
        this.relationship = relationship;
        this.familymembers = familymembers;
        this.AboutMe = AboutMe;
        this.nickname = nickname;
        this.totalFriends = totalFriends;
    }
    FacebookAbout.prototype.getfriendsfromwork = function () {
        console.log("friends from work");
    };
    FacebookAbout.prototype.getcollegemates = function () {
        console.log("Your college mates");
    };
    FacebookAbout.prototype.getfriendswithsamehighschool = function () {
        console.log("Friends from high school");
    };
    FacebookAbout.prototype.getfriends = function () {
        console.log("Friend list");
    };
    FacebookAbout.prototype.getfollowing = function () {
        console.log("People you follow");
    };
    FacebookAbout.prototype.getPhotos = function () {
        console.log("Photos");
    };
    FacebookAbout.prototype.getTotalNumberofGroups = function () {
        console.log("your groups");
    };
    FacebookAbout.prototype.getTotalCheckins = function () {
        console.log("you have checked in these places");
    };
    FacebookAbout.prototype.getTotalLikedPages = function () {
        console.log("Liked pages");
    };
    FacebookAbout.prototype.getTotalBooks = function () {
        console.log("total Books");
    };
    FacebookAbout.prototype.getTagPhotos = function () {
        console.log("These are your Tagged Photos");
    };
    FacebookAbout.prototype.getAlbum = function () {
        console.log("Albums");
    };
    FacebookAbout.prototype.getGroups = function () {
        console.log("These are your gropus");
    };
    FacebookAbout.prototype.getpagesliked = function () {
        console.log("pages you like");
    };
    FacebookAbout.prototype.getBooks = function () {
        console.log("Books");
    };
    FacebookAbout.prototype.getEvents = function () {
        console.log("Events");
    };
    return FacebookAbout;
}());
var MyProfile = new FacebookAbout("Rajat Kumar", ["student", "engineer"], ["jaypee university of information technology"], ["St. Mary's school , Sundernagar", "D.A.V Public school Nerchowk"], "Bangaluru", "Mandi", ["The Shinning", "Shawshank Redemption", "Goodfellas"], ["Friends", "Game of thrones", "breaking bad"], ["rock", "blues", "heavy metal", "rock n roll"], ["Cricket", "football", "Tennis", "volleyball"], 897887656, "xxcr8789@gmail.com", 21, ["instagram", "snapchat"], "21st may 1996", "Male", ["English", "Hindi", "Spanish"], "Single", ["Ajay", "Arti", "Namita"], "upcoming mean-stack-developer", ["Dante"], 120, 87);
console.log("About");
console.log("Name :", MyProfile.name);
console.log("Works at :", MyProfile.work);
console.log("Studied at :", MyProfile.college);
console.log("Lives in :", MyProfile.currentcity);
console.log("From :", MyProfile.hometown);
console.log("Relationship status :", MyProfile.relationship);
console.log("Age :", MyProfile.getage());
console.log("Relationship status :", MyProfile.getrelationship());
console.log("Work and education:-");
console.log("Work :", MyProfile.getwork());
console.log("college :", MyProfile.getcollege());
console.log("School :", MyProfile.gethighschool());
console.log("Contact info :-");
console.log("phone nunmber:", MyProfile.getphonenumber());
console.log("email Address :", MyProfile.getemailAddresss());
console.log("Socials :", MyProfile.getsociallinks());
console.log("Date of birth :", MyProfile.getdateofbirth());
console.log("Gender :", MyProfile.getgender());
console.log("Languages :", MyProfile.getlanguages());
console.log("Family members on facebook", MyProfile.getfamilymembers());
console.log("Details about you :-");
console.log("About Me:", MyProfile.getAboutMe());
console.log("Nickname:", MyProfile.getnickname());
console.log("Total Friends:", MyProfile.gettotalFriends());
console.log("Number of posts", MyProfile.getnumposts());
console.log("Likes : ");
console.log("Movies :", MyProfile.getMovies());
console.log("Tv Shows :", MyProfile.gettvshows());
console.log("Music Geners :", MyProfile.getMusic());
console.log("Sports :", MyProfile.getSports());
console.log("Updated fields:::------");
var newname = MyProfile.setname("Rajat Chandel");
console.log("Name :", MyProfile.getname());
var newdateofbirth = MyProfile.setdateofbirth("22 june 1998");
console.log("Date Of Birth :", MyProfile.getdateofbirth());
var newcollege = MyProfile.setcollege("NIT Hamirpur");
console.log("college added :", MyProfile.getcollege());
var newschool = MyProfile.sethighschool("St Beads");
console.log("Highschool added:", MyProfile.gethighschool());
var newsociallinks = MyProfile.setsociallinks("tinder");
console.log("Socials:", MyProfile.getsociallinks());
var Currentcity = MyProfile.setcurrentcity("Bangalore");
console.log("current city :", MyProfile.getcurrentcity());
var newwork = MyProfile.setwork("EDWISOR.COM");
console.log("work :", MyProfile.getwork());
var newphonenumber = MyProfile.setphonenumber(878765676);
console.log("phone number added :", MyProfile.getphonenumber());
var newnivkname = MyProfile.setnickname("Kumar");
console.log("nicknames :", MyProfile.getnickname());
console.log("languages :", MyProfile.getlanguages());
var newrelationship = MyProfile.setrelationship("Married");
console.log("Updated relationship status:", MyProfile.getrelationship());
var newAboutMe = MyProfile.setAboutMe("My new about me");
