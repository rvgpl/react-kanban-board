import React from "react";
import { ITask } from "../../types";
import { formatDate } from "../../utils";
import { Button } from "../button/button";

import "./card.css";

type ICardProps = {
  onClick: (cardId: string | number) => void;
  disableButton?: boolean;
  task: ITask;
};

const Card: React.FC<ICardProps> = ({
  onClick,
  task,
  disableButton = false,
}) => {
  return (
    <div className="card">
      <p className="card-text">{task.text}</p>
      <div className="card-footer">
        <time className="card-timestamp">{formatDate(task.createdAt)}</time>
        {!disableButton && (
          <Button onClick={() => onClick(task.id)}>Move &gt;</Button>
        )}
      </div>
    </div>
  );
};

export { Card };
