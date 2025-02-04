import { useRef, useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const inputRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          name="name"
          ref={inputRef}
          value={input.name}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
        ></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
