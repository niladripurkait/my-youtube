const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = "AIzaSyCevPjEoxKnwuvxmD54zMM54tKB-b_41u8";
// const API_KEY = "AIzaSyB0e1izvenBch4JkJUeYSKDlJko5CfOOdA";
// const API_KEY = "AIzaSyDjPGw4P7UUF5t1vKh78mCTV4L4VlXYUyc";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SUGGESTIONS =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";

export const CHANNEL_LOGO_API =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet&key=" +
  API_KEY +
  "&id=";

export const SUBSCRIBERS_COUNT =
  "https://www.googleapis.com/youtube/v3/channels?part=statistics&key=" +
  API_KEY +
  "&id=";

export const RELATED_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  API_KEY +
  "&relatedToVideoId=";

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" +
  API_KEY +
  "&videoId=";
//snippet%2Creplies

export const SEARCH_TEXT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=" +
  API_KEY +
  "&q=";

export const VIEW_COUNT =
  "https://www.googleapis.com/youtube/v3/videos?part=statistics&key=" +
  API_KEY +
  "&id=";

export const CHAT_MESSAGE_LENGTH = 25;

export const commentsData = [
  {
    name: "Niladri",
    comment: "This is a comment",
    replies: [
      {
        name: "Niladri",
        comment: "This is a comment",
        replies: [
          {
            name: "Niladri",
            comment: "This is a comment",
            replies: [
              {
                name: "Niladri",
                comment: "This is a comment",
              },
              {
                name: "Niladri",
                comment: "This is a comment",
              },
            ],
          },
          {
            name: "Niladri",
            comment: "This is a comment",
          },
        ],
      },
      {
        name: "Niladri",
        comment: "This is a comment",
      },
    ],
  },
  {
    name: "Niladri",
    comment: "This is a comment",
  },
  {
    name: "Niladri",
    comment: "This is a comment",
  },
];
