import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div>
    <h2>Hello world</h2>
     <UserButton></UserButton>
    </div>
  );
}
