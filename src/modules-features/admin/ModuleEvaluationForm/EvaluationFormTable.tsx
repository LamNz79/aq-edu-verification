"use client";

import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import {
  AQButtonCreateByImportFile,
  MyButton,
  MyButtonDeleteList,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IEvaluationFormData } from "./interfaces/EvaluationFormViewModel";
import MyCenterFull from "../../../components/CenterFull/MyCenterFull";
import { Checkbox } from "@mantine/core";
import EvaluationFormUpdate from "./EvaluationFormUpdate";

export default function EvaluationFormTable() {
  const evaluationQuery = useQuery({
    queryKey: ["evaluation-form-data"],
    queryFn: () => {
      return mockEvaluationData;
    },
  });

  const importForm = useForm<any>({
    initialValues: {
      importedData: [],
    },
  });

  const tableColumns = useMemo<MRT_ColumnDef<IEvaluationFormData>[]>(
    () => [
      {
        header: "Đợt đánh giá ngoài",
        accessorKey: "externalEvaluationRound",
        size: 200,
        enableEditing: false,
      },
      {
        header: "Chương trình Đào tạo",
        accessorKey: "trainingProgram",
        size: 180,
        enableEditing: false,
      },
      {
        header: "Khóa đào tạo",
        accessorKey: "trainingCourse",
        size: 120,
        enableEditing: false,
      },
      {
        header: "Mã Tiêu chí",
        accessorKey: "code",
        size: 100,
      },
      {
        header: "Tên Tiêu chí",
        accessorKey: "name",
        size: 250,
        enableEditing: false,
      },
      {
        header: "Mô tả hiện trạng",
        accessorKey: "currentSituationDescription",
        size: 300,
        Cell: ({ cell }) => (
          <div style={{ maxWidth: "300px", whiteSpace: "normal", wordWrap: "break-word" }}>
            {cell.getValue<string>()}
          </div>
        ),
      },
      {
        header: "Điểm mạnh",
        accessorKey: "strengths",
        size: 250,
        Cell: ({ cell }) => (
          <div style={{ maxWidth: "250px", whiteSpace: "normal", wordWrap: "break-word" }}>
            {cell.getValue<string>()}
          </div>
        ),
      },
      {
        header: "Điểm tồn tại",
        accessorKey: "weaknesses",
        size: 250,
        Cell: ({ cell }) => (
          <div style={{ maxWidth: "250px", whiteSpace: "normal", wordWrap: "break-word" }}>
            {cell.getValue<string>()}
          </div>
        ),
      },
      {
        header: "Khuyến nghị",
        accessorKey: "recommendations",
        size: 300,
        Cell: ({ cell }) => (
          <div style={{ maxWidth: "300px", whiteSpace: "normal", wordWrap: "break-word" }}>
            {cell.getValue<string>()}
          </div>
        ),
      },
      {
        header: "Đánh giá",
        accessorKey: "evaluation",
        size: 120,
        accessorFn(row) {
          return (
            <MyCenterFull>
              <Checkbox checked={row.evaluation} readOnly />
            </MyCenterFull>
          );
        },
      },
      {
        header: "Người đánh giá",
        accessorKey: "evaluator",
        size: 180,
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách tiêu chí đánh giá">
      <MyDataTable
        columns={tableColumns}
        enableRowSelection={true}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <>
              <AQButtonCreateByImportFile onSubmit={() => {}} form={importForm} />
              <MyButton crudType="export" />
              <MyButtonDeleteList
                onSubmit={() => {}}
                contextData={table
                  .getSelectedRowModel()
                  .flatRows.flatMap((item) => item.original)
                  .map((item) => item.code)
                  .join(", ")}
              />
            </>
          );
        }}
        renderRowActions={({ row }) => {
          return <EvaluationFormUpdate values={row.original} />;
        }}
        data={evaluationQuery.data || []}
      />
    </MyFieldset>
  );
}

const mockEvaluationData: IEvaluationFormData[] = [
  {
    id: "1",
    externalEvaluationRound: "ĐGN KTPM K60 - 2024",
    trainingProgram: "Kỹ thuật Phần mềm",
    trainingCourse: "K60",
    code: "1.1",
    name: "Mục tiêu của chương trình đào tạo",
    currentSituationDescription:
      "Mục tiêu CTĐT được xây dựng rõ ràng; công bố trên website khoa có sự tham gia của các bên liên quan và được thể hiện trong CSDL",
    strengths: "Mục tiêu gắn liền với sứ mạng, tầm nhìn của trường; được rà soát định kỳ 2 năm/lần",
    weaknesses: "Một số giảng viên chưa nắm rõ chi tiết về mục tiêu đào tạo của CTĐT",
    recommendations:
      "Tăng cường truyền thông về mục tiêu CTĐT trong các buổi họp bộ môn; Bổ sung mục tiêu học tập cụ thể hơn cho các học phần.",
    evaluation: true,
    evaluator: "PGS.TS. Nguyễn Văn A",
    evidenceFile: null,
  },
  {
    id: "2",
    externalEvaluationRound: "ĐGN KTPM K60 - 2024",
    trainingProgram: "Kỹ thuật phần mềm",
    trainingCourse: "K60",
    code: "2.3",
    name: "Cấu trúc và nội dung chương trình đào tạo",
    currentSituationDescription:
      "Mục tiêu CTĐT được xây dựng; công bố; tuy nhiên cần rà soát lại sự phù hợp với bối cảnh mới",
    strengths:
      "Nội dung CTĐT phù hợp với yêu cầu thực tiễn ngành nghề; Đa tích hợp các học phần về kỹ năng mềm và ngoại ngữ.",
    weaknesses: "Chưa có cơ chế định kỳ thu thập ý kiến doanh nghiệp về mục tiêu.",
    recommendations:
      "Thiết lập quy trình thu thập ý kiến chuyêng gia/ doanh nghiệp thường xuyên hơn về mục tiêu đào tạo",
    evaluation: true,
    evaluator: "TS. Trần Thị B",
    evidenceFile: null,
  },
  {
    id: "3",
    externalEvaluationRound: "ĐGN QTKD K61 - 2025",
    trainingProgram: "Quản trị Kinh doanh",
    trainingCourse: "K61",
    code: "1.1",
    name: "Mục tiêu của chương trình đào tạo",
    currentSituationDescription:
      "Mục tiêu CTĐT được xây dựng; công bố; tuy nhiên cần rà soát lại sự phù hợp với bối cảnh mới",
    strengths: "Mục tiêu rõ ràng; có sự tham vấn cán bên",
    weaknesses: "Chưa có cơ chế định kỳ thu thập ý kiến doanh nghiệp về mục tiêu",
    recommendations:
      "Thiết lập quy trình thu thập ý kiến chuyên gia/ doanh nghiệp thường xuyên hơn về mục tiêu đào tạo",
    evaluation: false,
    evaluator: "ThS. Lê Văn C",
    evidenceFile: null,
  },
  {
    id: "4",
    externalEvaluationRound: "ĐGN QTKD K61 - 2025",
    trainingProgram: "Quản trị Kinh doanh",
    trainingCourse: "K61",
    code: "3.2",
    name: "Hoạt động giảng dạy và học tập",
    currentSituationDescription:
      "Phương pháp giảng dạy chủ yếu là thuyết trình; ít hoạt động tương tác với sinh viên",
    strengths: "Giảng viên nhiệt tình; có kiến thức chuyên môn vững vàng",
    weaknesses:
      "Chưa đa dạng phương pháp dạy học; Thiếu hoạt động thực tế/ thực hành cho sinh viên",
    recommendations:
      "Tổ chức tập huấn về phương pháp giảng dạy tích cực; Tăng cường các buổi thực tế tại doanh nghiệp",
    evaluation: false,
    evaluator: "TS. Đặng Thị D",
    evidenceFile: null,
  },
];
