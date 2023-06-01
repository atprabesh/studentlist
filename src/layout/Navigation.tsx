import {
  Box,
  Group,
  Navbar,
  ScrollArea,
  ThemeIcon,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import {
  IconGauge,
  IconLogout,
  IconNotes,
  IconPresentationAnalytics,
  IconSettings,
} from "@tabler/icons-react";
import { LinksGroup } from "../component/LinkGroups";

const mockdata = [
  { label: "Assignment", icon: IconGauge },
  {
    label: "Test",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Test Paper", link: "/" },
      { label: "MCQ", link: "/" },
      { label: "Subjective", link: "/" },
      { label: "Real time test", link: "/" },
    ],
  },

  { label: "Discipline", icon: IconPresentationAnalytics },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested({ opened }: { opened: boolean }) {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar
      height={730}
      p="md"
      className={classes.navbar}
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 250 }}
    >
      <Navbar.Section grow component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UnstyledButton
          style={{
            fontWeight: 500,
            display: "block",
            width: "100%",
            padding: `10px 30px`,
          }}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <IconSettings size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">Settings</Box>
            </Box>
          </Group>
        </UnstyledButton>
        <UnstyledButton
          style={{
            fontWeight: 500,
            display: "block",
            width: "100%",
            padding: `10px 30px`,
          }}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30} color="red">
                <IconLogout size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">Logout</Box>
            </Box>
          </Group>
        </UnstyledButton>
      </Navbar.Section>
    </Navbar>
  );
}
