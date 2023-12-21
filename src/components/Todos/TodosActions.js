import Button from "../UI/Button";

import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button>
        <RiRefreshLine onClick={resetTodos} title="Reset" />
      </Button>
      <Button>
        <RiDeleteBin2Line
          onClick={deleteCompletedTodos}
          title="Clear Completed Items"
          disabled={!completedTodosExist}
        />
      </Button>
    </>
  );
}

export default TodosActions;
