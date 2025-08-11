import { useEffect, useRef } from 'react'

function DomRef() {
  // 특정 요소에 직접 접근해야할 때 사용
  const inputRef = useRef();
  
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default DomRef