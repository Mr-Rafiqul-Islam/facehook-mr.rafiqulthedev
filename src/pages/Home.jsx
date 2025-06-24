import { useEffect } from "react";

import useAxios from "../hooks/useAxios";
import { actions } from "../actions";
import PostList from "../components/posts/PostList";
import { usePost } from "../hooks/usePost";
import NewPost from "../components/posts/NewPost";

export default function HomePage() {
  const { state, dispatch } = usePost();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchPost();
  }, [api,dispatch]);

  if (state?.error) {
    return <div> Error in fatching posts {state?.error?.message}</div>;
  }
  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        {state?.loading && <h1 className="text-3xl">We are working...</h1>}
        <NewPost />
        <PostList posts={state?.posts} />
      </div>
    </main>
  );
}
