import React, { useCallback } from 'react';
import { useTodoContext } from 'states/Provider';
import { Todo } from 'states/todos/types';

const TodoList: React.FC = () => {
  const { state, dispatchActions } = useTodoContext();

  const DeleteButton: React.FC<{ id: number }> = ({ id }) => {
    const _onClick = useCallback(() => {
      dispatchActions.delete({ id: id });
    }, [id]);

    return <button onClick={_onClick}>×</button>;
  };

  return (
    <React.Fragment>
      {state.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.actionItem}</span>
            <DeleteButton id={todo.id} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TodoList;
