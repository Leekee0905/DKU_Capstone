package com.study.board.service;

import com.study.board.entity.Board;
import com.study.board.entity.User;
import com.study.board.repository.BoardRepository;
import com.study.board.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.omg.PortableServer.IdAssignmentPolicyValue.USER_ID;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;
    // 글 작성
    public void write(Board board) {

        boardRepository.save(board);
    }
    @Autowired
    private UserRepository userRepository;
    public void write_user(User user) {

        userRepository.save(user);
    }
    // 게시글 리스트 처리
    public List<Board> boardList() {

        return boardRepository.findAll();
    }

    // 특정 게시글 불러오기
    // 1번 넣으면 1번 게시물
    public Board boardView(Integer id) {

        return boardRepository.findById(id).get();
    }


}
