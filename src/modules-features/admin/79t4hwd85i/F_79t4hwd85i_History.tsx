import MyCheckbox from "@/components/Checkbox/MyCheckbox";
import { Accordion, Box, Button, Flex, Grid, Group, Text, Textarea } from "@mantine/core";
import {
  IconCheck,
  IconSquareCheckFilled,
  IconSquareRoundedMinusFilled,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexColumn,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";

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

interface I_F_79t4hwd85i_HistoryReport {
  trangThai?: boolean;
  mocChuan?: string;
  noiDung?: string;
  ngayCapNhat?: Date;
  nguoiCapNhat?: string;
  danhSachMinhChung?: I_FileMinhChung[];
}

interface I_F_79t4hwd85i_History {
  noiDung?: string;
}

const mockDataHistoryReport: I_F_79t4hwd85i_HistoryReport[] = [
  {
    trangThai: true,
    mocChuan: "CDT của CTDT được phổ biến đến các BLQ",
    noiDung: `4.2.a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực tiễn nghề nghiệp.
4.2.b) Sử dụng các tình huống, ví dụ thực tế, bài tập tình huống trong quá trình giảng dạy.
4.2.c) Tổ chức các hoạt động tham quan thực tế, thực hành, thực tập tại doanh nghiệp/cơ sở liên quan.
4.2.d) Khuyến khích mời các chuyên gia, nhà quản lý từ thực tiễn tham gia giảng dạy, báo cáo chuyên đề.`,
    ngayCapNhat: new Date("2025-05-28"),
    nguoiCapNhat: "Tô Ngọc Lan",
    danhSachMinhChung: [
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
    ],
  },
  {
    trangThai: true,
    mocChuan: "CDT của CTDT được phổ biến đến các BLQ",
    noiDung: `4.2.a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực tiễn nghề nghiệp.
4.2.b) Sử dụng các tình huống, ví dụ thực tế, bài tập tình huống trong quá trình giảng dạy.
4.2.c) Tổ chức các hoạt động tham quan thực tế, thực hành, thực tập tại doanh nghiệp/cơ sở liên quan.
4.2.d) Khuyến khích mời các chuyên gia, nhà quản lý từ thực tiễn tham gia giảng dạy, báo cáo chuyên đề.`,
    ngayCapNhat: new Date("2025-05-29"),
    nguoiCapNhat: "Tô Ngọc Linh",
    danhSachMinhChung: [
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
    ],
  },
];

export default function F_79t4hwd85i_History() {
  const danhSachLichSuCapNhat = useQuery({
    queryKey: ["F_79t4hwd85i_History"],
    queryFn: async () => mockDataHistoryReport,
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
            <MyCenterFull>
              <Button variant="transparent">Sử dụng</Button>
            </MyCenterFull>
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

  if (danhSachLichSuCapNhat.isLoading) return "Đang tải dữ liệu...";
  if (danhSachLichSuCapNhat.isError) return "Đã có lỗi xảy ra!";

  return (
    <MyFlexColumn gap={16}>
      <Text>
        Mốc chuẩn:{" "}
        <Text span fw={500}>
          {danhSachLichSuCapNhat.data?.[0]?.mocChuan}
        </Text>
      </Text>
      <MyFieldset title="Lịch sử cập nhật nội dung báo cáo">
        <Box
          h={"452px"}
          style={{
            maxHeight: "500px",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <Accordion
            w={"100%"}
            defaultValue={danhSachLichSuCapNhat.data?.length ? `item-0` : undefined}
          >
            {danhSachLichSuCapNhat.data?.map((item, index) => (
              <Accordion.Item value={`item-${index}`} key={index}>
                <Accordion.Control>
                  <Flex gap={20} justify="space-between" align="center" w={"40%"}>
                    <MyFlexColumn gap={0}>
                      <Text size="sm">
                        Cập nhật ngày {utils_date_dateToDDMMYYYString(item.ngayCapNhat!)}
                      </Text>
                    </MyFlexColumn>
                    <Group gap={10} align="center">
                      <Text size="sm">{item.nguoiCapNhat}</Text>
                      {item.trangThai ? (
                        <IconSquareCheckFilled color="green" />
                      ) : (
                        <IconSquareRoundedMinusFilled color="red" />
                      )}
                    </Group>
                  </Flex>
                </Accordion.Control>
                <Accordion.Panel>
                  <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <Textarea
                        value={item.noiDung! || ""}
                        autosize={false}
                        rows={14}
                        style={{
                          overflowY: "auto",
                          resize: "none",
                        }}
                        readOnly
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <MyFieldset title="File minh chứng">
                        <MyDataTable
                          data={item.danhSachMinhChung || []}
                          columns={columns}
                          enableRowSelection={true}
                          enableRowNumbers={true}
                          initialState={{
                            columnSizing: {
                              "mrt-row-numbers": 60,
                            },
                            columnPinning: { right: ["trangThai", "thaoTac"] }
                          }}
                          mantineTableContainerProps={{
                            style: { maxHeight: "142px", overflowY: "scroll" },
                          }}
                          renderTopToolbarCustomActions={({ table }) => (
                            <Group>
                              <MyButton crudType="default" color="green">
                                Sử dụng
                              </MyButton>
                            </Group>
                          )}
                        />
                      </MyFieldset>
                    </Grid.Col>
                  </Grid>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
    </MyFlexColumn>
  );
}
