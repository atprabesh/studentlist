import { Button, Group, Paper, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import UserProfile from "../../../component/UserProfile";
import { IStudentData } from "../../../contant/types";

const StudentRow = ({ data }: { data: IStudentData }) => {
  const isGraded = !!data.grade.marks;
  return (
    <Paper mb={10}>
      <Group position="apart" align="center">
        <UserProfile data={data} />
        {isGraded ? (
          <Button
            radius={"lg"}
            color="green"
            component={Link}
            to={`/${data.id}`}
            state={{ ...data, isGraded }}
          >
            <Text>
              {data?.grade?.marks} / {data.fullMarks}
            </Text>
          </Button>
        ) : (
          <Button
            radius={"xl"}
            px={35}
            component={Link}
            to={{ pathname: `/${data.id}` }}
            state={data}
          >
            Grade
          </Button>
        )}
      </Group>
    </Paper>
  );
};

export default StudentRow;
