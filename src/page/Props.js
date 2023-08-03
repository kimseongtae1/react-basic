import React, { useState } from 'react'

function Props({data,name}) {
    console.log(data, name);

    let [count, setCount] = useState(0);

    function plus(){
        setCount(++count);
    }

    console.log(count);

  return (
    <>
        <h2>props</h2> 
        * 부모 컨포넌트에서 자식 컨포넌트로 값을 보내줄때 사용 <br/>
        * 부모 안에 있는 &#60;자식컨포넌트 속성='값'/&#62; <br/>
        * function 자식( props ) &#123; <br/>
            console.log( props ) &#123; 속성:'값' &#125; <br/>
            &#125; <br/>

        <h2>State</h2>
        <button onClick={plus}> {count} </button> <br/>
        * useState() // 상태 [값, 값수정 함수] <br/>
        * 값수정 함수를 이용해서 값을 수정하면 컨포넌트 자체내에 랜더링 발생 <br/>
        * 랜더링 발생시 바뀐값이 실제 dom에 적용된다. <br/>

    </>
  )
}

export default Props