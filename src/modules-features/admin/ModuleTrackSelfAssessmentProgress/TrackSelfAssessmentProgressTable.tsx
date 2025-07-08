"use client";
import { useMemo } from "react";
import { ITrackSelfAssessmentProgressViewModel } from "./interface";
import { MRT_ColumnDef } from "mantine-react-table";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { useQuery } from "@tanstack/react-query";
import TrackSelfAssessmentProgressUpdate from "./TrackSelfAssessmentProgressUpdate";
import { Center } from "@mantine/core";

export default function TrackSelfAssessmentProgressTable() {
  const TrackSelfAssessmentProgressList = useQuery({
    queryKey: ["TrackSelfAssessmentProgressList"],
    queryFn: () => mockData,
  });

  const columns = useMemo<MRT_ColumnDef<ITrackSelfAssessmentProgressViewModel>[]>(
    () => [
      {
        header: "Mã Kế hoạch TDG",
        accessorKey: "planCode",
      },
      {
        header: "Mã CTĐT",
        accessorKey: "programCode",
      },
      {
        header: "Mã Khóa",
        accessorKey: "courseCode",
      },
      {
        header: "Mã Tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "code",
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "name",
        size: 300,
      },
      {
        header: "Nhóm công tác chuyên trách",
        accessorKey: "groupCode",
      },
      {
        header: "Thành viên phụ trách",
        accessorKey: "evaluator",
      },
      {
        header: "Tự đánh giá",
        accessorKey: "selfAssessmentStatus",
      },
      {
        header: "Trạng thái kiểm tra",
        accessorKey: "checkStatus",
      },
    ],
    []
  );

  return (
    <MyFieldset title={`Danh sách tiêu chí`}>
      <MyDataTable
        data={TrackSelfAssessmentProgressList.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        enableRowActions={true}
        renderRowActions={({ row }) => (
          <Center>
            <TrackSelfAssessmentProgressUpdate data={row.original} />
          </Center>
        )}
      />
    </MyFieldset>
  );
}

const mockData: ITrackSelfAssessmentProgressViewModel[] = [
  {
    id: 1,
    code: "TC_05.02",
    name: "Đảm bảo tính thống nhất, công khai của quy định về đào tạo và các quy định khác có liên quan",
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_05",
    groupCode: "NCT_TC5-7",
    evaluator: "ThS. Hoàng Thị E",
    selfAssessmentStatus: "Đạt yêu cầu",
    checkStatus: "Đã kiểm tra",
  },
  {
    id: 2,
    code: "TC_01.01",
    name: "Đảm bảo tính công khai, minh bạch của mục tiêu và chuẩn đầu ra",
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_01",
    groupCode: "NCT_TC1-3",
    evaluator: "TS. Trần Văn C",
    selfAssessmentStatus: "Không đạt",
    checkStatus: "Cần hiệu chính",
  },
  {
    id: 3,
    code: "TC_05.02",
    name: "Đảm bảo tính thống nhất, công khai của quy định về đào tạo và các quy định khác có liên quan",
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "KTPM_K21",
    standardCode: "TC_05",
    groupCode: "NCT_TC5-7",
    evaluator: "ThS. Hoàng Thị E",
    selfAssessmentStatus: "Chưa đánh giá",
    checkStatus: "Chưa kiểm tra",
  },
  {
    id: 4,
    code: "TC_03.02",
    name: "Đảm bảo chất lượng đội ngũ giảng viên; đáp ứng yêu cầu của chương trình đào tạo",
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_03",
    groupCode: "NCT_TC3-4",
    evaluator: "CN. Bùi Thị L",
    selfAssessmentStatus: "Đạt yêu cầu",
    checkStatus: "Đã kiểm tra",
  },
  {
    id: 5,
    code: "TC_06.01",
    name: "Đảm bảo hoạt động nghiên cứu khoa học và chuyển giao công nghệ phù hợp với định hướng phát triển",
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_06",
    groupCode: "NCT_TC6-7",
    evaluator: "ThS. Lê Thị M",
    selfAssessmentStatus: "Chưa đánh giá",
    checkStatus: "Chưa kiểm tra",
  },
];
