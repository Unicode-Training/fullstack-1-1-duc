import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schema/contact";
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Tên</label>
          <input type="text" {...register("name")} />
          {errors?.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" {...register("email")} />
          {errors?.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="">Điện thoại</label>
          <input type="text" {...register("phone")} />
          {errors?.phone && <span>{errors.phone.message}</span>}
        </div>
        <div>
          <label htmlFor="">Trạng thái</label>
          <select {...register("status")}>
            <option value="">Chọn trạng thái</option>
            <option value="active">Actice</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors?.status && <span>{errors.status.message}</span>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
