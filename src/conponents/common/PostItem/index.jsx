import dayjs from "dayjs";
import React from "react";
import Icon from "@/conponents/common/Icon";
import styled from "styled-components";

const PostItemStyled = styled.div``;

function PostItem({ item, className, titleClassName }) {
  const { title, category, imageUrl, createTime } = item;
  return (
    <PostItemStyled className={className}>
      <img
        src={imageUrl}
        alt={title}
      />
      <div className="post-info">
        <span className="post-category">{category}</span>
        <span className={`${titleClassName} post-title`}>{title}</span>
        <div className="post-create-time">
          <Icon name="calendar" />
          <span>{dayjs(createTime).format("DD MMMM, YYYY")}</span>
        </div>
      </div>
    </PostItemStyled>
  );
}

export default PostItem;
