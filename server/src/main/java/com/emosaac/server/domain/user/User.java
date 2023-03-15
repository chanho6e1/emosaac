package com.emosaac.server.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import com.sun.istack.Nullable;
import com.emosaac.server.domain.BaseEntity;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import javax.validation.constraints.Size;

import javax.persistence.*;

@DynamicUpdate
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USER")
public class User extends BaseEntity {

    @Id
    @Column(name = "USER_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "NICK_NAME", unique = true)
    @Size(max = 100)
    private String nickName;

    @Column(name = "USER_NAME", length = 100)
    @NotNull
    @Size(max = 100)
    private String userName;

    @Column(name = "EMAIL", length = 512, unique = false)
    @Nullable
    @Size(max = 512)
    private String email;

    @JsonIgnore
    @Column(name = "PASSWORD", length = 128)
    @NotNull
    @Size(max = 128)
    private String password;

    @Column(name = "IMAGE_URL", length = 512)
//    @NotNull
    @Size(max = 512)
    private String imageUrl;

    @Column(name = "PROVIDER_TYPE", length = 20)
    @Enumerated(EnumType.STRING)
    @NotNull
    private AuthProvider providerType;

    @Column(name = "GENDER")
    @Nullable
    private boolean gender;

    @Column(name = "AGE")
    @Nullable
    private Integer age;

    String providerId;

    private String favoriteWebtoonGenre; //*로 구별 (선호장르 3개씩)

    private String favoriteNovelGenre; //*로 구별 (선호장르 3개씩)


//    @Column(name = "ROLE_TYPE", length = 20)
//    @Enumerated(EnumType.STRING)
//    @NotNull
//    private Role role;

    @Builder
    public User(String userName, String email, String password, String imageUrl,String providerId){
        this.userName = userName;
        this.email = email;
        this.password = "NO_PASS";
        this.imageUrl = imageUrl != null ? imageUrl : "";
//        this.providerType = providerType;
        this.providerId = providerId;

//        this.role = role;
    }



//    public User update(String nickName, String imageUrl){
//        this.nickName = nickName;
//        this.imageUrl = imageUrl;
//
//        return this;
//    }

//    public User update(UserUpdateRequest user){
//        this.nickName = user.getNickName();
//        this.imageUrl = user.getImageUrl();
//        this.department = user.getDepartment();
//        this.discription = user.getDiscription();
//        //
//
//        return this;
//    }
    public void updateNickName(String nickName){
        this.nickName = nickName;
    }

    public void updateImageUrl(String profileImageUrl){
        this.imageUrl = imageUrl;
    }

    public void setUserProfile(String baseImg) {
        this.imageUrl = baseImg;
    }
}

