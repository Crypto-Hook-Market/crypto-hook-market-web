import instance from "@/services/instance";

export const getKakaoUserInfo = () => {
  return instance.get(`https://kapi.kakao.com/v2/user/me`, {
    params: {
      property_keys: ["kakao_account.name", "kakao_account.email"],
    },
    headers: {
      Authorization: `
      Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
};
