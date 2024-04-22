import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import LoginForm from "../_components/login-form";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Access your account</CardTitle>
          <CardDescription>
            Welcome back! We are happy to see you again
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex items-center justify-center text-sm">
          Are you new here?{" "}
          <Link href="/register" className="text-indigo-600">
            Register now
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
