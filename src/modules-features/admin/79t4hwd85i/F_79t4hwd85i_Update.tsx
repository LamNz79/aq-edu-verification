import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import { Button, Grid, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import {
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexColumn,
  MyTextEditor,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_79t4hwd85i_EvidenceList from "./F_79t4hwd85i_EvidenceList";
import F_79t4hwd85i_History from "./F_79t4hwd85i_History";

interface I_FileMinhChung {
  id?: number;
  maMinhChung?: string;
  tenMinhChung?: string;
  maFileMinhChung?: string;
  ngayHieuLuc?: Date;
  ngayHetHan?: Date;
  lienKet?: string;
  trangThai?: string;
}
interface I_F_79t4hwd85i_Update {
  noiDung?: string;
}

const mockDataFileMinhChungGoiY: I_FileMinhChung[] = [
  {
    id: 1,
    maMinhChung: "MC0001",
    tenMinhChung: "Hình ảnh hoạt động",
    maFileMinhChung: "F000521",
    ngayHieuLuc: new Date("2025-01-01"),
    ngayHetHan: new Date("2025-05-25"),
    lienKet: "",
    trangThai: "Hết hạn",
  },
  {
    id: 2,
    maMinhChung: "MC0002",
    tenMinhChung: "Video hoạt động",
    maFileMinhChung: "F000523",
    ngayHieuLuc: new Date("2025-01-01"),
    ngayHetHan: new Date("2025-09-25"),
    lienKet: "",
    trangThai: "Còn hạn",
  },
];

export default function F_79t4hwd85i_Update() {
  const dis = useDisclosure();

  const form = useForm<I_F_79t4hwd85i_Update>({
    initialValues: {
      noiDung: "",
    },
    validate: {
      noiDung: (value) => (value ? null : "Không được để trống"),
    },
  });

  const danhSachFileMinhChungGoiY = useQuery({
    queryKey: ["F_79t4hwd85i_Update_FileMinhChungGoiY"],
    queryFn: async () => mockDataFileMinhChungGoiY,
  });

  const columns = useMemo<MRT_ColumnDef<I_FileMinhChung>[]>(
    () => [
      {
        header: "Mã minh chứng",
        accessorKey: "maMinhChung",
      },
      {
        header: "Tên minh chứng",
        accessorKey: "tenMinhChung",
        size: 300,
      },
      {
        header: "Mã file minh chứng",
        accessorKey: "maFileMinhChung",
      },
      {
        header: "Ngày hiệu lực",
        accessorKey: "ngayHieuLuc",
        accessorFn: (originalRow) =>
          originalRow.ngayHieuLuc ? utils_date_dateToDDMMYYYString(originalRow.ngayHieuLuc) : "",
      },
      {
        header: "Ngày hết hạn",
        accessorKey: "ngayHetHan",
        accessorFn: (originalRow) =>
          originalRow.ngayHetHan ? utils_date_dateToDDMMYYYString(originalRow.ngayHetHan) : "",
      },
      {
        header: "Xem file",
        accessorKey: "xemfile",
        accessorFn: (originalRow) => (
          <MyCenterFull>
            <MyButtonViewPDF
              label="Xem"
              src="https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf"
            />
          </MyCenterFull>
        ),
      },
      {
        header: "Xem liên kết",
        accessorKey: "lienKet",
        Cell: ({ cell }) => (
          <a href={cell.getValue<string>()} target="_blank" rel="noopener noreferrer">
            {cell.getValue<string>()}
          </a>
        ),
      },
      {
        header: "Trạng thái",
        accessorKey: "trangThai",
        size: 150,
      },

      {
        header: "Thao tác",
        accessorKey: "thaoTac",
        size: 140,
        accessorFn: (originalRow) => {
          const trangThai = originalRow.trangThai;
          return trangThai === "Còn hạn" ? (
            ""
          ) : (
            <MyCenterFull>
              <Button variant="transparent">Huỷ</Button>
            </MyCenterFull>
          );
        },
      },
    ],
    []
  );

  if (danhSachFileMinhChungGoiY.isLoading) return "Đang tải dữ liệu...";
  if (danhSachFileMinhChungGoiY.isError) return "Đã có lỗi xảy ra!";

  return (
    <MyButtonCreate
      variant="transparent"
      label="Cập nhật"
      modalSize={"100%"}
      disclosure={dis}
      title="Chi tiết kỳ báo cáo"
      onSubmit={() => {}}
      form={form}
      leftSection={<></>}
    >
      <MyFlexColumn gap={16}>
        <F_79t4hwd85i_History />
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MyFieldset title="Soạn nội dung báo cáo">
              <MyTextEditor
                value={form.values.noiDung}
                contentHeight={"220px"}
                error={(form.errors.noiDung as string | undefined) || undefined}
                onChange={()=> {}}
              />
            </MyFieldset>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MyFieldset title="Minh chứng sử dụng">
              <MyDataTable
                data={danhSachFileMinhChungGoiY.data!}
                columns={columns}
                enableRowSelection={true}
                enableRowNumbers={true}
                initialState={{ columnPinning: { right: ["trangThai", "thaoTac"] } }}
                mantineTableContainerProps={{ style: { maxHeight: "220px",  overflowY: "scroll" } }}
                renderTopToolbarCustomActions={({ table }) => (
                  <Group>
                    <F_79t4hwd85i_EvidenceList />
                  </Group>
                )}
              />
            </MyFieldset>
          </Grid.Col>
        </Grid>
      </MyFlexColumn>
    </MyButtonCreate>
  );
}
