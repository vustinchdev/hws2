import React from "react";
import downIcon from "./images/downIcon.svg";
import upIcon from "./images/upIcon.svg";
import noneIcon from "./images/noneIcon.svg";

// добавить в проект иконки и импортировать
// const downIcon = down;
// const upIcon = up;
// const noneIcon = "";
// console.log(down);

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === "") {
    sort = down;
  } else if (sort === down) {
    sort = up;
  } else if (sort === up) {
    sort = "";
  } else {
    sort = down;
  }
  return sort;
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      <img src={icon} id={id + "-icon-" + sort} />
      {/*сделать иконку*/}
      {/*<img*/}
      {/*    id={id + '-icon-' + sort}*/}
      {/*    src={icon}*/}
      {/*/>*/}
      {/* {icon} а это убрать */}
    </span>
  );
};

export default SuperSort;
