import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SingleReviewCard = () => {
  return (
    <article className="relative flex items-start justify-start gap-4 p-4 rounded-md border">
      <div className="absolute top-3 right-3">
        <p className="rotate-12">3/5</p>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div className="mb-2">
          <h4 className="text-lg font-medium leading-5">John Doe</h4>
          <p className="text-sm text-muted-foreground">
            Posted on 22 Jan, 2024
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente
          at debitis illum aliquam repellendus quos molestiae eveniet omnis
          impedit deleniti quasi soluta eaque dolor odit, ipsa quo ea eum.
        </p>
      </div>
    </article>
  );
};

export default SingleReviewCard;
