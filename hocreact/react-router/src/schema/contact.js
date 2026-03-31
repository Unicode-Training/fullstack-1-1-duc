import z from "zod";
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Tên bắt buộc phải nhập")
    .refine(
      async (value) => {
        return value === value.toUpperCase();
        //return true -> pass
      },
      {
        message: "Tên phải viết hoa",
      },
    ),
  email: z
    .string()
    .min(1, "Email bắt buộc phải nhập")
    .pipe(z.email("Email không đúng định dạng")),
  phone: z.string().min(1, "Điện thoại bắt buộc phải nhập"),
  status: z
    .string()
    .transform((e) => (e === "" ? undefined : e))
    .pipe(
      z
        .enum(["active", "inactive"], {
          message: "Trạng thái không đúng định dạng",
        })
        .optional(),
    ),
});

//ok chưa?
