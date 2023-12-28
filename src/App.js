import { questionList } from "./db";
import { useMyLocalStorage } from "./hooks/useMyLocalStorage";
import { shuffleArray } from "./utils";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "./components/Header";
import "./styles.css";

function App() {
  const [questions, setQuestions] = useMyLocalStorage({
    key: "questions",
    defaultValue: shuffleArray(questionList),
    // getInitialValueInEffect: true,
  });
  const [index, setIndex] = useMyLocalStorage({
    key: "index",
    defaultValue: 0,
    // getInitialValueInEffect: true,
  });

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <Header
        onShuffle={() => {
          setQuestions(shuffleArray(questionList));
        }}
      />
      <Swiper
        effect="cards"
        grabCursor
        onActiveIndexChange={({ activeIndex }) => {
          if (activeIndex !== 0) {
            setIndex(activeIndex);
          }
        }}
        initialSlide={index}
        modules={[EffectCards]}
        className="mySwiper"
        loop
      >
        {questions.map((question) => (
          <SwiperSlide key={question.text} className={question.color}>
            {question.text}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
