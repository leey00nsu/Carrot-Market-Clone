import React from "react";
import Header from "../../components/header/DefaultHeader/Header";
import classes from "./Article.module.css";
import ProfileIcon from "../../components/UI/ProfileIcon";
import ImageSlide from "../../components/UI/ImageSlide";

const Article = () => {
  return (
    <>
      <Header />
      <article className={classes.content}>
        <section className={classes.img}>
          <ImageSlide />
        </section>
        <section className={classes.profile}>
          <div className={classes["profile-desc"]}>
            <ProfileIcon />
            <div className={classes["profile-userinfo"]}>
              <div className={classes["profile-userinfo-top"]}>
                <div className={classes["profile-userinfo-username"]}>
                  유저이름
                </div>
              </div>
              <div className={classes["profile-userinfo-address"]}>주소</div>
            </div>
          </div>
          <div></div>
        </section>
        <section className={classes.desc}>
          <div className={classes["desc-title"]}>제목</div>
          <div className={classes["desc-time"]}>시간</div>
          <div className={classes["desc-price"]}>가격</div>
          <div className={classes["desc-content"]}>내용</div>
        </section>
      </article>
    </>
  );
};

export default Article;
