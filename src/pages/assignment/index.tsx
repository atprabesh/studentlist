import { Container } from "@mantine/core";
import StudentSubmission from "../../component/StudentSubmission";
import AssignmentDetails from "./component/AssignmentDetails";

const Assignment = () => {
  return (
    <Container fluid>
      <AssignmentDetails />
      <StudentSubmission />
    </Container>
  );
};

export default Assignment;
