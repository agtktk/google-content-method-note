export const site={
  "name": "구글 결제구조 노트",
  "description": "Google Play 결제·잔액·개별 주문 환불을 분리해 원하는 처리 경로를 찾습니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "구글정보이용료현금화방법",
  "slug": "google-payment-path",
  "tag": "Google Play",
  "number": "02",
  "answer": "구글정보이용료현금화방법이라는 검색어는 Google의 공식 현금 인출 기능 이름이 아닙니다. 휴대전화로 구매하려는 상황, Play 잔액을 보유한 상황, 특정 주문을 취소하려는 상황을 먼저 나누세요.",
  "intro": "Google Play 결제·잔액·개별 주문 환불을 분리해 원하는 처리 경로를 찾습니다.",
  "steps": [
    {
      "name": "무엇을 보유하고 있는지 먼저 적기",
      "description": "회선의 결제 가능액, 계정 잔액, 이미 구매한 주문은 서로 다른 기록입니다. 어느 금액을 확인하려는지부터 적으세요. 계정 잔액 화면만으로 통신요금의 청구 상태나 외부 지급 여부를 확인할 수는 없습니다."
    },
    {
      "name": "결제 수단의 지원 환경 대조",
      "description": "Google 공식 대한민국 안내에서 현재 결제 수단과 지원 환경을 확인합니다. 앱에서 가능한 기능을 브라우저에서도 같다고 가정하지 않습니다. 거절된 결제를 다른 계정으로 반복하기 전에 원래 주문과 오류부터 확인하세요."
    },
    {
      "name": "잔액 처리와 구매 취소 구분",
      "description": "잔액은 공식 도움말의 제한을 읽고, 구매 취소는 대상 주문과 그 상품 정책을 확인합니다. 두 문제를 외부 현금 지급 약속과 섞어서 설명하지 마세요. 처리 결과는 본인 계정과 결제 수단에서 직접 대조합니다."
    }
  ],
  "accent": "#224641" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"Google Play",number:'01',description:"Google Play 결제·잔액·개별 주문 환불을 분리해 원하는 처리 경로를 찾습니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');
