import { useEffect, useState } from "react";

function Membership() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickHandler = () => {
    alert("가입이 되었습니다.");
  }

  useEffect(() => {
    if (formValues.email && !formValues.email.includes("@")) {
      setError("이메일 형식에 맞게 입력해주세요.");
    } else if (formValues.password && formValues.password.length < 8) {
      setError("비밀번호는 8자리 이상이여야 합니다.");
    } else {
      setError(null);
    }

    if (formValues.email.includes("@") && formValues.password.length >= 8) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formValues]);

  return (
    <div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChangeHandler}
        />
      </div>
      {error}
      <div>
        <button disabled={isDisabled} onClick={onClickHandler}>가입하기</button>
      </div>
    </div>
  );
}

export default Membership;

/**
 * 이메일 인풋에 입력이 될 때 유효성 검사 실시
 * 골뱅이 포함 여부에 따라서 없으면 에러 메세지로
 * 이메일 형식에 맞게 입력해주세요 출력
 * 비밀번호 인풋에 입력이 될 때 유효성 검사 실시
 * 8자리 이상인지 여부에 따라서 안되면 에러메세지
 * 비밀번호는 8자리 이상이여야 한다 문구 출력
 * 에러 메세지가 아예 없으면 버튼 활성화, 하나라도 있으면 활성화 X
 * 버튼을 누르면 alert 가입이 되었습니다
 */