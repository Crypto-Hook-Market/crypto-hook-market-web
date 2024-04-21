import { getKakaoUserInfo } from "@/services/auth/getKakaoAuth";
import { setKakaoToken } from "@/services/auth/setKakaoAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectionPage = () => {
  const navigate = useNavigate();

  const setKakaoUserInfo = async (accessCode: string) => {
    if (accessCode) {
      const tokenResponse = await setKakaoToken(accessCode);
      localStorage.setItem("ACCESS_TOKEN", tokenResponse.data.access_token);
      localStorage.setItem("REFRESH_TOKEN", tokenResponse.data.refresh_token);
      const userInfoResponse = await getKakaoUserInfo();
      console.log(userInfoResponse);
      localStorage.setItem("userInfo", userInfoResponse.data);
    }
  };

  useEffect(() => {
    const accessCode = new URLSearchParams(location.search).get("code");
    if (accessCode) {
      setKakaoUserInfo(accessCode);
      navigate("/");
    }
  });
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
};

export default RedirectionPage;
