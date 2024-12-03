import { Button, Card, CardContent, Stack } from "@mui/material";

function Alert({ setremoveClick, redirectHandler }) {
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
        <Card sx={{ maxWidth: "250px" }}>
          <CardContent>
            <p>Are you sure delete the card?</p>
            <Stack
              direction={"row"}
              sx={{ gap: "30px", justifyContent: "center" }}
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
