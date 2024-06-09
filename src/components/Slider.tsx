import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { summaryMockType } from "@/types/mock/summaryMockType";

export const Slider = ({ children }: { children: summaryMockType[] }) => {
  const sliderChildren = children.map((child, index: number) => (
    <SwiperSlide key={index}>
      <li className="swiper-slide">
        <a href="javascript:void(0);">
          <div className="top">
            <div className="ico-coin">
              <img src="@/assets/images/ico_bitcoin.png" alt="" />
            </div>
            <div className="coin-info">
              <div className="coin-name">{child.coinName}</div>
              <div className="start-time">{child.startDate} 시작</div>
            </div>
            <span className="trade-status on-going">
              {child.status === 1 ? "매매중" : "매매 중지"}
            </span>
          </div>
          <div className="mid">
            <ul>
              <li>
                <div className="title">전략이름</div>
                <div className="text">{child.strategyTitle}</div>
              </li>
              <li>
                <div className="title">사용된 전략</div>
                <div className="text">{child.strategyName}</div>
              </li>
              <li>
                <div className="title">Run time</div>
                <div className="text">{child.runTime}</div>
              </li>
              <li>
                <div className="title">PnL</div>
                <div className="text">{child.pnl}</div>
              </li>
            </ul>
          </div>
          <div className="bot">
            <div className="graph-wrap">
              <img src="@/assets/images/img_graph2.png" alt="" />
            </div>
          </div>
        </a>
      </li>
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper scrollbar={{ hide: true }} modules={[Scrollbar]}>
        {sliderChildren}
      </Swiper>
    </>
  );
};
