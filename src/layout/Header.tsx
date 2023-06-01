import {
  Avatar,
  Burger,
  Container,
  Header,
  MediaQuery,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderBottom: 0,
  },
  inner: {
    height: 60,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const NavHeader = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Container className={classes.inner} fluid>
          <Text component={Link} to={"/"}>
            Logo
          </Text>
          {<Avatar />}
        </Container>
      </div>
    </Header>
  );
};

export default NavHeader;
