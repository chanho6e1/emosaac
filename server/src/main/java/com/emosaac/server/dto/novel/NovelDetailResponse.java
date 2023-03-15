package com.emosaac.server.dto.novel;

import com.emosaac.server.domain.book.Book;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class NovelDetailResponse {
    private Long bookId;
    private int platform;
    private String thumbnail;
    private String title;
    private String author;
    private String href;
    private String story;
    private String tag;
    private String genre;
    private String regist;
    private String grade;
    private double score;
    private Integer hit;
    private String day;

    @QueryProjection
    public NovelDetailResponse(Book book){
        this.bookId = book.getBookId();
        this.platform = book.getPlatform();
        this.thumbnail = book.getThumbnail();
        this.title = book.getTitle();
        this.author = book.getAuthor();
        this.href = book.getHref();
        this.story = book.getStory();
        this.tag = book.getTag();
        this.genre = book.getGenre().getName();
        this.grade = book.getGrade();
        this.regist = book.getRegist();
        this.score = book.getScore();
        this.hit = book.getHit();
        this.day = book.getDay();
    }

}