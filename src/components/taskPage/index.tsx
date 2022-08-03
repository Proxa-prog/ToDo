import { useParams } from "react-router-dom";
import { ITask } from "../../type";

const TaskPage = ({taskState}: any) => {
    const params = useParams();
    
    return (
        <section>
            {taskState.map((task: ITask) => {
                if (task.id === Number(params.taskId)) {
                    return <h1>{task.name}</h1>
                }
            })}
        </section>  
    );
  }
  
  export default TaskPage;