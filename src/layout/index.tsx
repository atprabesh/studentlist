import { AppShell } from "@mantine/core";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "./Header";
import { NavbarNested } from "./Navigation";

const Layout = () => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      header={<NavHeader opened={opened} setOpened={setOpened} />}
      navbar={<NavbarNested opened={opened} />}
      navbarOffsetBreakpoint="sm"
    >
      <Outlet />
    </AppShell>
  );
};

export default Layout;
