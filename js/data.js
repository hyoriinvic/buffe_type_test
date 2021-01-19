const qnaList = [
  {
    q: '1. 오늘은 친구들과 뷔페를 가기로 한 날입니다. 당신의 옷차림은?',
    a: [
      { answer: 'a. 빠짐없이 다, 많이 먹어야지! 고무줄 바지, 소화제 필수!', score: 2 },
      { answer: 'b. 어딜 무슨 일로 가든 제대로 갖춰 입어야지!', score: 4 },
      { answer: 'c. 옷이 무슨 상관이야. 그냥 적당히 입고 가자.', score: 6 },
      { answer: 'd. 뭘 입어야 할 지 모르겠다. 다른 친구들은 뭐입지? 물어보자.', score: 6 }
    ]
  },
  {
    q: '2. 뷔페 도착! 첫 접시 집어든 당신의 행동은?',
    a: [
      { answer: 'a. 전체 메뉴의 위치를 훑어본다.', score: 6 },
      { answer: 'b. 어디로 가든 음식만 담으면 된다. 줄이 제일 짧은 곳으로 가자!', score: 4 },
      { answer: 'c. 좋아하는 메뉴가 있는 곳으로 달려간다.', score: 7 },
      { answer: 'd. 어떻게 먹을지 이미 구상 완료! 계획대로만 움직인다.', score: 2 }
    ]
  },
  {
    q: '3. 본격적으로 음식 담기 시작! 어떻게 담을까?',
    a: [
      { answer: 'a. 종류 별로 하나씩 담는다.', score: 4 },
      { answer: 'b. 보기 좋은 떡이 먹기도 좋다. 이쁘게 담아온다.', score: 2 },
      { answer: 'c. 다른 메뉴는 필요 없다. 좋아하는 메뉴만 가득 담아온다.', score: 5 },
      { answer: 'd. 친구들과 나눠 먹어야지! 호불호 없는 메뉴로만 담아온다.', score: 7 }
    ]
  },
  {
    q: '4. 하나둘 테이블로 돌아오기 시작한다. 다른 친구의 접시를 본 당신은?',
    a: [
      { answer: 'a. 이거랑 같이 먹어봐! 괜찮은 조합을 추천한다.', score: 4 },
      { answer: 'b. 야야 그거 나도 줘! 다른 친구들 음식이 탐난다.', score: 6 },
      { answer: 'c. 주위 신경 안 쓰고 나 먹을 거만 먹는다. 아무도 내 접시에 손 댈 수 없다.', score: 2 },
      { answer: 'd. 친구들이 좋아하는 메뉴가 눈에 보인다. 하나 더 떠와서 나눠 먹어야지!', score: 1 }
    ]
  },
  {
    q: '5. 배가 부르기 시작한다. 하나만 더? 망설여지는데?',
    a: [
      { answer: 'a. 과일, 베이커리류 디저트를 먹으러 간다.', score: 6 },
      { answer: 'b. 배가 불러도 여기서 멈출 수 없다. 한 접시 더!', score: 4 },
      { answer: 'c. 배는 80% 찼을 때 가장 만족스러운 법. 깔끔히 수저를 놓는다.', score: 3 },
      { answer: 'd. 더 먹을까? 말까? 못 정하겠다. 가만히 있기 민망하니 친구따라 나가본다.', score: 5 }
    ]
  },
  {
    q: '6. ',
    a: [
      { answer: 'a. ', score: 6 },
      { answer: 'b. ', score: 4 },
      { answer: 'c. ', score: 2 }
    ]
  },
  {
    q: '7. ',
    a: [
      { answer: 'a. ', score: 6 },
      { answer: 'b. ', score: 2 },
      { answer: 'c. ', score: 4 }
    ]
  },
  {
    q: '8. ',
    a: [
      { answer: 'a. ', score: 6 },
      { answer: 'b. ', score: 7 },
      { answer: 'c. ', score: 5 },
      { answer: 'd. ', score: 4 },
      { answer: 'e. ', score: 3 },
      { answer: 'f. ', score: 2 },
      { answer: 'g. ', score: 1 }
    ]
  },
  {
    q: '9. ',
    a: [
      { answer: 'a. ', score: 7 },
      { answer: 'b. ', score: 6 },
      { answer: 'c. ', score: 4 },
      { answer: 'd. ', score: 2 },
      { answer: 'e. ', score: 1 }
    ]
  },
  {
    q: '10. ',
    a: [
      { answer: 'a. ', score: 4 },
      { answer: 'b. ', score: 2 },
      { answer: 'c. ', score: 3 },
      { answer: 'd. ', score: 5 },
      { answer: 'e. ', score: 6 },
      { answer: 'f. ', score: 1 }
    ]
  }    
]

const infoList = [
  {
    from: 10,
    to: 20,
    mLeft: '10%',
    name: '본전무새형',
    desc: '뷔페에 가면 무조건 본전을 찾아야한다는 말만 반복하는 앵무새, 주로 "삼천원치는 더먹어야한다"는 말만 반복.'
  },
  {
    from: 21,
    to: 30,
    mLeft: '25%',
    name: 'DIY형',
    desc: '뷔페에 가서 디피된 메뉴로 자신만의 메뉴를 창의적으로 만들어 먹는 사람.'
  },
  {
    from: 31,
    to: 40,
    mLeft: '40%',
    name: '내가 제일 잘나가형',
    desc: '무엇이든 인스타그램에 올려 공유하는 SNS 덕후, 어디를 가든 사진찍는데만 30분 이상을 소요하는 사람, 먹는 것 보다 찍는게 중요함'  },
  {
    from: 41,
    to: 50,
    mLeft: '55%',
    name: '폼생폼사형',
    desc: '보기 좋은 떡이 먹기도 좋다, 뷔페에 가서 플레이팅의 재미를 느끼는 사람'
  },
  {
    from: 51,
    to: 60,
    mLeft: '70%',
    name: '한 우물만 파는형',
    desc: '하나면 충분하다며 한 메뉴만 접시 가득 담아오는 사람, 대체로 치킨이나 연어 앞을 서성임'
  },
  {
    from: 61,
    to: 70,
    mLeft: '85%',
    name: '마더테레사형',
    desc: '같이 온 다른 사람들을 위해 함께 먹을 곁들일 메뉴를 계속 담아다 두는 사람, 대체로 배려가 몸에 베여있으며 남부터 생각하다가 자신이 먹고 싶은 음식을 놓침'
  }
]