import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  id: string;
};

const Project = (props: Props) => {
  const b = props.id;
  return (
    <div>
      <Card className="h-full flex flex-col">
        <CardHeader className="">
          <CardTitle>Chat Application - FullStack</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>Card Content</p>
          <li>asdg</li>
          <li>asdg</li>
          <li>asdg</li>
          <li>asdg</li>

          {b == "2" && (
            <>
              <li>asdg</li>
              <li>asdg</li>
              <li>asdg</li>
              <li>asdg</li>
              <li>asdg</li>
              <li>asdg</li>
              <li>asdg</li>
            </>
          )}
        </CardContent>
        <CardFooter>
          <p>Card</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Project;
