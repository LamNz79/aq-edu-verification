"use client";
import {
  AQButtonExportData,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  AQButtonCreateByImportFile,
  MyButton,
} from "aq-fe-framework/components";
import { Group, PasswordInput } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_zwgpy0521g_Update from "./F_zwgpy0521g_Update";
import F_zwgpy0521g_Delete from "./F_zwgpy0521g_Delete";
import F_zwgpy0521g_Create from "./F_zwgpy0521g_Create";
import { useForm } from "@mantine/form";

interface I_zwgpy0521g_DanhMucCauHinhMail {
  id?: number;
  phanHe?: string;
  hostMailServer?: string;
  outgoingPort?: number;
  incomingPort?: number;
  SSL?: boolean;
  userName?: string;
  password?: string;
}
export default function F_zwgpy0521g_Read() {
  //===initiate===
  const [importData, setImportData] = useState(false);
  const form = useForm<any>({
    initialValues: {
      importedData: [],
    },
  });

  //===pseudo data===
  const danhMucCauHinhMailQuery = useQuery<I_zwgpy0521g_DanhMucCauHinhMail[]>({
    queryKey: ["Fzwgpy0521g_ReadDanhMucCauHinhMail"],
    queryFn: async () => {
      return mockData;
    },
  });

  //===config===
  const exportConfig = {
    fields: [
      {
        header: "Phân hệ",
        fieldName: "phanHe",
      },
      {
        header: "Host mail server",
        fieldName: "hostMailServer",
      },
      {
        header: "Outgoing port",
        fieldName: "outgoingPort",
      },
      {
        header: "Incoming port",
        fieldName: "incomingPort",
      },
      {
        header: "SSL",
        fieldName: "SSL",
      },
      {
        header: "Username",
        fieldName: "userName",
      },
      {
        header: "Password",
        fieldName: "password",
      },
    ],
  };

  //===component===
  const columns = useMemo<MRT_ColumnDef<I_zwgpy0521g_DanhMucCauHinhMail>[]>(
    () => [
      {
        header: "Phân hệ",
        accessorKey: "phanHe",
      },
      {
        header: "Host mail server",
        accessorKey: "hostMailServer",
      },
      {
        header: "Outgoing port",
        accessorKey: "outgoingPort",
      },
      {
        header: "Incoming port",
        accessorKey: "incomingPort",
      },
      {
        header: "SSL",
        accessorKey: "SSL",
        Cell: ({ cell }) => ((cell.getValue() as boolean) ? "true" : "false"),
      },
      {
        header: "Username",
        accessorKey: "userName",
      },
      {
        header: "Password",
        accessorKey: "password",
        Cell: ({ cell }) => (
          <>*********</>
        ),
      },
    ],
    []
  );

  //===handling===
  if (danhMucCauHinhMailQuery.isLoading) return "Đang tải dữ liệu...";
  if (danhMucCauHinhMailQuery.isError) return "Lỗi tải dữ liệu";

  return (
    <MyFieldset title="Danh mục cấu hình mail">
      <MyDataTable
        enableRowSelection
        data={danhMucCauHinhMailQuery.data!}
        columns={columns}
        renderTopToolbarCustomActions={({ table }) => (
          <Group>
            <F_zwgpy0521g_Create />
            <AQButtonCreateByImportFile
              setImportedData={setImportData}
              form={form}
              onSubmit={() => {
                console.log(form.values);
              }}
            />
            <AQButtonExportData
              isAllData={true}
              data={danhMucCauHinhMailQuery.data!}
              exportConfig={exportConfig}
              objectName="danhSachCauHinhMail"
            />
            <MyButton crudType='delete'>Xóa</MyButton>
          </Group>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <F_zwgpy0521g_Update values={row.original} />
            <F_zwgpy0521g_Delete id={row.original.phanHe!} />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}
const mockData: I_zwgpy0521g_DanhMucCauHinhMail[] = [
  {
    id: 1,
    phanHe: "Toàn hệ thống",
    hostMailServer: "smtp.gmail.com",
    outgoingPort: 589,
    incomingPort: 465,
    SSL: true,
    userName: "thanh@aqtech.vn",
    password: "password123",
  },
  {
    id: 2,
    phanHe: "Phòng kế toán",
    hostMailServer: "smtp.office365.com",
    outgoingPort: 587,
    incomingPort: 993,
    SSL: true,
    userName: "ketoan@aqtech.vn",
    password: "office365pass",
  },
  {
    id: 3,
    phanHe: "Phòng kỹ thuật",
    hostMailServer: "mail.aqtech.vn",
    outgoingPort: 465,
    incomingPort: 993,
    SSL: true,
    userName: "kythuat@aqtech.vn",
    password: "kythuatpass",
  },
  {
    id: 4,
    phanHe: "Phòng nhân sự",
    hostMailServer: "smtp.mailtrap.io",
    outgoingPort: 2525,
    incomingPort: 143,
    SSL: false,
    userName: "nhansu@aqtech.vn",
    password: "mailtrap123",
  },
];
