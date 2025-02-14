import "../styles/EmotionItem.css";

import { getEmotionImage } from "../utils/get-emotion-image";

const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`emotion_item ${
        isSelected ? `emotion_item_${emotionId}` : ""
      }`}
      onClick={onClick}
    >
      <img
        src={getEmotionImage(emotionId)}
        alt="감정 이미지"
        className="emotion_image"
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
