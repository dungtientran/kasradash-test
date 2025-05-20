"use client";

import React, { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import useFormStore from "@/stores/useFormStore";
import { useBeforeUnload } from "@/hooks/use-before-unload";
import { useWarnOnNavigate } from "@/hooks/use-warn-on-navigate";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});
type FormData = z.infer<typeof formSchema>;

export const SettingForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, setFormData, hasChanges, setHasChanges } = useFormStore(
    (state) => state
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  });

  const onSubmit = (values: FormData) => {
    console.log("Form data:", values);
    setFormData({
      email: "",
      name: "",
      password: "",
    });
    form.reset();
    setHasChanges(false);
  };

  const toggleShowPassword = useCallback(() => setShowPassword((v) => !v), []);

  useBeforeUnload(hasChanges);
  useWarnOnNavigate(hasChanges);

  const createChangeHandler = (fieldName: keyof FormData) =>
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      const updated = { ...form.getValues(), [fieldName]: e.target.value };
      form.setValue(fieldName, e.target.value);
      setFormData(updated);
    };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  onChange={createChangeHandler("name")}
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
                  type="email"
                  placeholder="example@mail.com"
                  {...field}
                  onChange={createChangeHandler("email")}
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
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    {...field}
                    onChange={createChangeHandler("password")}
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "hide-password" : "show-password"
                    }
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
