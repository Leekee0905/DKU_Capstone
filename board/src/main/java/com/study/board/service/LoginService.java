package com.study.board.service;

import com.study.board.entity.User;
import com.study.board.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class LoginService {
    @Autowired
    private final UserRepository userRepository;

    public boolean login(User user) {

        User findUser = userRepository.findByUSER_ID(user.getUSER_ID());

        if(findUser == null){
            return false;

        }

        if(!findUser.getUSER_PW().equals(user.getUSER_PW())){
            return false;
        }
        return true;

    }

};