
//필요한 데이터: 랜덤 숫자, 횟수카운트, 카운트다운, 최소값, 최대값

//최대범위를 저장할 변수
const MAX = 100;

//게임에 필요한 데이터 객체
const gameDatas = {
    secretNumber : Math.floor(Math.random()*MAX) + 1,
    count : 0,
    countDown : 7,
    min : 1,
    max : MAX
};

//함수 정의부 

//사용자의 입력을 수행하는 함수
function inputNumber() {
    // const min = gameDatas.min;
    // const max = gameDatas.max;

    //객체 디스트럭쳐링 (ES6): 데이터 참조시에만 사용 가능.
    //수정이나 추가 시에는 사용 불가.
    const {min, max} = gameDatas;

    //사용자의 입력값을 객체에 추가
    gameDatas.answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

    gameDatas.count++;
    gameDatas.countDown--;

    return checkNumber();
}

//사용자의 입력값을 검증하는 함수
function checkNumber() {

    const {secretNumber, count, answer, countDown} = gameDatas;

    if(secretNumber === answer) {
        alert('정답입니다!! ' + count + '번만에 맞추셨군요!!');
        checkCountDown(countDown);
        return true;
    } else if(secretNumber > answer) {
        alert('UP!!!');
        gameDatas.min = answer + 1;
    } else {
        alert('DOWN!!!');
        gameDatas.max = answer - 1;
    }
    alertCountDown(countDown);
    return false;
}

//사용자의 카운트다운을 체크하여 승리여부를 알려주는 함수
function checkCountDown(countDown) {
    if(countDown >= 0) {
        alert('You Win!!');
    } else {
        alert('You Lose!!');
    }
}

//사용자의 남은 카운트다운을 알려주는 함수
function alertCountDown(countDown) {
    if(countDown > 0) {
        alert('정답 기회 ' + countDown + '번 남음!');
    } else {
        alert('정답 기회 모두 소진! 문제를 계속 풀어 주세요!');
    }
}

//핵심 실행부 (main의 역할을 하는 함수)
//즉시 실행 함수로 선언해서 따로 호출하지 않아도
//바로 실행될 수 있도록 작성.
(function() {
    alert('[UP & DOWN 게임 - 1 ~ 100사이의 숫자를 맞춰보세요!]');

    while(!inputNumber()) {}
    
}());
