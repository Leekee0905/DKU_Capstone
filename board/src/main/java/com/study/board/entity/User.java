package com.study.board.entity;

import lombok.Data;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer USER_NO;

    private String USER_ID;

    private String USER_PW;

    private String USER_NNAME;

    private String USER_EMAIL;


}


