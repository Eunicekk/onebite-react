import "../styles/Viewer.css";

import { getEmotionImage } from "../utils/get-emotion-image";
import { emotionList } from "../utils/constants";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="viewer">
      <section className="image_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrap emotion_img_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="감정 이미지" />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrap">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
