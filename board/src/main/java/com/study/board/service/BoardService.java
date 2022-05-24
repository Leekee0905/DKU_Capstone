package com.study.board.service;

/*import com.study.board.entity.Board;
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


}*/
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.study.board.entity.Board;
import com.study.board.repository.BoardRepository;

import lombok.RequiredArgsConstructor;

// 기능을 정의할 수 있고, 트랜잭션을 관리할 수 있음.

@RequiredArgsConstructor
@Service
public class BoardService {

    private final BoardRepository boardRepository;

    @Transactional // 서비스 함수가 종료될 때 commit할지 rollback할지 트랜잭션 관리하겠다.
    public Board 저장하기(Board board) {
        return boardRepository.save(board);
    }

    @Transactional(readOnly = true) // JPA 변경감지라는 내부 기능 활성화 X, update시의 정합성을 유지해줌. insert의 유령데이터현상(팬텀현상) 못막음.
    public Board 한건가져오기(Integer id) {
        return boardRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!"));
    }

    @Transactional(readOnly = true)
    public List<Board> 모두가져오기(){
        return boardRepository.findAll();
    }

    @Transactional
    public Board 수정하기(Integer id, Board board) {
        // 더티체팅 update치기
        Board boardEntity = boardRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!")); // 영속화 (book 오브젝트) -> 영속성 컨텍스트 보관
        boardEntity.setTitle(board.getTitle());
        boardEntity.setContent(board.getContent());
        return boardEntity;
    } // 함수 종료 => 트랜잭션 종료 => 영속화 되어있는 데이터를 DB로 갱신(flush) => commit    ======> 더티체킹

    @Transactional
    public String 삭제하기(Integer id) {
        boardRepository.deleteById(id); // 오류가 터지면 익셉션을 타니까.. 신경쓰지 말고
        return "ok";
    }
}
