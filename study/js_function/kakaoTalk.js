<a id="send-to-btn" href="#" onclick="sendTo();">
    <img src="//k.kakaocdn.net/14/dn/btqc6xrxbuT/7VJk7YSWITkz9K9pbXEffk/o.jpg" />
</a>


<script type="text/javascript" src="KaKao.js">
    // 웹 플랫폼 도메인 등 초기화한 앱의 설정이 그대로 적용됩니다.
    // 초기화한 앱에 현재 도메인이 등록되지 않은 경우 에러가 발생합니다.
    Kakao.init('3e786f8df14fcfc89d159421a6a7c9b6')

    function sendTo() {
        Kakao.Auth.login({
            scope: 'PROFILE,TALK_MESSAGE',
            success: function() {
                Kakao.API.request({
                    url: '/v2/api/talk/memo/send',
                    data: {
                        template_id: 32124,
                        args: '{"title": "판교 맛집에 들르다. 다양하고 풍부한 퓨전 한정식. 깔끔한 내부 인테리어 라이언","description": "부담없는 가격에 푸짐하게 즐기는 점심메뉴 런치한정식, 불고기정식, 돼지 김치찌개 등"}',
                    },
                    success: function(res) {
                        alert('success: ' + JSON.stringify(res))
                    },
                    fail: function(err) {
                        alert('error: ' + JSON.stringify(err))
                    },
                })
            },
            fail: function(err) {
                alert('failed to login: ' + JSON.stringify(err))
            },
        })
    }
</script>