import { Container, Typography } from "@mui/material";

function Header() {
  const today = new Date();
  const weekday = today.toLocaleDateString("ru-RU", { weekday: "long" });
  const date = today.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  });

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h1">{capitalize(weekday)}</Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {capitalize(date)}
      </Typography>
    </Container>
  );
}

export default Header;
