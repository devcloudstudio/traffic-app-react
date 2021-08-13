/**
 * video.id
 *
 * data.items[0].snippet:
 * id: {kind, videoId}
 * channelTitle
 * description
 * publishedAt
 * thumbnail
 * title
 */

const youtubeVideos = {
  kind: "youtube#searchListResponse",
  etag: "oGAsrDMGRdXezlqrQzpuUNfqbSE",
  nextPageToken: "CAEQAA",
  regionCode: "NG",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 1,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "jKPtrCpCtQjQZqO9dbsh7tOw7dc",
      id: {
        kind: "youtube#video",
        videoId: "poQXNp9ItL4",
      },
      snippet: {
        publishedAt: "2020-04-20T16:00:13Z",
        channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
        title: "Redux Tutorial - Learn Redux from Scratch",
        description:
          "Redux tutorial - Learn redux from scratch. Get the full Redux course: https://codewithmosh.com/p/ultimate-redux Subscribe for more tutorials like this: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/poQXNp9ItL4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/poQXNp9ItL4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/poQXNp9ItL4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Programming with Mosh",
        liveBroadcastContent: "none",
        publishTime: "2020-04-20T16:00:13Z",
      },
    },
  ],
};

export default youtubeVideos;
