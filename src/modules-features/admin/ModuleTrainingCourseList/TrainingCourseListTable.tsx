import { useQuery } from "@tanstack/react-query";
import { MyButton, MyCenterFull, MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { ITrainingCourseListViewModel } from "./interface";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import TrainingCourseListCreate from "./TrainingCourseListCreate";
import { IconTableExport, IconTrash } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import TrainingCourseListUpdate from "./TrainingCourseListUpdate";
import TrainingCourseListDelete from "./TrainingCourseListDelete";

const ENUM_TRAINING_COURSE_STATUS = {
  "1": "Đang học",
  "2": "Đã tốt nghiệp",
};

export default function TrainingCourseListTable() {
  const Query = useQuery({
    queryKey: ["training-course-list"],
    queryFn: () => {
      return mockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<ITrainingCourseListViewModel>[]>(
    () => [
      {
        header: "Tên khóa đào tạo",
        accessorKey: "name",
      },
      {
        header: "Chương trình đào tạo",
        accessorKey: "programName",
      },
      {
        header: "Năm học - Học kỳ vào",
        accessorKey: "semester",
      },
      {
        header: "Năm học - Học kỳ tốt nghiệp",
        accessorKey: "semesterGraduation",
      },
      {
        header: "Số lượng sinh viên đầu vào",
        accessorKey: "numberOfStudents",
      },
      {
        header: "Trạng thái khóa",
        accessorKey: "status",
        accessorFn: (row) =>
          ENUM_TRAINING_COURSE_STATUS[
            row.status as keyof typeof ENUM_TRAINING_COURSE_STATUS
          ],
      },
    ],
    []
  );

  return (
    <MyFieldset title={`Danh sách chương trình đào tạo`}>
      <MyDataTable
        data={Query.data || []}
        enableRowSelection={true}
        enableRowNumbers={false}
        columns={columns}
        renderTopToolbarCustomActions={() => {
          return (
            <Group>
              <TrainingCourseListCreate />
              <MyButton color="blue">
                Thêm phiên bản
              </MyButton>
              <MyButton color="green" leftSection={<IconUpload />}>
                Import
              </MyButton>
              <MyButton color="teal" leftSection={<IconTableExport />}>
                Export
              </MyButton>
              <MyButton color="red" leftSection={<IconTrash />}>
                Xóa
              </MyButton>
            </Group>
          );
        }}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <TrainingCourseListUpdate values={row.original} />
            <TrainingCourseListDelete trainingCourse={row.original} />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

const mockData: ITrainingCourseListViewModel[] = [
  {
    id: "1",
    code: "IT24",
    name: "IT24",
    programName: "Công nghệ Thông tin",
    semester: "2024-HK1",
    semesterGraduation: "2028-HK2",
    numberOfStudents: 150,
    status: "1",
  },
  {
    id: "2",
    code: "QTKD23",
    name: "QTKD23",
    programName: "Quản trị Kinh doanh",
    semester: "2023-HK1",
    semesterGraduation: "2027-HK2",
    numberOfStudents: 150,
    status: "1",
  },
  {
    id: "3",
    code: "CNTT20",
    name: "CNTT20",
    programName: "Công nghệ Thông tin",
    semester: "2020-HK1",
    semesterGraduation: "2024-HK2",
    numberOfStudents: 160,
    status: "2",
  },
  {
    id: "4",
    code: "DL22",
    name: "DL22",
    programName: "Du lịch",
    semester: "2022-HK2",
    semesterGraduation: "2026-HK1",
    numberOfStudents: 200,
    status: "1",
  },
];