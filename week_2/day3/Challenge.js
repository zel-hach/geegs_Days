class Video{
    constructor(title,uploader,time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
}

const video = new Video("JS Tutorial","Alice", 400);
video.watch();
const video1 = new Video("PHP Tutorial","Alice1", 500);

const videosData = [
  { title: "JS Tutorial", uploader: "Alice", time: 400 },
  { title: "Cooking Pasta", uploader: "Bob", time: 600 },
  { title: "Workout Routine", uploader: "Mike", time: 900 },
  { title: "Gaming Highlights", uploader: "Tom", time: 1200 },
  { title: "Travel Vlog", uploader: "Emma", time: 700 }
];

videosData.forEach(video => {
    const newVideo = new Video(video.title,video.uploader,video.time);
    console.log(newVideo.watch());
});