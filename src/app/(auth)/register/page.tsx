import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "../_components/register-form";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Join us now and start collecting valuable feedbacks for your
            business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex items-center justify-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600">
            Login now
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
