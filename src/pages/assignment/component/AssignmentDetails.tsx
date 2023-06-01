import { Avatar, Badge, Box, Flex, Paper, Text, Tooltip } from "@mantine/core";
import { IconHourglassLow } from "@tabler/icons-react";

const AssignmentDetails = () => {
  return (
    <Paper radius={"lg"} withBorder p={20} my={20}>
      <Flex justify={"space-between"} align={"start"} wrap={"wrap"}>
        <Flex>
          <Box
            style={{
              color: "red",
              border: "0.0625rem solid #dee2e6",
              maxHeight: "80px",
              borderRadius: "0.25rem",
              boxShadow:
                "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0",
            }}
            p={20}
            mx={10}
          >
            Maths
          </Box>
          <Box>
            <Text size={"lg"} fw="bolder">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              cumque?
            </Text>
            <Flex gap={{ base: "lg", sm: "sm" }} wrap={"wrap"}>
              <Flex gap={20}>
                Submitted by:
                <Tooltip.Group openDelay={300} closeDelay={100}>
                  <Avatar.Group spacing="sm">
                    <Tooltip label="Salazar Troop" withArrow>
                      <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/150?u=4666"
                        radius="xl"
                      />
                    </Tooltip>
                    <Tooltip label="Bandit Crimes" withArrow>
                      <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/50?u=124"
                        radius="xl"
                      />
                    </Tooltip>
                    <Tooltip label="Jane Rata" withArrow>
                      <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/150?u=69"
                        radius="xl"
                      />
                    </Tooltip>
                    <Tooltip
                      withArrow
                      label={
                        <>
                          <div>John Outcast</div>
                          <div>Levi Capitan</div>
                        </>
                      }
                    >
                      <Avatar radius="xl" size={"sm"} color="blue">
                        +2
                      </Avatar>
                    </Tooltip>
                  </Avatar.Group>
                </Tooltip.Group>
              </Flex>
              <Flex gap={10}>
                <Text>Assigned on:</Text>
                <Text c="dimmed">21 Oct 2021</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Badge
          color="green"
          style={{ textAlign: "center" }}
          variant="outline"
          leftSection={<IconHourglassLow />}
          p={15}
          mt={10}
        >
          1 Day
        </Badge>
      </Flex>
      <Text my={20} c="dimmed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit
        ea, quia hic aliquid laudantium quibusdam similique in, earum debitis
        nesciunt vero molestias animi aut. Nobis amet dolor reprehenderit
        distinctio error vel, quo dolores porro consectetur deserunt nam
        praesentium eaque quis accusantium magni culpa, rem reiciendis aperiam
        libero totam. Optio nihil dolore facilis harum, iste dolorem impedit hic
        fugiat quis laboriosam, distinctio quasi saepe voluptatibus doloribus
        quos nesciunt voluptatem nam recusandae esse mollitia cupiditate sunt.
        Eaque, alias dolore! Sunt, exercitationem dolorum accusamus eligendi
        quas nisi sed hic ipsam nostrum aperiam magni eveniet inventore
        reprehenderit quam repellat eaque fugit labore ipsum voluptas! Hic
        dolore alias porro, obcaecati
      </Text>
      <Flex gap={20}>
        <Paper withBorder p={15}>
          One File
        </Paper>
        <Paper withBorder p={15}>
          Two File
        </Paper>
      </Flex>
    </Paper>
  );
};

export default AssignmentDetails;
