import { useState } from "react";

function Membership() {
  const [formValues, setFormValues] = ({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  
  return (
    <div>
      <div>
        <input type="email" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button>가입하기</button>
    </div>
  );
}

export default Membership;