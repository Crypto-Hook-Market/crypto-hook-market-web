const LoginPage = () => {
  /* redirect to Kakao Login */
  const handleKakaoLogin = () => {
    const kakaoURL = `${import.meta.env.VITE_KAKAO_LOGIN_URL}?client_id=${
      import.meta.env.VITE_KAKAO_LOGIN_REST_API_KEY
    }&redirect_uri=${
      import.meta.env.VITE_KAKAO_LOGIN_REDIRECT_URI
    }&response_type=code`;
    window.location.href = kakaoURL;
  };

  return (
    <>
      <h1>로그인 페이지입니다.</h1>
      <button onClick={handleKakaoLogin}>카카오톡으로 시작하기</button>
    </>
  );
};

export default LoginPage;
