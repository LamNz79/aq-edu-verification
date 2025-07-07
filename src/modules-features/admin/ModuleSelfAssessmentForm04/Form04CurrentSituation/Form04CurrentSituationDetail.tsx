import { MyActionIcon } from "@/components/ActionIcons/ActionIcon/MyActionIcon";
import { Checkbox, Modal, Tabs, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEye } from "@tabler/icons-react";
import { MyDataTable, MyFlexColumn, MyTab } from "aq-fe-framework/components";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import {
  IForm04CurrentSituationRowHistoryProof,
  IForm04CurrentSituationRowHistoryProofDetail,
  IForm04CurrentSituationRowProofLocal,
} from "./interface";
import MyButtonViewPDF from "@/components/Buttons/ButtonViewPDF/MyButtonViewPDF";

export default function Form04CurrentSituationDetail({
  data,
}: {
  data: IForm04CurrentSituationRowHistoryProof;
}) {
  const disc = useDisclosure();
  const TabsData = [
    {
      label: "Phiên bản minh chứng",
      value: "Phiên bản minh chứng",
    },
    {
      label: "Nơi sử dụng",
      value: "Nơi sử dụng",
    },
  ];

  const columns = useMemo<
    MRT_ColumnDef<IForm04CurrentSituationRowHistoryProofDetail>[]
  >(
    () => [
      {
        header: "ID file",
        accessorKey: "fileId",
      },
      {
        header: "Tên file",
        accessorKey: "name",
        size: 300,
      },
      {
        header: "File đính kèm",
        accessorKey: "file",
        accessorFn: (row) => {
          return <MyButtonViewPDF />;
        },
      },
      {
        header: "Link liên kết",
        accessorKey: "link",
      },
      {
        header: "Số - Ngày ban hành",
        accessorKey: "issuedDate",
        size: 250,
      },
      {
        header: "Đơn vị ban hành",
        accessorKey: "issuer",
      },
      {
        header: "Hiệu lực từ ngày",
        accessorKey: "effectiveFrom",
      },
      {
        header: "Hiệu lực đến ngày",
        accessorKey: "effectiveTo",
      },
      {
        header: "Ghi chú phiên bản",
        accessorKey: "note",
        size: 300,
      },
      {
        header: "Trạng thái",
        accessorKey: "status",
        accessorFn: (row) => {
          return <Checkbox checked={row.status} readOnly />;
        },
      },
    ],
    []
  );

  const columnsLocal = useMemo<
    MRT_ColumnDef<IForm04CurrentSituationRowProofLocal>[]
  >(
    () => [
      {
        header: "Mã kế hoạch TDG",
        accessorKey: "planCode",
      },
      {
        header: "Mã CTĐT",
        accessorKey: "programCode",
      },
      {
        header: "Khóa",
        accessorKey: "courseCode",
      },
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "criterionCode",
      },
      {
        header: "Mã minh chứng",
        accessorKey: "evidenceCode",
      },
      {
        header: "ID file (Hệ thống)",
        accessorKey: "fileId",
      },
      {
        header: "Tên file hiển thị",
        accessorKey: "fileName",
        size: 300,
      },
      {
        header: "File đính kèm",
        accessorKey: "file",
        accessorFn: (row) => {
          return <MyButtonViewPDF />;
        },
      },
      {
        header: "Link liên kết",
        accessorKey: "link",
      },
      {
        header: "Số - ngày ban hành",
        accessorKey: "issuedNumber",
        size: 250,
      },
      {
        header: "Đơn vị ban hành/cấp",
        accessorKey: "issuer",
        size: 250,
      },
      {
        header: "Hiệu lực từ ngày",
        accessorKey: "effectiveFrom",
      },
      {
        header: "Hiệu lực đến ngày",
        accessorKey: "effectiveTo",
      },
    ],
    []
  );

  return (
    <>
      <MyActionIcon crudType="default" onClick={disc[1].open}>
        <IconEye />
      </MyActionIcon>
      <Modal
        opened={disc[0]}
        onClose={disc[1].close}
        size="90%"
        title="Chi tiết minh chứng"
      >
        <MyFlexColumn gap={4}>
          <Text size="md">Mã minh chứng: {data.code}</Text>
          <Text size="md">Tên minh chứng: {data.name}</Text>
          <MyTab tabList={TabsData} variant="outline">
            <Tabs.Panel value="Phiên bản minh chứng">
              <MyDataTable columns={columns} data={mockDataProof} />
            </Tabs.Panel>
            <Tabs.Panel value="Nơi sử dụng">
              <MyDataTable columns={columnsLocal} data={mockDataLocal} />
            </Tabs.Panel>
          </MyTab>
        </MyFlexColumn>
      </Modal>
    </>
  );
}

const mockDataProof: IForm04CurrentSituationRowHistoryProofDetail[] = [
  {
    id: 1,
    fileId: "FILE_ID_0001",
    name: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    link: "https://drive.google.com/link_quyche_2025_v2",
    issuedDate: "Số 456/QĐ-ĐT - 20/01/2025",
    issuer: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
    note: "Phiên bản mới nhất sau đợt rà soát định kỳ 2025.",
    status: true,
  },
  {
    id: 2,
    fileId: "FILE_ID_0006",
    name: "Quyết định ban hành Quy chế đào tạo ĐH (2023)",
    link: "https://drive.google.com/link_quyche_2023",
    issuedDate: "Số 784/QĐ-ĐT - 15/01/2023",
    issuer: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2023",
    effectiveTo: "31/01/2025",
    note: "Phiên bản Quy chế đào tạo áp dụng cho giai đoạn 2023-2025.",
    status: false,
  },
  {
    id: 3,
    fileId: "FILE_ID_0007",
    name: "Biên bản họp Hội đồng Khoa học về sửa đổi Quy chế ĐT (2025)",
    link: "https://drive.google.com/link_bbhop_2025",
    issuedDate: "Ngày 10/01/2025",
    issuer: "Hội đồng Khoa học Trường",
    effectiveFrom: "10/01/2025",
    note: "Là tài liệu nền tảng cho Quyết định ban hành Quy chế đào tạo 2025",
    status: false,
  },
];

const mockDataLocal: IForm04CurrentSituationRowProofLocal[] = [
  {
    id: 1,
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "K2020",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    evidenceCode: "H5.05.02.01",
    fileId: "FILE_ID_0001",
    fileName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    link: "https://drive.google.com/link_quyche_2025",
    issuedNumber: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuer: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
  },
  {
    id: 2,
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "K2021",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    evidenceCode: "H5.05.02.01",
    fileId: "FILE_ID_0001",
    fileName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    link: "https://drive.google.com/link_quyche_2025",
    issuedNumber: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuer: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
  },
  {
    id: 3,
    planCode: "KH-KT_2025",
    programCode: "KT",
    courseCode: "K2019",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    evidenceCode: "H5.05.02.01",
    fileId: "FILE_ID_0001",
    fileName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    link: "https://drive.google.com/link_quyche_2025",
    issuedNumber: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuer: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
  },
  {
    id: 4,
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "K2020",
    standardCode: "TC_01",
    criterionCode: "TC_01.01",
    evidenceCode: "H1010101",
    fileId: "FILE_ID_0003",
    fileName: "Quyết định về mục tiêu và chuẩn đầu ra KTPM (2024)",
    link: "https://drive.google.com/link_odr_ktpm",
    issuedNumber: "Số 123/QĐ-KHMT Ngày 15/05/2024",
    issuer: "Khoa Khoa học Máy tính",
    effectiveFrom: "01/09/2024",
    effectiveTo: "31/08/2028",
  },
];
