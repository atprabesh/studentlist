export interface IStudentData {
  id: string;
  name: string;
  submissionDate: string;
  submittedDate?: string;
  imageUrl: string;
  fullMarks: string;
  grade: {
    marks: string;
    remark: string;
  };
}
