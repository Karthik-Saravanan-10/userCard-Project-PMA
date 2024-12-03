import { Button, Card, CardContent, Stack } from "@mui/material";

function Alert({ setremoveClick, redirectHandler, elementName }) {
  function clearHandler() {
    setremoveClick(false);
    redirectHandler(true);
  }

  function notHandler() {
    setremoveClick(false);
    redirectHandler(false);
  }

  return (
    <>
      <div className="contain">
        <Card sx={{ maxWidth: "370px", background: "black", color: "white" }}>
          <CardContent>
            <p>Are you want to delete {elementName}'s card?</p>
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

export default Alert;
