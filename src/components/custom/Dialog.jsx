import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";

export default function DialogPopup({ dialog, login }) {
  return (
    <Dialog open={dialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <img src="/logo.png" alt="logo" width={"60"} />
          <DialogTitle>
            <div className="pt-3">Sign In With Google</div>
          </DialogTitle>
          <DialogDescription>
            Sign in to the App with Google authentication securely
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button className="w-full" onClick={login}>
            Sign In with google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
