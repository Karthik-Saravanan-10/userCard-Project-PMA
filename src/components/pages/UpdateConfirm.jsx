import { Button, Card, CardContent, Stack } from "@mui/material";
import './formpage.css'

function UpdateConfirm({setprev,setupdate}) {
  function clearHandler() {
    setprev(false);
    setupdate(true);
  }

  function notHandler() {
    setprev(false);
  }
  return (
    <>
      <div className="contain">
        <Card sx={{ maxWidth: "370px", background: "black", color: "white" }}>
          <CardContent>
            <p>Are you want to update the card?</p>
            <Stack
              direction={"row"}
              sx={{ gap: "30px", justifyContent: "center", mt: "20px " }}
            >
              <Button variant="outlined" onClick={clearHandler}>
                Yes
              </Button>
              <Button variant="contained" onClick={notHandler}>
                No
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default UpdateConfirm;
