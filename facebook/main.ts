class FacebookAbout {

    constructor(public name: string,public work: string[],public college: string[],
        public highschool: string[],public currentcity: string,public hometown: string,public movies:string[],public tvshows:string[],public music:string[],public sports:string[],
        protected phonenumber: number,protected emailAddress: string,protected age: number,private sociallinks: string[],
        private dateofbirth: string,
        public gender: string, public languages: string[],
        public relationship: string,public familymembers: string[],public AboutMe: string,
        public nickname: string[],  public totalFriends: number, public numposts:number) {

        this.name = name;
        this.work = work;
        this.music=music;
        this.college = college;
        this.sports=sports;
        this.highschool = highschool;
        this.numposts=numposts;
        this.currentcity = currentcity;
        this.hometown = hometown;
        this.movies=movies;
        this.tvshows=tvshows;
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
    getname = () => {
        return this.name;
    }
    setname = (name: string) => {
        this.name = name;
    }
    getwork = () => {
        return this.work;
    }
    setwork = (work: string) => {
        this.work.push(work);

    }
    getnumposts = ()=>{
        return this.numposts;
    }
 
    getcollege = () => {
        return this.college;
    }
    setcollege = (college: string) => {
        this.college.push(college)
    }
    gethighschool = () => {
        return this.highschool;
    }
    sethighschool = (highschool: string) => {
        this.highschool.push(highschool)
    }
    getcurrentcity = () => {
        return this.currentcity;
    }
    setcurrentcity = (currentcity: string) => {
        this.currentcity = currentcity;
    }
    gethometown = () => {
        return this.hometown;
    }
    sethometown = (hometown: string) => {
        this.hometown = hometown
    }
    
    getphonenumber = () => {
        return this.phonenumber;
    }
    setphonenumber = (phonenumber: number) => {
        this.phonenumber=phonenumber
    }
    getemailAddresss = () => {
        return this.emailAddress;
    }

    getage = () => {
        return this.age;
    }
   
    getsociallinks = () => {
        return this.sociallinks;
    }
    setsociallinks = (sociallinks: string) => {
        this.sociallinks.push(sociallinks)
    }
    getdateofbirth = () => {
        return this.dateofbirth;
    }
    setdateofbirth = (dateofbirth: string) => {
        this.dateofbirth = dateofbirth
    }
    
    getgender = () => {
        return this.gender;
    }
   
   
    getlanguages = () => {
        return this.languages;
    }
    setlanguages = (languages: string) => {
        this.languages.push(languages)
    }
    gettvshows = () => {
        return this.tvshows;
    }
    settvshows = (tvshow: string) => {
        this.languages.push(tvshow)
    }
    getMovies = () => {
        return this.movies;
    }
    setMovies = (movie: string) => {
        this.languages.push(movie)
    }
  
    getrelationship = () => {
        return this.relationship
    }
    setrelationship = (relationship: string) => {
        this.relationship = relationship
    }
    getfamilymembers = () => {
        return this.familymembers
    }
    setfamilymembers = (familymembers: string) => {
        this.familymembers.push(familymembers)
    }
    getAboutMe = () => {
        return this.AboutMe
    }
    setAboutMe = (AboutMe: string) => {
        this.AboutMe = AboutMe
    }
    getMusic = () => {
        return this.music;
    }
    setMusic = (music: string) => {
        this.languages.push(music)
    }
    getSports = () => {
        return this.sports;
    }
    setSports = (sport: string) => {
        this.sports.push(sport)
    }
    getnickname = () => {
        return this.nickname
    }
    setnickname = (nickname: string) => {
        this.nickname.push(nickname)
    }
    
    
    gettotalFriends = () => {
        return this.totalFriends
    }

    getfriendsfromwork() {
        console.log("friends from work")
    }
    getcollegemates() {
        console.log("Your college mates")
    }

    getfriendswithsamehighschool() {
        console.log("Friends from high school")
    }
   
    getfriends() {
        console.log("Friend list")
    }
    getfollowing() {
        console.log("People you follow")
    }
    getPhotos() {
        console.log("Photos")
    }
    getTotalNumberofGroups() {
        console.log("your groups")
    }
    
    getTotalCheckins() {
        console.log("you have checked in these places")
    }
    getTotalLikedPages() {
        console.log("Liked pages")
    }
    getTotalBooks() {
        console.log("total Books")
    }
  
    getTagPhotos() {
        console.log("These are your Tagged Photos")
    }
    getAlbum() {
        console.log("Albums")
    }
    getGroups() {
        console.log("These are your gropus")
    }
   
   
    getpagesliked() {
        console.log("pages you like")
    }
    getBooks() {
        console.log("Books")
    }
    getEvents() {
        console.log("Events")
    }
}
let MyProfile = new FacebookAbout("Rajat Kumar", ["student", "engineer"], ["jaypee university of information technology"], 
    ["St. Mary's school , Sundernagar", "D.A.V Public school Nerchowk"], "Bangaluru", "Mandi", ["The Shinning","Shawshank Redemption","Goodfellas"],
    ["Friends","Game of thrones","breaking bad"],["rock", "blues","heavy metal","rock n roll"],["Cricket","football","Tennis","volleyball"],
    897887656, "xxcr8789@gmail.com", 21, ["instagram", "snapchat"], "21st may 1996", "Male",
     ["English", "Hindi", "Spanish"], "Single", ["Ajay", "Arti","Namita"], "upcoming mean-stack-developer", ["Dante"], 120,87);

console.log("About");
console.log("Name :", MyProfile.name);
console.log("Works at :", MyProfile.work);
console.log("Studied at :", MyProfile.college)
console.log("Lives in :", MyProfile.currentcity)
console.log("From :", MyProfile.hometown)
console.log("Relationship status :", MyProfile.relationship)
console.log("Age :", MyProfile.getage())
console.log("Relationship status :", MyProfile.getrelationship())

console.log("Work and education:-")
console.log("Work :", MyProfile.getwork())

console.log("college :", MyProfile.getcollege())
console.log("School :", MyProfile.gethighschool())

console.log("Contact info :-")
console.log("phone nunmber:", MyProfile.getphonenumber())
console.log("email Address :", MyProfile.getemailAddresss())
console.log("Socials :", MyProfile.getsociallinks())
console.log("Date of birth :", MyProfile.getdateofbirth())

console.log("Gender :", MyProfile.getgender())


console.log("Languages :", MyProfile.getlanguages())




console.log("Family members on facebook", MyProfile.getfamilymembers())

console.log("Details about you :-")
console.log("About Me:", MyProfile.getAboutMe())
console.log("Nickname:", MyProfile.getnickname())

console.log("Total Friends:", MyProfile.gettotalFriends())
console.log("Number of posts", MyProfile.getnumposts())
console.log("Likes : ")
console.log("Movies :" , MyProfile.getMovies() )
console.log("Tv Shows :" , MyProfile.gettvshows() )
console.log("Music Geners :" , MyProfile.getMusic() )
console.log("Sports :" , MyProfile.getSports() )

console.log("Updated fields:::------")
let newname = MyProfile.setname("Rajat Chandel")
console.log("Name :", MyProfile.getname())


let newdateofbirth = MyProfile.setdateofbirth("22 june 1998")
console.log("Date Of Birth :", MyProfile.getdateofbirth())


let newcollege = MyProfile.setcollege("NIT Hamirpur")
console.log("college added :", MyProfile.getcollege())
let newschool = MyProfile.sethighschool("St Beads")
console.log("Highschool added:", MyProfile.gethighschool())
let newsociallinks = MyProfile.setsociallinks("tinder")
console.log("Socials:", MyProfile.getsociallinks())
let Currentcity = MyProfile.setcurrentcity("Bangalore")
console.log("current city :", MyProfile.getcurrentcity())
let newwork = MyProfile.setwork("EDWISOR.COM")
console.log("work :", MyProfile.getwork())
let newphonenumber = MyProfile.setphonenumber(878765676)
console.log("phone number added :", MyProfile.getphonenumber())
let newnivkname = MyProfile.setnickname("Kumar")
console.log("nicknames :", MyProfile.getnickname())

console.log("languages :", MyProfile.getlanguages())



let newrelationship = MyProfile.setrelationship("Married")
console.log("Updated relationship status:", MyProfile.getrelationship())
let newAboutMe = MyProfile.setAboutMe("My new about me")















