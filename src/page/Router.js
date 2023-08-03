import React from 'react'
import {useLocation, Link, useNavigate} from 'react-router-dom';

function Router() {
    const location = useLocation();
    const navigate = useNavigate();

    // {
    //     pathname: '/router', 
    //     search: '', 
    //     hash: '', 
    //     state: 'a100', 
    //     key: 'izwbwuix'
    // }

    //let state = location.state;

    let {state, pathname} = location;

    let move = ()=>{
        navigate('/css');
    }

  return (
    <>
        <h2>Router</h2>
        * 새로운 페이지를 로드하지 않고 하나의 페이지 안에서
          필요한 데이터만 가져오는 형태를 가진다. <br/>

        * (npm i react-router-dom ) <br/>
        * import &#123;Link, BrowserRouter, Route, Routes&#125; from 'react-router-dom'; <br/>
        
        <h2>Link, useLocation hook 사용</h2>
        * 브라우저에 URL 값을 통해 값 전달 <br/>
         - Link 컴포넌트에 state='값' <br/>
         - 해당 링크 파일에 useLocation 훅 import 시키고 <br/>
         - 변수에 값 담아 사용 <br/>
         - 근데 이걸 어디에 활용하는지 ? <br/>

         <h2>useLocation(이동, 값 전달), useLocation(값 확인) hook 사용</h2>
         <Link to='/'>Home</Link> <br/>
         <button onClick={move}>css</button> <br/>
         * import &#123;useLocation, Link, useNavigate&#125; from 'react-router-dom'; <br/>
         * const 변수명 = useNavigate(); <br/>
          - 변수명('/css'(이동할 URL 넣어준거임 ㅎ하하), state); <br/> 
         * Link tag 활용하여 이동, navigate 스크립트 프로그래밍을 통해 이동하고 싶을때 주로 사용 <br/>
         
    </>
  )
}

export default Router