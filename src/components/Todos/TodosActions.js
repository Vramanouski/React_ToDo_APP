import Button from "../UI/Button";

import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button onClick={resetTodos} title="Reset">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        title="Clear Completed Items"
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
