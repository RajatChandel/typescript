class Video {





    constructor(protected videotitle: string, protected Duration: string, private views: number,
         protected channelname: string,
         private channelsubscriber: string, public likes: number,
      public dislikes: number, protected discription: string,
      private TotalComments: number, public published: string, 
      protected catagory: string, public comment: string[], public commentorname: string[],
       public commentdate: string[], public commentlikes: number[], 
       public commentdislikes: number[], private commentreplies: number[]) {
      this.videotitle = videotitle;
      this.Duration = Duration;
      this.views = views;
      this.channelname = channelname;
      this.channelsubscriber = channelsubscriber
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
  
    getVideoName = () => {
      return this.videotitle;
    }
    getDuration = () => {
      return this.Duration
    }
    getViews = () => {
      return this.views
    }
    getChannelName = () => {
      return this.channelname
    }
    getChannelSubscriber = () => {
      return this.channelsubscriber
    }
    getlikes = () => {
      return this.likes
    }
    getDislikes = () => {
      return this.dislikes
    }
  
    getDiscription = () => {
      return this.discription
    }
  
    getTotalComments = () => {
      return this.comment.length
    }
    getPublishedDate = () => {
      return this.published;
    }
  
    getVideoCatagory = () => {
      return this.catagory
    }
    getcomment = () => {
      return this.comment
  
    }
    setcomment = (typecomment: string) => {
      this.comment.push(typecomment)
  
    }
  
    getcommentorName = () => {
      return this.commentorname
    }
  
    getCommentdate = () => {
      return this.commentdate
    }
    getCommentlikes = () => {
      return this.commentlikes
    }
    getCommentDislikes = () => {
      return this.commentdislikes
    }
    getCommentReplies = () => {
      return this.commentreplies
    }
  
    Relatedvideos = () => {
      console.log("Related videos")
    }
  
    getautoplay = () => {
      console.log("autoplay on")
    }
  
    getallreplies = () => {
      console.log("view replies")
    }
  
  }
  
  
  let videopage = new Video("Youtube video", "5:40",82437213, "Mychannel", "360p", 1231, 555, "Dummy video", 3, "21/7/2013",
    "Vlog", ["very nice work", "well done", "legend - wait for it - dary"], ["thehero280", "hello_dummy", "TheGreat9090"], [" 2 months ago" , "3 weeks ago", "2 hrs ago"],
     [12, 33, 0], [12, 2, 3], [12, 3, 24]);
  
     let Catagory = videopage.getVideoCatagory();
     let comments = videopage.getcomment();
     let CommentorName = videopage.getcommentorName();
     let CommentDate = videopage.getCommentdate();
     let commentlikes = videopage.getCommentlikes();
     let commentDislikes = videopage.getCommentDislikes();
     let CommentReplies = videopage.getCommentReplies();
     let ChannelName = videopage.getChannelName();
     let VideoTitle = videopage.getVideoName();
     let Duration = videopage.getDuration();
     let totalViews = videopage.getViews();
     let subscribersubsc = videopage.getChannelSubscriber();
     let likes = videopage.getlikes();
     let dislikes = videopage.getDislikes();
     let discription = videopage.getDiscription();
     let TotalComments = videopage.getTotalComments();
     let PublishedDate = videopage.getPublishedDate();
  
  
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
  videopage.setcomment("awesome")
  console.log("New comment :", videopage.getcomment());
  console.log("Name of Commentor of all comments :", CommentorName);
  
  console.log("Date of Comment of all comment :", CommentDate);
  console.log("Total likes on all comment :", commentlikes);
  console.log("Total Dislikes on all  comment :", commentDislikes);
  console.log("Total Replies on all Comment :", CommentReplies)
  videopage.Relatedvideos();
  videopage.getautoplay();
  videopage.getallreplies();
  