"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexRow,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { mockDataCheckCriteriaAnalysis } from "./mockData";
import { ICheckCriteriaAnalysisInfoViewModel } from "./interface";
import CheckCriteriaAnalysisButtonModalCheck from "./CheckCriteriaAnalysisButtonModalCheck";
import CheckCriteriaAnalysisButtonModalViewDetail from "./CheckCriteriaAnalysisButtonModalViewDetail";
import { Text, Table, Title, Space, Box, Group } from "@mantine/core";
import { MyFlexColumn, MyButtonPrintPDF } from "aq-fe-framework/core";

export default function CheckCriteriaAnalysisRead() {
  const columns = useMemo<MRT_ColumnDef<ICheckCriteriaAnalysisInfoViewModel>[]>(
    () => [
      {
        header: "Mã kế hoạch TDG",
        accessorKey: "maKeHoachTdg",
      },
      {
        header: "Nhóm công tác",
        accessorKey: "nhomCongTac",
      },
      {
        header: "Thành viên phụ trách",
        accessorKey: "thanhVienPhuTrach",
      },
      {
        header: "Mã Tiêu chí",
        accessorKey: "maTieuChi",
      },
      {
        header: "Tên Tiêu chí",
        accessorKey: "tenTieuChi",
      },
      {
        header: "Trạng thái phân tích",
        accessorKey: "trangThaiPhanTich",
      },
      {
        header: "Trạng thái kiểm tra",
        accessorKey: "trangThaiKiemTra",
      },
      {
        header: "Nhận xét của trưởng nhóm",
        accessorKey: "nhanXetCuaTruongNhom",
      },
    ],
    []
  );

  const contentToPrint = (
    <>
      <Title order={3} ta="center">
        PHIẾU THU THẬP, PHÂN TÍCH
      </Title>
      <Title order={3} ta="center">
        VÀ XỬ LÝ THÔNG TIN, MINH CHỨNG
      </Title>
      <Space h="md" />
      <Box pl="70px">
        <Text>
          <strong>Nhóm công tác hoặc cá nhân:</strong> Nhóm Tự đánh giá Khoa
          Kinh tế
        </Text>
        <Text>
          <strong>Tiêu chuẩn:</strong> Tiêu chuẩn 1: Đảm bảo chất lượng về mục
          tiêu và chuẩn đầu ra
        </Text>
        <Text>
          <strong>Tiêu chí:</strong> Tiêu chí 1.1: Mục tiêu và chuẩn đầu ra được
          xác định rõ ràng và công khai
        </Text>
      </Box>

      <Space h="lg" />
      <Table className="my-bordered-table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta="center" colSpan={2}>
              Phân tích tiêu chí
            </Table.Th>
            <Table.Th ta="center" colSpan={3}>
              Thông tin, minh chứng
            </Table.Th>
            <Table.Th ta="center" rowSpan={2}>
              Ghi chú
            </Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Các yêu cầu</Table.Th>
            <Table.Th>Các câu hỏi đặt ra</Table.Th>
            <Table.Th>Cần thu thập</Table.Th>
            <Table.Th>Nơi thu thập</Table.Th>
            <Table.Th>Phương pháp thu thập</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>1. Các quy định đánh giá KQHT rõ ràng</Table.Td>
            <Table.Td>
              Tài liệu xác định rõ thời gian, phương pháp, tiêu chí đánh giá
            </Table.Td>
            <Table.Td>Quy chế đánh giá, đề cương môn học, rubrics</Table.Td>
            <Table.Td>P.Đào tạo, Khoa Kinh tế</Table.Td>
            <Table.Td>Lấy từ đơn vị chức năng hoặc tham mưu</Table.Td>
            <Table.Td></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>2. Công khai tới người học</Table.Td>
            <Table.Td>Các tài liệu công bố công khai cho người học</Table.Td>
            <Table.Td>Sổ tay SV, CTĐT, đề cương</Table.Td>
            <Table.Td>Trang web, P.Đào tạo</Table.Td>
            <Table.Td>Thu thập online hoặc văn bản giấy</Table.Td>
            <Table.Td></Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <Space h="lg" />
      <Title order={4} ta="center">
        DỰ KIẾN CÁC MINH CHỨNG THEO TIÊU CHÍ
      </Title>
      <Table className="my-bordered-table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Tiêu chuẩn</Table.Th>
            <Table.Th>Tiêu chí</Table.Th>
            <Table.Th>Mã minh chứng</Table.Th>
            <Table.Th>Tên minh chứng</Table.Th>
            <Table.Th>
              Số, ngày ban hành, hoặc thời điểm khảo sát, điều tra, phỏng vấn,
              quan sát,…
            </Table.Th>
            <Table.Th>Nơi ban hành hoặc nhóm, cá nhân thực hiện</Table.Th>
            <Table.Th>Ghi chú</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td ta={"center"} rowSpan={2}>
              1
            </Table.Td>
            <Table.Td ta={"center"}>1</Table.Td>
            <Table.Td>H1.01.01.01</Table.Td>
            <Table.Td>Quyết định về mục tiêu và chuẩn đầu ra của CTĐT</Table.Td>
            <Table.Td>Số 123/QĐ-ĐT ngày 15/01/2024</Table.Td>
            <Table.Td>Phòng Đào tạo</Table.Td>
            <Table.Td>Cần phiên bản mới nhất; có dấu mộc đỏ</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"}>2</Table.Td>
            <Table.Td>H1.01.01.02</Table.Td>
            <Table.Td>Biên bản họp lấy ý kiến xây dựng chuẩn đầu ra</Table.Td>
            <Table.Td>
              Biên bản họp số 05/BB-K odstránkaH ngày 10/02/2024
            </Table.Td>
            <Table.Td>Khoa Kinh tế</Table.Td>
            <Table.Td>Dùng chung với các tiêu chí khác</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <Space h="lg" />
      <MyFlexRow justify="flex-end">
        <MyFlexColumn justify={"center"} gap="sm">
          <Text ta={"center"}>Hà Nội, ngày 08 tháng 07 năm 2025</Text>
          <Text ta={"center"} fw={700}>
            TRƯỞNG NHÓM CÔNG TÁC
          </Text>
          <Text ta={"center"}>(Ký, ghi rõ họ tên)</Text>
        </MyFlexColumn>
      </MyFlexRow>
    </>
  );

  return (
    <MyFieldset title="Danh sách kế hoạch tự đánh giá">
      <MyDataTable
        columns={columns}
        data={mockDataCheckCriteriaAnalysis}
        exportAble
        renderRowActions={({ row }) => (
          <MyFlexRow gap={3}>
            <CheckCriteriaAnalysisButtonModalViewDetail />
            <CheckCriteriaAnalysisButtonModalCheck values={row.original} />
            <MyButtonPrintPDF
              buttonProps={{
                variant: "outline",
                color: "orange",
                children: "In phiếu",
                leftSection: "",
                size: "xs",
              }}
            >
              {contentToPrint}
            </MyButtonPrintPDF>
          </MyFlexRow>
        )}
      />
    </MyFieldset>
  );
}
