var Video = /** @class */ (function () {
    function Video(videotitle, Duration, views, channelname, channelsubscriber, likes, dislikes, discription, TotalComments, published, catagory, comment, commentorname, commentdate, commentlikes, commentdislikes, commentreplies) {
        var _this = this;
        this.videotitle = videotitle;
        this.Duration = Duration;
        this.views = views;
        this.channelname = channelname;
        this.channelsubscriber = channelsubscriber;
        this.likes = likes;
        this.dislikes = dislikes;
        this.discription = discription;
        this.TotalComments = TotalComments;
        this.published = published;
        this.catagory = catagory;
        this.comment = comment;
        this.commentorname = commentorname;
        this.commentdate = commentdate;
        this.commentlikes = commentlikes;
        this.commentdislikes = commentdislikes;
        this.commentreplies = commentreplies;
        this.getVideoName = function () {
            return _this.videotitle;
        };
        this.getDuration = function () {
            return _this.Duration;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getChannelName = function () {
            return _this.channelname;
        };
        this.getChannelSubscriber = function () {
            return _this.channelsubscriber;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getDiscription = function () {
            return _this.discription;
        };
        this.getTotalComments = function () {
            return _this.comment.length;
        };
        this.getPublishedDate = function () {
            return _this.published;
        };
        this.getVideoCatagory = function () {
            return _this.catagory;
        };
        this.getcomment = function () {
            return _this.comment;
        };
        this.setcomment = function (typecomment) {
            _this.comment.push(typecomment);
        };
        this.getcommentorName = function () {
            return _this.commentorname;
        };
        this.getCommentdate = function () {
            return _this.commentdate;
        };
        this.getCommentlikes = function () {
            return _this.commentlikes;
        };
        this.getCommentDislikes = function () {
            return _this.commentdislikes;
        };
        this.getCommentReplies = function () {
            return _this.commentreplies;
        };
        this.Relatedvideos = function () {
            console.log("Related videos");
        };
        this.getautoplay = function () {
            console.log("autoplay on");
        };
        this.getallreplies = function () {
            console.log("view replies");
        };
        this.videotitle = videotitle;
        this.Duration = Duration;
        this.views = views;
        this.channelname = channelname;
        this.channelsubscriber = channelsubscriber;
        this.likes = likes;
        this.dislikes = dislikes;
        this.discription = discription;
        this.TotalComments = TotalComments;
        this.published = published;
        this.catagory = catagory;
        this.comment = comment;
        this.commentorname = commentorname;
        this.commentdate = commentdate;
        this.commentlikes = commentlikes;
        this.commentdislikes = commentdislikes;
        this.commentreplies = commentreplies;
    }
    return Video;
}());
var videopage = new Video("Youtube video", "5:40", 82437213, "Mychannel", "360p", 1231, 555, "Dummy video", 3, "21/7/2013", "Vlog", ["very nice work", "well done", "legend - wait for it - dary"], ["thehero280", "hello_dummy", "TheGreat9090"], [" 2 months ago", "3 weeks ago", "2 hrs ago"], [12, 33, 0], [12, 2, 3], [12, 3, 24]);
var Catagory = videopage.getVideoCatagory();
var comments = videopage.getcomment();
var CommentorName = videopage.getcommentorName();
var CommentDate = videopage.getCommentdate();
var commentlikes = videopage.getCommentlikes();
var commentDislikes = videopage.getCommentDislikes();
var CommentReplies = videopage.getCommentReplies();
var ChannelName = videopage.getChannelName();
var VideoTitle = videopage.getVideoName();
var Duration = videopage.getDuration();
var totalViews = videopage.getViews();
var subscribersubsc = videopage.getChannelSubscriber();
var likes = videopage.getlikes();
var dislikes = videopage.getDislikes();
var discription = videopage.getDiscription();
var TotalComments = videopage.getTotalComments();
var PublishedDate = videopage.getPublishedDate();
console.log("Title Of Video :", VideoTitle);
console.log("Video duration :", Duration);
console.log("Views :", totalViews);
console.log("Channel Name :", ChannelName);
console.log("Subcribers :", subscribersubsc);
console.log("likes :", likes);
console.log("dislikes :", dislikes);
console.log("Discription :", discription);
console.log("Total Comments :", TotalComments);
console.log("Published on :", PublishedDate);
console.log("Catagory :", Catagory);
console.log("comments :", comments);
videopage.setcomment("awesome");
console.log("New comment :", videopage.getcomment());
console.log("Name of Commentor of all comments :", CommentorName);
console.log("Date of Comment of all comment :", CommentDate);
console.log("Total likes on all comment :", commentlikes);
console.log("Total Dislikes on all  comment :", commentDislikes);
console.log("Total Replies on all Comment :", CommentReplies);
videopage.Relatedvideos();
videopage.getautoplay();
videopage.getallreplies();
