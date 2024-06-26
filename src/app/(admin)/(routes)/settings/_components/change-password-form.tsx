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
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ChangePasswordFormSchema = z
  .object({
    currentPassword: z.string().min(4, {
      message: "Name should be minimum 02 characters",
    }),
    newPassword: z.string().min(4, {
      message: "Password should be atleast 02 characters",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof ChangePasswordFormSchema>>({
    resolver: zodResolver(ChangePasswordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ChangePasswordFormSchema>) {
    console.log(values);
    setIsLoading(true);
    try {
      const response = await fetch("/api/me/change-password", {
        method: "POST",
        body: JSON.stringify({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        }),
      });

      const result = await response.json();

      if (!result?.success) {
        throw new Error(result?.message);
      }

      setIsLoading(false);
      form.reset();
      toast({
        title: "Success",
        description: result?.message,
      });
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-4">
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your current password"
                  type="password"
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
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your new password"
                  type="password"
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
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your new password again"
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
          className="ml-auto flex items-center"
          disabled={isLoading}
        >
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Please wait" : "Update now"}
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
