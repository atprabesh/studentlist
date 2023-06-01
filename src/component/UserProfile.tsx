import { Avatar, Flex, Text } from "@mantine/core";
import { IStudentData } from "../contant/types";

const UserProfile = ({ data }: { data: IStudentData }) => {
  const isLate =
    Date.parse(data.submittedDate ?? "") <
    Date.parse(data.submissionDate ?? "");
  return (
    <div>
      <Flex gap={15}>
        <Avatar size="xl" src={data.imageUrl} />
        <Flex direction={"column"} align={"start"}>
          <Text fw={700}>{data.name}</Text>

          <Text size={"xs"} c="dimmed">
            {data?.submittedDate}
          </Text>

          <Text c={!isLate ? "red.4" : "teal.4"} size={"xs"}>
            {isLate ? "On Time" : "Late Submission"}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default UserProfile;
