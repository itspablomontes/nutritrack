"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useAuthStore from "@/stores/useAuthStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(255, { message: "Your name is too long" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "This Email is Invalid" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "The password must contain at least 8 characters" }),
    confirm_password: z.string().min(1, { message: "Confirm your password!" }),
  })
  .refine(
    (data) => {
      return data.confirm_password === data.password;
    },
    { message: "Passwords Don't Match", path: ["confirm_password"] },
  );

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const registerUser = useAuthStore((state) => state.registerUser);
  const router = useRouter();

  const handleSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      await registerUser(data);
      toast.success("You Successfully Registered");
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message ? error.message : "Failed to Register");
      } else {
        toast.error("Failed to Register");
      }
    }
    form.reset();
  };

  return (
    <div className="w-full md:max-w-[80%] text-2xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Insert your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Insert your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-accent-primary font-bold">
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
}
