const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <div className="logo">
          <a href="/index.html">logo</a>
        </div>
        <div className="gnb">
          <ul>
            <li className="on">
              <a href="javascript:void(0);">메인</a>
            </li>
            <li>
              <a href="javascript:void(0);">전략목록</a>
            </li>
            <li>
              <a href="javascript:void(0);">자동매매 목록</a>
            </li>
            <li>
              <a href="javascript:void(0);">매매이력</a>
            </li>
            <li className="ico-wrap">
              <a href="javascript:void(0);">
                <span className="ico-my"></span>
              </a>
              <a href="javascript:void(0);">
                <span className="ico-my"></span>
              </a>
            </li>
          </ul>
          <div id="modalMy">
            <div className="loigin-text">김보건님 환영합니다</div>
            <div className="logout-btn">
              <a href="javascript:void(0);">로그아웃</a>
            </div>
            <div className="setting-btn">
              <a href="javascript:void(0);">계정설정</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
