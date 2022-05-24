package com.study.board.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.study.board.entity.Board;
import com.study.board.service.BoardService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class BoardController {


    private BoardService boardService;

        @CrossOrigin
        @PostMapping("/board")
        public ResponseEntity<?> save(@RequestBody Board board) {
            return new ResponseEntity<>(boardService.저장하기(board), HttpStatus.CREATED); // 200
        }

        @CrossOrigin
        @GetMapping("/board")
        public ResponseEntity<?> findAll() {
            return new ResponseEntity<>(boardService.모두가져오기(), HttpStatus.OK); // 200
        }

        @CrossOrigin
        @GetMapping("/board/{id}")
        public ResponseEntity<?> findById(@PathVariable Integer id) {
            return new ResponseEntity<>(boardService.한건가져오기(id), HttpStatus.OK); // 200
        }

        @CrossOrigin
        @PutMapping("/board{id}")
        public ResponseEntity<?> update(@PathVariable Integer id, @RequestBody Board board) {
            return new ResponseEntity<>(boardService.수정하기(id, board), HttpStatus.OK); // 200
        }

        @CrossOrigin
        @DeleteMapping("/board/{id}")
        public ResponseEntity<?> deleteById(@PathVariable Integer id) {
            return new ResponseEntity<>(boardService.삭제하기(id), HttpStatus.OK); // 200
        }


    /*@GetMapping("/board/write") //localhost:8080/board/write
    public String boardWriteForm() {

        return "boardWriter";
    }
    @PostMapping("/board/writepro")
    public String boardWritePro(Board board) {

        boardService.write(board);

        return "redirect:/board/list";
    }

    @GetMapping("/board/join") //localhost:8080/board/write
    public String boardJoinForm() {

        return "boardJoin";
    }

    @PostMapping("/board/joinpro")
    public String boardJoinPro(User user) {

        boardService.write_user(user);

        return "redirect:/board/list";
    }

    @GetMapping("/board/list")
    public String boardList(Model model) {

        model.addAttribute("list", boardService.boardList());

        return "boardList";
    }

    @GetMapping("/board/view") // localhost:8080/board/view?id=1
    public String boardView(Model model, Integer id) {

        model.addAttribute("board", boardService.boardView(id));
        return "boardView";
    }

    @GetMapping("/board/modify/{id}")
    public String boardModify(@PathVariable("id") Integer id,
                              Model model) {

        model.addAttribute("board", boardService.boardView(id));

        return "boardmodify";
    }


    @PostMapping("/board/update/{id}")
    public String boardUpdate(@PathVariable("id") Integer id, Board board) {

        Board boardTemp = boardService.boardView(id);
        boardTemp.setTitle(board.getTitle());
        boardTemp.setContent(board.getContent());

        boardService.write(boardTemp);

        return "redirect:/board/list";

    }*/
}
