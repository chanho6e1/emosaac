package com.emosaac.server.domain.recommand;

import com.emosaac.server.domain.book.Book;
import com.emosaac.server.domain.user.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="USER_BASED_CF_MODEL")
public class USERBasedCFModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ITEM_NO")
    private Integer id;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="USER_NO")
    private User user;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="BOOK_NO")
    private Book book;
}
