import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import MyPosts from "../components/profile/MyPosts";

export default function ProfilePage() {
  const { api } = useAxios();
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response?.data,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: err.message,
        });
      }
    };
    fetchProfile();
  }, [auth?.user?.id, dispatch, api]);
  if (state?.loading)
    return <h1 className="text-3xl">Profile Data is Fetching....</h1>;
  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <ProfileInfo/>
        <MyPosts/>
      </div>
    </main>
  );
}
