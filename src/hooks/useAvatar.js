import useAuth from "./useAuth";
// import useProfile from "./useProfile";


export const useAvatar = (post) => {
    const { auth } = useAuth();

    const isMe = post?.author?.id === auth?.user?.id;
    const avatar = isMe ? auth?.user?.avatar : post?.author?.avatar;

    const avatarURL = `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;

    return { avatarURL };
};