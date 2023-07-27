* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: "Noto Sans KR", sans-serif;
  background-color: #ffffff;
  line-height: 1.6;
  display: block;
}

a {
  color: inherit;
  /* 글자 색생은 부모로부터 상속 */
  text-decoration: none;
}

input:focus {
  outline: none;
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.header {
  position: relative;
  width: 100%;
  height: 130px;
  overflow: visible;
  /*div 박스 바깥으로 삐져나와도 표시*/
}

.login {
  position: absolute;
  top: 10px;
  right: 20px;
  width: 100%;
  text-align: right;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  z-index: 1;
}

.name {
  position: absolute;
  top: 14px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
}

.address {
  position: relative;
  top: 80px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  /*줄바꿈 방지*/
  max-width: 600px;
  margin: 0 auto;
}

.address #loc_btn {
  position: relative;
  top: 11px;
  left: 6px;
  width: 30px;
  height: 30px;
  font-size: 14px;
  border: none;
  background-color: #d9d9d9;
  display: inline-block;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
}

.address #address_input {
  position: relative;
  height: 30px;
  width: 40%;
  border: none;
  background-color: #d9d9d9;
  color: black;
}

.address #find_address {
  position: relative;
  top: 2px;
  right: 6px;
  width: 12%;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  background-color: #7cab75;
  color: white;
  border: none;
  display: inline-block;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.address #address_input_commit {
  position: relative;
  top: 2px;
  right: 5px;
  width: 6%;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  background-color: #7cab75;
  color: white;
  border: none;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
}

.profile {
  position: absolute;
  top: 70px;
  right: 20px;
  text-align: center;
  white-space: nowrap;
  /*줄바꿈 방지*/
  z-index: 3;
}

/*프로필 버튼*/
#profile_btn {
  position: relative;
  top: 11px;
  width: 40px;
  height: 40px;
  font-size: 14px;
  border: none;
  background-color: #f0f0f0;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
}

/*프로필 클릭시 표시되는 창*/
#layer-header-profile {
  display: none;
  position: absolute;
  top: 130%;
  left: -35px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  background-color: #bfbfbf;
  font-size: 14px;
  transform: translate3d(-50%, 0, 0);
  border-radius: 10px;
}

.header-profile-direct {
  z-index: 1;
  width: 150px;
  padding: 15px;
  font-size: 15px;
}

#profile_btn_btn {
  top: 2px;
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  background-color: #d9d9d9;
  color: #656565;
  border: none;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  z-index: 3;
}

.board {
  position: relative;
  top: 40px;
  width: 100%;
  height: 400px;
  border: 1px solid #d9d9d9;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: auto;
}

.board .search-list {
  top: 140px;
  right: 14px;
  position: fixed;
  text-align: right;
  width: 100%;
  z-index: 1;
}
.board .search-list #search_list {
  border: none;
  height: 24px;
  width: 20%;
  background-color: #d9d9d9;
  color: black;
  z-index: 1;
}
.board .search-list #search_btn {
  position: relative;
  width: 4%;
  height: 24px;
  right: 6px;
  top: 2px;
  font-size: 14px;
  font-weight: bold;
  background-color: #7cab75;
  color: white;
  border: none;
  display: inline-block;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
.board .content-list {
  display: none;
  margin: 10px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: bold;
  background-color: #d9d9d9;
  color: #656565;
  border-radius: 4px;
}
.board .content-list div {
  display: inline-block;
  text-align: center;
  padding: 15px 10px 15px 10px;
  border: none;
}

.board .content-list .participant_num {
  width: 10%;
}
.board .content-list .food {
  width: 10%;
}
.board .content-list .title {
  width: 55%;
  text-align: left;
}
.board .content-list .writer {
  width: 10%;
}
.board .content-list .time {
  width: 10%;
}

.board .make-content {
  position: fixed;
  top: 580px;
  right: 25px;
  text-align: center;
  white-space: nowrap; /*줄바꿈 방지*/
}

.board .make-content #make_content_btn {
  width: 120%;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  background-color: #7cab75;
  color: #f0f0f0;
  border: none;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;
}

.board .load-btn {
  text-align: center;
  margin-bottom: 10px;
}

.board .load-btn #load_btn {
  width: 10%;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  background-color: #7cab75;
  color: #f0f0f0;
  border: none;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
}
/* 모집글 클릭시 입장 확인 모달창 */
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  /*숨기기*/
  z-index: -1;
  opacity: 0;
}
.show {
  opacity: 1;
  z-index: 1000;
  transition: all 0.5s;
}
.modal-window {
  position: relative;
  width: 100%;
  height: 100%;
}
.modal-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);

  width: 200px;
  height: 100px;

  transform: translate(-50%, -40%);
}
.show .modal-popup {
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  display: inline-block;
  font-weight: bold;
  color: #272727;
  background-color: #e6e6e6;
  border-radius: 6px;
  text-align: center;
}
.modal-popup .modal-btn {
  position: relative;
  top: 20px;
}

.modal-popup .modal-btn .modal_btn {
  cursor: pointer;
  width: 30%;
  margin: 10px;
}
