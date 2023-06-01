import { Box, Input, Paper, ScrollArea } from "@mantine/core";

import { Tabs } from "@mantine/core";
import {
  IconClipboardCheck,
  IconClipboardOff,
  IconSearch,
} from "@tabler/icons-react";
import StudentRow from "../pages/assignment/component/StudentRow";
import { StyledTabs } from "./Tabs";

import { useState } from "react";
import { useGlobalState } from "../context/global";

const StudentSubmission = () => {
  const { state } = useGlobalState();
  const [activeTab, setActiveTab] = useState<string | null>("notgraded");

  const [search, setSearch] = useState<string>("");
  const [graded] = useState(state.filter((e) => Object.keys(e.grade).length));
  const [unGraded] = useState(
    state.filter((e) => !Object.keys(e.grade).length)
  );

  return (
    <Paper shadow="xs" radius="md" p="md" withBorder>
      <StyledTabs
        value={activeTab}
        onTabChange={(e) => {
          setActiveTab(e);
          setSearch("");
        }}
      >
        <Tabs.List mb={15}>
          <Tabs.Tab value="notgraded" icon={<IconClipboardOff size="1rem" />}>
            Not-Graded
          </Tabs.Tab>
          <Tabs.Tab value="graded" icon={<IconClipboardCheck size="1rem" />}>
            Graded
          </Tabs.Tab>
          <Box
            sx={{
              marginLeft: "auto",
              "@media (max-width: 575px)": {
                marginLeft: "0",
              },
            }}
          >
            <Input
              icon={<IconSearch />}
              p={0}
              placeholder="Search"
              radius={"lg"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
        </Tabs.List>
        <ScrollArea h={"70vh"} type="scroll">
          <Tabs.Panel value="notgraded" pt="xs">
            {unGraded
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((e) => (
                <StudentRow data={e as any} key={e.id} />
              ))}
          </Tabs.Panel>

          <Tabs.Panel value="graded" pt="xs">
            {graded
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((e) => (
                <StudentRow data={e} key={e.id} />
              ))}
          </Tabs.Panel>
        </ScrollArea>
      </StyledTabs>
    </Paper>
  );
};

export default StudentSubmission;
