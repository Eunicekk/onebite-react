import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

import usePageTitle from "../hooks/usePageTitle";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  usePageTitle("새 일기 쓰기");

  const onSubmit = (input) => {
    onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );

    navigate("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button text={"< 뒤로 가기"} onClick={() => navigate(-1)} />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
