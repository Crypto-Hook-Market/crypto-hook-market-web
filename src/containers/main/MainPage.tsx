import Badge from "@/components/Badge";
import { Slider } from "@/components/Slider";
import "@/styles/containers/mainPage.css";
import { amountConverter } from "@/utils/converter";
import { useState } from "react";

const MainPage = () => {
  const [recommandSelect, setRecommandSelect] = useState("ror");

  const mockStrategy = [
    {
      coinName: "bitcoin",
      startDate: "2024-05-05-11:00",
      status: 1,
      strategyTitle: "한달 10% 먹는 전략!",
      strategyName: "MSI, SUPERTREND",
      runTime: "3일 4시간",
      pnl: "32.3%",
    },
    {
      coinName: "bitcoin",
      startDate: "2024-05-05-11:00",
      status: 1,
      strategyTitle: "한달 10% 먹는 전략!",
      strategyName: "MSI, SUPERTREND",
      runTime: "3일 4시간",
      pnl: "32.3%",
    },
    {
      coinName: "bitcoin",
      startDate: "2024-05-05-11:00",
      status: 1,
      strategyTitle: "한달 10% 먹는 전략!",
      strategyName: "MSI, SUPERTREND",
      runTime: "3일 4시간",
      pnl: "32.3%",
    },
    {
      coinName: "bitcoin",
      startDate: "2024-05-05-11:00",
      status: 1,
      strategyTitle: "한달 10% 먹는 전략!",
      strategyName: "MSI, SUPERTREND",
      runTime: "3일 4시간",
      pnl: "32.3%",
    },
  ];

  const mockRecommand = [
    {
      coinName: "bitcoin",
      price: 5000,
      min: 50000,
      max: 100000,
      percent: "12%",
      cycle: "4h",
      count: 10,
      strategyTitle: "한 달 10%는 무조건 먹는 자동 매매 전략",
      owner: "김재홍",
    },
    {
      coinName: "bitcoin",
      price: 5000,
      min: 50000,
      max: 100000,
      percent: "12%",
      cycle: "4h",
      count: 10,
      strategyTitle: "한 달 10%는 무조건 먹는 자동 매매 전략",
      owner: "김재홍",
    },
    {
      coinName: "bitcoin",
      price: 5000,
      min: 50000,
      max: 100000,
      percent: "12%",
      cycle: "4h",
      count: 10,
      strategyTitle: "한 달 10%는 무조건 먹는 자동 매매 전략",
      owner: "김재홍",
    },
    {
      coinName: "bitcoin",
      price: 5000,
      min: 50000,
      max: 100000,
      percent: "12%",
      cycle: "4h",
      count: 10,
      strategyTitle: "한 달 10%는 무조건 먹는 자동 매매 전략",
      owner: "김재홍",
    },
  ];

  const recommandList = mockRecommand.map((element) => (
    <li className="swiper-slide">
      <a href="javascript:void(0);">
        <div className="img-wrap">
          <img src="/img/sample_recommand_list.png" alt="" />
          <span className="ppl-num">
            <span className="ico-ppl">
              <img src="/img/ico_ppl.png" alt="" />
            </span>
            11
          </span>
        </div>
        <div className="list-info">
          <div className="fee-wrap">
            <div className="pri">{amountConverter(element.price)}</div>
            <div className="participate">
              <div className="min">
                <span className="ico-fee min">min</span>
                {amountConverter(element.min)}
              </div>
              <div className="max">
                <span className="ico-fee max">max</span>
                {amountConverter(element.max)}
              </div>
            </div>
          </div>
          <div className="title">{element.strategyTitle}</div>
          <div className="tag-wrap">
            <ul>
              <li>
                <span className="ico-tag">
                  <img src="/img/ico_ppl.png" alt="" />
                </span>
                {element.coinName}
              </li>
              <li>
                <span className="ico-tag">
                  <img src="/img/ico_ppl.png" alt="" />
                </span>
                {element.coinName}
              </li>
              <li className="tag-per up">
                <span className="ico-tag">
                  <img src="/img/ico_arr_up_g.png" alt="" />
                </span>
                {element.percent}
              </li>
              <li>
                <span className="ico-tag">
                  <img src="/img/ico_ppl.png" alt="" />
                </span>
                {element.cycle}
              </li>
              <li>
                <span className="ico-tag">
                  <img src="/img/ico_ppl.png" alt="" />
                </span>
                {element.count}회
              </li>
            </ul>
          </div>
          <span className="owner">{element.owner}</span>
        </div>
      </a>
    </li>
  ));
  return (
    <main>
      <div className="section summary">
        <div className="balance-wrap">
          <div className="con">
            <div className="num">${amountConverter(1140900)}</div>
            <div className="txt">balance</div>
          </div>
        </div>
        <div className="trades-wrap">
          <div className="con-wrap">
            <div className="con">
              <div className="num">6</div>
              <div className="txt">loss</div>
            </div>
            <div className="con">
              <div className="num">${amountConverter(363980)}</div>
              <div className="txt">Total trade</div>
            </div>
            <select name="sort-date" id="selectDate">
              <option value="1d" selected>
                1d
              </option>
              <option value="7d">7d</option>
              <option value="30d">30d</option>
            </select>
          </div>
          <span className="status closed">
            <span className="ico-status"></span>closed
          </span>
        </div>
        <div className="pnl-wrap">
          <div className="con-wrap">
            <div className="con">
              <div className="num">
                45
                <Badge type="up" percent={35} />
              </div>
              <div className="txt">Today's PnL</div>
            </div>
            <div className="con">
              <div className="num">{amountConverter(363980)}</div>
              <div className="txt">Total PnL</div>
              <span className="per total">32.3%</span>
            </div>
            <div className="con">
              <div className="num">
                0
                <span className="per down">
                  <img src="img/ico_arr_down.png" alt="" />
                  35%
                </span>
              </div>
              <div className="txt">PnL in last 7 days</div>
            </div>
          </div>
          <div className="graph-wrap">
            <img src="@/assets/images/img_graph.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section ad-area">
        <div className="banner1">
          <a href="javascript:void(0);">
            <img src="@/assets/images/sample_banner1.png" alt="" />
          </a>
        </div>
        <div className="banner2">
          <a href="javascript:void(0);">
            <img src="img/sample_banner2.png" alt="" />
          </a>
        </div>
      </div>
      <div className="section coin-list-wrap">
        <div className="title">현재 매매중인 코인 목록</div>
        <div className="coin-list swiper-container">
          <ul className="swiper-wrapper">
            <Slider children={mockStrategy} />
          </ul>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
      <div className="section my-coin-wrap">
        <div className="left">
          <div className="tab-wrap">
            <ul>
              <li className="on">
                <a href="javascript:void(0);">전체</a>
              </li>
              <li>
                <a href="javascript:void(0);">수익매매</a>
              </li>
              <li>
                <a href="javascript:void(0);">손실매매</a>
              </li>
            </ul>
            <span className="more-btn">
              <a href="javascript:void(0);">전체보기</a>
            </span>
          </div>
          <div className="coin-table">
            <table width="100%">
              <thead>
                <th>코인이름</th>
                <th>시간</th>
                <th>매매결과</th>
                <th>수수료</th>
                <th>매수금액</th>
                <th>현재자산</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per up"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per up"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per up"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per down"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per up"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per down"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-name">
                      <div className="ico-coin">
                        <img src="img/ico_bitcoin.png" alt="" />
                      </div>
                      <div className="coin-info">
                        <div className="name">BTC</div>
                        <div className="coin-fullname">Bitcoin</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="coin-date">
                      <div className="date">2024.04.04</div>
                      <div className="time">13:31:00</div>
                    </div>
                  </td>
                  <td>
                    <div className="result">
                      <span className="result-per">
                        <span className="ico-per"></span>32%
                      </span>
                      <span className="result-num">40,000</span>
                    </div>
                  </td>
                  <td>40,000</td>
                  <td>40,000</td>
                  <td>40,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="right">
          <div className="top-wrap">
            <div className="title">추천 전략 목록</div>
            <div className="select-list">
              <select
                name="recommandList"
                id="recommandList"
                value={recommandSelect}
                onChange={(event) => {
                  setRecommandSelect((event.target as HTMLSelectElement).value);
                }}
              >
                <option key={1} value="ror">
                  수익률순
                </option>
                <option key={2} value="subscriber">
                  구독자순
                </option>
                <option key={3} value="subscriptionFee">
                  적은 구독료순
                </option>
              </select>
            </div>
          </div>
          <div className="recomman-list swiper-container">
            <ul className="swiper-wrapper">{recommandList}</ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
