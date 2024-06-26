import React from "react";
import PostsTable from "@/components/ui/posts/PostTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/ui/posts/PostsPagination";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostPage;
