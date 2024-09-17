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

// access_token: "ya29.a0AcM612w23iHHxmLbRFSsVEvBdB7szomUqvhMQbZ9po6SR4yH9L_la2fnBUCpGaLT01PbouNKeUowHyHUfm_1Ej1MiEqyIVpQosO-yDRIsJ6wyjG3flj9YPvBohmpIk4TNmsWrBxoqBIJypR_UHQLLnM_byFOLu0YLAaCgYKAdESARISFQHGX2MisJZpC69e1hD7daqWQoPoHw0169"
// ​
// authuser: "1"
// ​
// expires_in: 3599
// ​
// prompt: "consent"
// ​
// scope: "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid"
// ​
// token_type: "Bearer"