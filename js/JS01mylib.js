// 아프로도 쓸 만한 건 여기다 가져다 놓을게요.
// from ? to ? 랜덤 정수를 발생시키는 함수
// 상수값이나 함수를 주로 정의
// 공용으로 쓰는 라이브러리 스크립트에
// document.querySelector("#merong") 같은 문법은 좋지 않다. 
// 왜냐 이걸 읽는 모든 html은 아이디에 메롱이 있어야하고 읽는 순서도 아래에 있어야 하므로. 대부분 함수만 갖다놓음(기능) 
function f_ranNum(p_start, p_end){
    return Math.floor(Math.random()*(p_end-p_start+1)) + p_start;
}
