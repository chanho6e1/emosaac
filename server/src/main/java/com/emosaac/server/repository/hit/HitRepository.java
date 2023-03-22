package com.emosaac.server.repository.hit;

import com.emosaac.server.domain.book.Hit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface HitRepository extends JpaRepository<Hit, Long> {
    @Query("select h from Hit h where h.book.bookId = :bookId and h.user.userId = :userId")
    Optional<Object> existsByBookIdAndUserId(Long bookId, Long userId);
}
