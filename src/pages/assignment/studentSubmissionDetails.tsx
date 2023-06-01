import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Paper,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UserProfile from "../../component/UserProfile";
import { useGlobalState } from "../../context/global";

//  NOTE: Here as well, in this page, We typically would have called for GET api for the specific user detail but
// there is no api, I have passed the state via props from Link

interface IGrade {
  marks: string;
  remark: string;
}

const StudentSubmissionDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const { updateGradeMarks } = useGlobalState();

  useEffect(() => {
    if (state?.isGraded) {
      form.setValues({
        marks: state?.grade?.marks,
        remark: state?.grade?.remark,
      });
    }
  }, [state]);

  const form = useForm<IGrade>({
    initialValues: {
      marks: "",
      remark: "",
    },
    validate: {
      marks: (value) =>
        !value ? "Marks is required!" : !Number(value) ? "Invalid Type" : null,
    },
  });

  const handleSubmit = (value: IGrade) => {
    try {
      updateGradeMarks(params.id ?? "", value.marks, value.remark ?? "");
    } catch (error) {
      console.log("Something went wrong");
    }
    navigate(-1);
  };

  return (
    <div>
      <Title size={"xl"} align="left">
        Student Submission
      </Title>
      <Divider my="sm" />

      <UserProfile data={state} />

      <Box my={20}>
        <Text align="left" c="dimmed">
          Submitted Files
        </Text>
        <Flex gap={20} mt={10}>
          <Paper withBorder p={15}>
            One File
          </Paper>
          <Paper withBorder p={15}>
            Two File
          </Paper>
        </Flex>
      </Box>

      <Flex direction={"column"} gap={10} align={"start"}>
        <Text c="dimmed">Student Comment</Text>
        <Text align="start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni in
          commodi harum recusandae nam ipsam asperiores et perspiciatis
          reiciendis, sit qui obcaecati nisi quisquam eligendi iusto similique
          laborum, alias provident necessitatibus maiores dolorum! Consectetur
          corrupti rem harum quos debitis deserunt.
        </Text>
      </Flex>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex mt={20} direction={"column"} gap={20} align={"start"}>
          <Text c="dimmed">Grade Obtained</Text>
          <Flex align={"end"} gap={5}>
            <TextInput
              radius={"xs"}
              disabled={state?.isGraded}
              placeholder="Enter grade here"
              styles={(theme) => ({
                input: {
                  border: "none",
                  borderBottom: "1px solid black",
                  padding: theme.spacing.xl,
                  backgroundColor: theme.colors.gray[0],
                },
              })}
              {...form.getInputProps("marks")}
            />

            <Box
              sx={(theme) => ({
                backgroundColor: theme.colors.gray[1],
                padding: theme.spacing.sm,
                borderRadius: theme.radius.md,
              })}
            >
              Out of {state?.fullMarks}
            </Box>
          </Flex>
          <Textarea
            w={"100%"}
            disabled={state?.isGraded}
            minRows={6}
            styles={(theme) => ({
              input: {
                border: "none",
                padding: theme.spacing.xl,
                backgroundColor: theme.colors.gray[2],
                borderRadius: "7px",
              },
            })}
            placeholder="Enter your suggestion here."
            {...form.getInputProps("remark")}
          />
        </Flex>
        <Group position="right">
          <Button
            disabled={state?.isGraded}
            mt={20}
            radius={30}
            h={40}
            px={40}
            type="submit"
          >
            Grade
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default StudentSubmissionDetails;
