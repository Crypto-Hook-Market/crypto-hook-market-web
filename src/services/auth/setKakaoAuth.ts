import instance from "@/services/instance";

export const setKakaoToken = (code: string) => {
  return instance.post(
    `https://kauth.kakao.com/oauth/token`,
    {
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_KAKAO_LOGIN_REST_API_KEY,
      redirect_uri: import.meta.env.VITE_KAKAO_LOGIN_REDIRECT_URI,
      code: code,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
};
