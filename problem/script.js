const scores = [];
const allQuizData = [
    { question: "연세의 뜻은? ", options: ["나이", "성별", "언어"], correctIndex: 0 },
    
    { question: "금일의 뜻은? ", options: ["금요일", "당일", "내일"], correctIndex: 1 },
    
    { question: "익월의 뜻은? ", options: ["지난달", "다음달", "이번달"], correctIndex: 1 },
    
    { question: "심심한 사과의 뜻은? ", options: ["성의없이 사과한다.", "잔잔히 사과한다", "매우 깊게 사과한다"], correctIndex: 2 },
    
    { question: "유찬이와 하랑이가 결혼을 한다. 결혼식은 서울 OO예식장 1월 10일12시 30분에 시작한다. OO예식장에 오기위해서는 승용차 이용이나 360번 버스 91번 버스 180번 버스 196번 버스 960번 버스를 타면 올 수 있다. * 주차 공간이 부족하니 가능하면 대중교통 이용 * ( * 부분 작게 )  이때 이 글을 잘못 이해한 것은? ", 
    options: ["결혼식은 1월 10일 12시 30분에 시작한다", "360번 버스, 196번 버스, 91번 버스를 타면 예식장에 올 수 있다.", "주차 공간이 충분하므로 승용차를 이용하는 것이 좋다"], correctIndex: 2 },
    
    { question: "도로교통법의 내용을 바르게 이해한 것은? 제11조 어린이의 보호자는 교통이 빈번한 도로에서 어린이를 놀게 하여서는 아니된다, 제 21조 모든 차의 운전자는 다른 차를 앞지르려면 앞차의 좌측으로 통행하여야 한다, 제43조 시 ㆍ 도경찰청장으로부터 운전면허를 받지 아니하거나 운전면허의 효력이 정지된 경우에는 자동차등을 운전하여서는 아니 된다", 
    options: ["도로에서 어린이를 혼자 놔두어도 된다.", "다른 차를 앞지르려면 앞차의 우측으로 통행하면 된다.", "운전면허는 시 ㆍ 도경찰청장으로부터 받을 수 있다."], correctIndex: 2 },
    
    { question: "다음의 날씨 생활 지수를 참고하여 가장 올바른 행동은?"+" 빨래지수 : 10 잘 마르지 않는다. * 외출지수 : 80 외출을 하는것이 좋아보인다. * 세차지수 : 20 세차 효과가 오래 가지 않는다. * 우산지수 : 70 우산을 준비할 필요가 있다.", 
    options: ["이불 빨래를 하지 않는다.", "친구를 만나서 가까운 산에 오른다.", "밖에 나갈 때 아무것도 챙겨 나가지 않는다."], correctIndex: 0 },
    
    { question: "다음 중 주어진 단어와 가장 관련이 없는 단어는 무엇인가? ", 
    options: ["사랑", "분노", "기쁨"], correctIndex: 1 },
    
    { question: "다음 중 '무엇인가에 대한 복잡하고 정교한 기술이나 방법'을 가리키는 단어는? ", 
    options: ["알고리즘", "프로토콜", "쾌락"], correctIndex: 1 },
    
    { question: "다음 중 '본질적인 성질, 본질'을 나타내는 단어는? ", 
    options: ["복합", "본질", "변화"], correctIndex: 1 },

    { question: "텍스트에서 유용한 정보를 추출하기 위해 단어의 의미와 관련된 특성을 분석하는 작업은? ", 
    options: ["의미 중의성 해소", "형태소 분석", "정규화"], correctIndex: 0 },
    
    { question: "최근 몇 년 동안 어떤 기술이 빠르게 발전하고 있나? ", 
    options: ["항공 우주 기술", "해양 기술", "음성인식 기술"], correctIndex: 2 },
    
    { question: "음성인식 기술은 어떤 역할에 사용되고 있나? ", 
    options: ["다국어 간 의사소통", "해양 탐사", "예술 작품 생성"], correctIndex: 0 },
    
    { question: "어떤 분야에서 기계 번역 기술이 활용되고 있나? ", 
    options: ["우주 탐사", "예술 작품 생성", "다국어 간 의사소통"], correctIndex: 2 },
    
    { question: "다음 중 '강렬한 빛이나 불빛'을 나타내는 단어는? ", 
    options: ["암벽", "저명", "산만"], correctIndex: 1 },
    
    { question: "빈칸에 들어갈 알맞은 접속사는? "+ "6,852개의 섬으로 이루어진 군도 국가인 일본은 혼슈, 규슈, 시코쿠, 홋카이도 등 4개의 섬이 일본 전체 면적의 97%를 차지하며, 대부분의 섬들이 화산 활동을 통해 생겨났다. ( 		 ) 일본의 인구는 약 1억 2,600만 명으로, 세계에서 11번째로 많다", 
    options: ["그런데", "그리고", "그러나"], correctIndex: 1 },
    
    { question: "근로 기준법 조항 중, 설명이 올바른 것은? "+ "15세 미만인 자(「초·중등교육법」에 따른 중학교에 재학 중인 18세 미만인 자를 포함한다)는 근로자로 사용하지 못한다. 제64조 제1항 근로자와 사용자는 각자가 단체협약, 취업규칙과 근로계약을 지키고 성실하게 이행할 의무가 있다. 제 5조 사용자는 근로자 명부와 대통령령으로 정하는 근로계약에 관한 중요한 서류를 3년간 보존하여야 한다. 제42조",
    options: ["근로계약에 관한 중요한 서류를 5년간 보존하여야한다", "근로자는 근로계약을 지킬 필요가 없다", "15세 미만 청소년은 근로자가 될 수 없다."], correctIndex: 0 },
    
    { question: "문장에 알맞은 낱말은? " + "나는 (		) 이 시험에 통과할거야, 이 물건은 (		) 정리가 되어있지않네?", 
    options: ["반드시 - 반듯이", "반듯이 - 반듯히", "반드시 - 반듯히"], correctIndex: 0 },
    
    { question: "낱말의 뜻풀이가 올바른것은? " + "[ 명사 ] 분수에 넘치게 무엇을 탐내거나 누리고자 하는 마음 ㆍ OO이 나다, ㆍ OO 같아서는 당장이라도 집으로 달려가고 싶다.", 
    options: ["마음", "탐욕", "욕심"], correctIndex: 2 },
    
    { question: "그는 사람들의 반감을 샀다에서 반감의 뜻은? ", 
    options: ["반 쪽 짜리 감", "혐오", "반항하는 감정"], correctIndex: 1 },
    
    { question: "쾌청하다의 뜻은? ", 
    options: ["마음이 깨끗해지다", "날씨가 맑다", "잘 살다"], correctIndex: 1 },
    
    { question: "명일의 뜻은? ", options: ["보름", "그믐", "다음 날"], correctIndex: 2 },
    
    { question: "서록의 뜻은? ", options: ["기록하다", "절", "서쪽"], correctIndex: 0 },
    
    { question: "'아버지가방에들어가신다'라는 문장을 띄어쓰기를 추가하여 제대로 정리해보세요.", options: ["아버지 가방에 들어가신다.", "아버지가 방에 들어가신다.", "아버지가 방에 들어 가신다."], correctIndex: 0 },
    
    { question: "하얀 토끼는 색깔이 하얗고, 붉은 토끼는 색깔이 붉습니다. 그렇다면 청색 토끼는 무슨 색깔인가요?", options: ["빨간색", "파란색", "초록색"], correctIndex: 1 },
    
    { question: "어떤 동물은 뒤로 갈수록 앞으로 가고, 앞으로 갈수록 뒤로 가는 특별한 특성을 가지고 있습니다. 이 동물은 무엇일까요?", options: ["달팽이", "뱀", "오리"], correctIndex: 1 }
];

const selectedQuizIndices = [];
while (selectedQuizIndices.length < 15) {
    const randomIndex = Math.floor(Math.random() * allQuizData.length);
    if (!selectedQuizIndices.includes(randomIndex)) {
        selectedQuizIndices.push(randomIndex);
    }
}

// 선택된 문제들의 번호를 정렬
selectedQuizIndices.sort((a, b) => a - b);

// 선택된 문제들을 가져오기
const quizData = selectedQuizIndices.map(index => allQuizData[index]);

// 문제를 랜덤으로 섞는 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 문제 섞기
shuffleArray(quizData);

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);

function startQuiz() {
    document.getElementById('start-page').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const quizPage = document.getElementById('quiz-page');
    const resultPage = document.getElementById('result-page');

    if (currentQuestion < quizData.length) {
        const currentQuiz = quizData[currentQuestion];
        quizPage.innerHTML = `
            <div class="quiz-container">
                <h2 class="quiz-question">${currentQuiz.question}</h2>
                <div class="quiz-options">
                    ${currentQuiz.options.map((option, index) => `
                        <input type="radio" name="option" value="${index}" ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
                        <label>${option}</label><br>
                    `).join('')}
                </div>
                ${currentQuestion === quizData.length - 1 ? `<button onclick="submitQuiz()">제출하기</button>` : `<button onclick="checkAnswer()">다음으로</button>`}
                ${currentQuestion > 0 ? `<button onclick="showPreviousQuestion()">이전으로</button>` : ''}
            </div>
        `;
        quizPage.style.display = 'block';
        resultPage.style.display = 'none';
    } else {
        showResult();
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
        const correctAnswer = quizData[currentQuestion].correctIndex;

        if (userAnswers[currentQuestion] === correctAnswer) {
            score++;
        }

        currentQuestion++;
        showQuestion();
    }
}

function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
        const correctAnswer = quizData[currentQuestion].correctIndex;

        if (userAnswers[currentQuestion] === correctAnswer) {
            score++;
        }

        // 현재 점수를 scores 배열에 추가
        scores.push(score);

        showResult();
    }
}

function showResult() {
    const resultText = document.getElementById('result-text');
    resultText.innerHTML = `테스트가 완료되었습니다.<br>총 15문제 중 ${score}문제를 맞췄습니다.`;

    // 등급 매기기
    let grade = '';
    let guideLink = '';

    if (score === quizData.length) {
        grade = '최상위';
        guideLink = '../../ss/index.html';  // 실제 파일 경로로 대체
    } else if (score >= 12) {
        grade = '상위';
        guideLink = '../../s/index.html';  // 실제 파일 경로로 대체
    } else if (score >= 9) {
        grade = '중위';
        guideLink = '../../b/index.html';  // 실제 파일 경로로 대체
    } else if (score >= 5) {
        grade = '하위';
        guideLink = '../../a/index.html';  // 실제 파일 경로로 대체
    } else {
        grade = '최하위';
        guideLink = '../../slow/index.html';  // 실제 파일 경로로 대체
    }
    

    resultText.innerHTML += `<br>당신의 등급은 '${grade}'입니다.`;

    // 등급에 따른 안내 링크 추가
    resultText.innerHTML += `<p id="guide-link" style="cursor: pointer; text-decoration: underline; color: blue;">안내</p>`;

    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';

    // 안내 링크에 클릭 이벤트 추가
    const guideLinkElement = document.getElementById('guide-link');
    guideLinkElement.addEventListener('click', () => navigateToGuide(guideLink));
}

function navigateToGuide(link) {
    // 새 파일로 이동하려면 window.location.replace() 대신 window.location.href를 사용합니다.
    window.location.href = link;
}

// 결과 페이지에서 시작 페이지로 돌아가는 함수
function goBackToStart() {
    document.getElementById('start-page').style.display = 'block';
    document.getElementById('result-page').style.display = 'none';

    // 퀴즈 초기화 등 필요한 작업 수행
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData.length).fill(null);
}