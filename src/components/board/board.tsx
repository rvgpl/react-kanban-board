import React, { useState } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import { Lane } from "../lane/lane";
import { TextField } from "../text-field/text-field";

import "./board.css";
import { doneTasks, inProgressTasks, todoTasks } from "./board.data";

const Board: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <section className="board">
      <div className="board-input-field">
        <TextField value={value} onChange={setValue} />
        <Button onClick={() => console.log(value)}>Add</Button>
      </div>
      <div className="board-lanes">
        <Lane title="Todo">
          {todoTasks.map((task) => (
            <Card
              task={task}
              key={task.id}
              onClick={(id) => console.log("card id", id)}
            />
          ))}
        </Lane>
        <Lane title="In Progress">
          {inProgressTasks.map((task) => (
            <Card
              task={task}
              key={task.id}
              onClick={(id) => console.log("card id", id)}
            />
          ))}
        </Lane>
        <Lane title="Done">
          {doneTasks.map((task) => (
            <Card
              task={task}
              key={task.id}
              onClick={(id) => console.log("card id", id)}
              disableButton
            />
          ))}
        </Lane>
      </div>
    </section>
  );
};

export { Board };
