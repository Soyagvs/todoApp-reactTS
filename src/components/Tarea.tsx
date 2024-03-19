import React from "react";

type TareaProps = {
  tarea: string;
  borrarTarea: () => void;
};

const Tarea: React.FC<TareaProps> = ({ tarea, borrarTarea }) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={borrarTarea}>Borrar</button>
    </div>
  );
};

export default Tarea;