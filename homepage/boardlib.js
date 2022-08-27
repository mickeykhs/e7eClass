var v_tblName = "boardTB";
var request = {};
// 사용자 요청(request)을 담은 객체
request.getParameter = function (p_name) { // name을 넘기면 value를 리턴해주는
    if (location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_nvSSang = v_queryString.split("&");
    for (var i = 0; i < v_nvSSang.length; i++) {
        var nv = v_nvSSang[i].split("=");
        if (nv[0] == p_name) {
            return decodeURIComponent(nv[1]);
        }
    }
    return null;  // 못찾았다면 null, 꼭 null일 필요는 없음
}

request.getParameterValues = function (p_name) { // name을 넘기면 value를 리턴해주는
    if (location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_values = []; // 값을 담을 배열
    var v_nvSSang = v_queryString.split("&");
    for (var i = 0; i < v_nvSSang.length; i++) {
        var nv = v_nvSSang[i].split("=");
        if (nv[0] == p_name) {
            v_values.push(nv[1]); // 배열에 담깅
        }
    }
    if (!v_values.length) return null;  //배열의 length가 0이면
    return v_values;  // 배열의 length가 0이 아니라면
}

   


