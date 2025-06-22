import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

export default function ProfilePage() {
  const { api } = useAxios();
  const { auth } = useAuth();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (err) {
        console.error(err);
        setError(err);
      }finally{
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  if (loading) return <h1 className="text-3xl">loading....</h1>
  return <div>
    <h1 className="text-3xl">{user?.firstName}</h1>
    {error && <h1>{error.message}</h1>}
    {posts && <h1>{posts?.length}</h1>}
  </div>;
}
