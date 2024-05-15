import { Comment, Post } from '@/types/Post';
import { useFetchTargetPostComment } from '@queries/usePostQueries';
import { useUserStore } from '@stores/userStore';

import CommentItem from './CommentItem';

// TODO: 댓글이 다 안 불러와짐... 이유를 모르겟음
export default function CommentedPostItem({ commentedPost }: { commentedPost: Post }) {
  const { blobId } = useUserStore();
  console.log('commentedPost', commentedPost);

  const { data: commentsData, isPending, isError } = useFetchTargetPostComment(commentedPost.postId);

  if (isPending) {
    // TODO 스켈레톤 UI 추가
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>데이터 불러오는 중, 에러 발생</div>;
  }

  const targetComments = commentsData?.pages.reduce((foundComments, page) => {
    const commentsOnPage = page.data.content.filter((c: any) => {
      return c.author.blobId === blobId;
    });

    foundComments.push(...commentsOnPage);

    // 누적 배열 반환
    return foundComments;
  }, []);

  console.log('targetComment', targetComments);

  return targetComments.map((comment: Comment) => (
    <CommentItem key={comment.commentId} commentedPost={commentedPost} comment={comment} />
  ));
}
