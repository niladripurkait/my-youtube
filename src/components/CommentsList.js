import { formatTime, formatNumber } from "../utils/helper";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";

const CommentsList = ({ comments }) => {
  if (comments?.length === 0) return;

  return (
    <div>
      {comments?.map((comment) => {
        return (
          <div key={comment.id} className="p-3 m-2 text-sm">
            <div className="flex">
              <img
                alt="user"
                src={
                  comment?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl
                }
                className="h-9 w-9 rounded-full mr-4"
              />

              <div className="flex flex-col">
                <div className="flex  items-center">
                  <span className="font-medium mr-2">
                    {
                      comment?.snippet?.topLevelComment?.snippet
                        ?.authorDisplayName
                    }
                  </span>

                  <span className="text-xs">
                    {formatTime(
                      comment?.snippet?.topLevelComment?.snippet?.publishedAt
                    )}
                  </span>
                </div>

                <pre className="my-1 font-sans overflow-x-auto whitespace-pre-wrap break-words ">
                  {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                </pre>

                <div className="flex items-center my-1">
                  <HandThumbUpIcon className="h-5 w-5" />
                  <span className="mx-1">
                    {formatNumber(
                      comment?.snippet?.topLevelComment?.snippet?.likeCount
                    )}
                  </span>
                  <HandThumbDownIcon className="h-5 w-5 ml-3" />
                </div>

                <span className="mt-1 text-blue-600 font-semibold">
                  {formatNumber(comment?.snippet?.totalReplyCount)} replies
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
