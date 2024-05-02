import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface DynamicButtonProps {
  isLoading: boolean;
  className?: string;
  loadingText: string;
  text: string;
}

const DynamicButton = ({
  isLoading,
  loadingText,
  text,
  className = "",
}: DynamicButtonProps) => {
  return (
    <Button type="submit" className={className} disabled={isLoading}>
      {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : text}
    </Button>
  );
};

export default DynamicButton;
