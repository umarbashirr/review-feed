"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name should be atleast 02 charaters.",
  }),
  email: z.string().email({
    message: "Email is not valid",
  }),
  password: z
    .string()
    .min(4, {
      message: "Password should be atleast 04 characters",
    })
    .max(20, {
      message: "Password should be maximum 20 characters only",
    }),
});

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.statusCode !== 201) {
        throw new Error(data?.message);
      }

      toast({
        title: "Success",
        description: data?.message,
      });

      setIsLoading(false);

      router.replace("/login");

      form.reset();
    } catch (error: any) {
      setIsLoading(false);
      console.error(error.message);
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  type="text"
                  {...field}
                  disabled={isLoading}
                />
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
                <Input
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                  disabled={isLoading}
                />
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
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full flex items-center"
          disabled={isLoading}
        >
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Please wait" : "Register now"}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
