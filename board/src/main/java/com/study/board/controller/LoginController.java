package com.study.board.controller;

import com.study.board.entity.User;
import com.study.board.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    @Autowired
    private final LoginService loginService;

    @GetMapping("/board/login")
    public String login() {
        return "logIn";
    }

    @PostMapping("/board/login")
    public String loginId(@ModelAttribute User user) {
        if (loginService.login(user)) {
            return "redirect:/board/list";
        }
        return "logIn";
    }
}