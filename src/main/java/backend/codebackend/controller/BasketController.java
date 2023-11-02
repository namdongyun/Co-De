package backend.codebackend.controller;

import backend.codebackend.domain.Basket;
import backend.codebackend.domain.Member;
import backend.codebackend.service.BasketService;
import backend.codebackend.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BasketController {
    private final BasketService basketService;
    private final MemberService memberService;
    @PostMapping("/basket")
    public List<Basket> listBasketItems(@PathVariable Long chatroom_id) {
        List<Basket> basketItems = basketService.findAll(chatroom_id);
        return basketItems;
    }

    @PostMapping("/basket/add")
    public Basket addItemToBasket(Long chatroom_id, String menuName, String menuPrice, HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            log.info("세션이 없습니다.");
            return null;
        }

        Optional<Member> member = memberService.findLoginId(String.valueOf(session.getAttribute("memberId")));
        //menuPrice : "10,000원" 에서 숫자 이외의 모든 문자 제거 후 int 타입 변수에 대입
        //value : member 값이 null이 아닐 경우 객체, orElse : member 값이 null인 경우 null
        return member.map(value -> basketService.addItemToBasket(chatroom_id, menuName
                , Integer.parseInt(menuPrice.replaceAll("[^0-9]", ""))
                , value.getNickname()
        )).orElse(null);
    }

    //다른 사람이 추가한 최신 메뉴를 받음 (STOMP)
    @PostMapping("/basket/add/recv")
    public Basket addItemToBasketReceive(String nickname) {
        return basketService.addItemToBasketReceive(nickname);
    }

    //채팅방 장바구니 조회
    @GetMapping("/chat/basket")
    @ResponseBody
    public List<Basket> basket(Long roomId, HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        List<Basket> basket = basketService.findAll(roomId);

        if(basket == null)
            log.info("장바구니가 조회되지 않음. ");

        return basket;
    }

    //채팅방 장바구니 메뉴 수량 수정

    //증가 버튼
    @PostMapping("/chat/basket/plusQuantity")
    @ResponseBody
    public String plusQuantity(Long menuId, HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        //HTML의 menuId를 수정하여 접근하는 유저를 방지하기 위해 장바구니 실제로 담은 사람이랑 로그인 유저랑 비교한다.
        String nickname = memberService.findLoginId(String.valueOf(session.getAttribute("memberId"))).get().getNickname();

        if(!basketService.findBasketMenu(menuId).getNickname().equals(nickname)) {
            return null;
        }

        basketService.plusItemCnt(menuId, nickname);

        return "+ 수량 수정";
    }

    //감소 버튼
    @PostMapping("/chat/basket/minusQuantity")
    @ResponseBody
    public String minusQuantity(Long menuId, HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        //HTML의 menuId를 수정하여 접근하는 유저를 방지하기 위해 장바구니 실제로 담은 사람이랑 로그인 유저랑 비교한다.
        String nickname = memberService.findLoginId(String.valueOf(session.getAttribute("memberId"))).get().getNickname();

        if(!basketService.findBasketMenu(menuId).getNickname().equals(nickname)) {
            return null;
        }

        basketService.minusItemCnt(menuId, nickname);
        return "- 수량 수정";
    }

    //메뉴 삭제 버튼
    @PostMapping("/chat/basket/deleteByMenu")
    @ResponseBody
    public String deleteByMenu(Long menuId, HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if(session == null)
            return null;

        //HTML의 menuId를 수정하여 접근하는 유저를 방지하기 위해 장바구니 실제로 담은 사람이랑 로그인 유저랑 비교한다.
        String nickname = memberService.findLoginId(String.valueOf(session.getAttribute("memberId"))).get().getNickname();
        if(!basketService.findBasketMenu(menuId).getNickname().equals(nickname)) {
            return null;
        }

        basketService.deleteByMenu(menuId);
        return "장바구니 메뉴 삭제";
    }

    //장바구니 총 금액 뷰
    @GetMapping("/chat/basket/totalPrice")
    @ResponseBody
    public Map<Integer, String> getTotalPrice(Long roomId) {

        return basketService.getTotalPrice(roomId);
    }
}