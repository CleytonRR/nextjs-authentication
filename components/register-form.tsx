import Form from "next/form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type IRegisterFormProps = {
  registerAction: (formData: FormData) => Promise<void>;
} & React.ComponentProps<"div">;

export function RegisterForm({
  className,
  registerAction,
  ...props
}: IRegisterFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Create your account to access platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={registerAction} noValidate>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="john"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="*********"
                  required
                />
              </Field>
              <Field>
                <Button type="submit">Create account</Button>
                <FieldDescription className="text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
