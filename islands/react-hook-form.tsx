import { useForm } from "esmsh/react/react-hook-form";

type HackToAvoidReactPreactTypeMismatch = () => void; // help needed
const IslandReactHookForm: preact.FunctionComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(data => console.log(data)) as HackToAvoidReactPreactTypeMismatch;
   
  return (
    <form onSubmit={onSubmit} class="p-3 bg-gray-50 flex flex-col gap-1">
      <div>
        First name <input {...register("firstName")} class="p-1" />
      </div>
      <div>
        Gender
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
      <input type="submit" />
    </form>
  );
}

export default IslandReactHookForm;
