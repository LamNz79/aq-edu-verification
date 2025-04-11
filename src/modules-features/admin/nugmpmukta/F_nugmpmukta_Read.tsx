'use client'
import MyCenterFull from "@/components/CenterFull/MyCenterFull"
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable"
import useQ_COECourseSection_GetCOECourseSectionByCOEGrade from "@/hooks/query-hooks/COECourseSection/useQ_COECourseSection_GetCOECourseSectionByCOEGrade"
import useS_Shared_FilterGrade from "@/modules-features/shared/F_Shared_FilterGrade/useS_Shared_FilterGrade"
import { Fieldset, Group } from "@mantine/core"
import { MRT_ColumnDef } from "mantine-react-table"
import { useMemo } from "react"
import F_nugmpmukta_ViewUpdate from "./F_nugmpmukta_ViewUpdate/F_nugmpmukta_ViewUpdate"

export default function F_nugmpmukta_Read() {
  const store = useS_Shared_FilterGrade()

  const query = useQ_COECourseSection_GetCOECourseSectionByCOEGrade({
    params: "?COEGradeId=" + store.state.grade?.id,
    options: {
      enabled: store.state?.grade != undefined
    }
  })
  const columns = useMemo<MRT_ColumnDef<ICOECourseSection>[]>(() => [
    {
      header: "Năm học Học kỳ",
      accessorKey: "coeGradeSubject.coeSemester.name"
    },
    {
      header: "Thứ tự",
      accessorKey: "coeGradeSubject.order"
    },
    {
      header: "Mã môn học",
      accessorKey: "coeGradeSubject.coeSubject.code"
    },
    {
      header: "Tên môn học",
      accessorKey: "coeGradeSubject.coeSubject.name"
    },
    {
      header: "Nhóm học",
      accessorKey: "coeGradeSubject.coeSubjectGroup.name"
    },
    {
      header: "Số tín chỉ",
      accessorKey: "coeGradeSubject.coeSubject.numberCredit"
    },
    {
      header: "Số tiết",
      accessorKey: "coeGradeSubject.coeSubject.numberPeriod"
    },
    {
      header: "Số lượng sinh viên",
    }
  ], [])
  if (query.isLoading) return "Đang tải dữ liệu..."
  if (query.isError) return "Có lỗi xảy ra!"
  return (
    <Fieldset legend={`Danh sách môn học thuộc chương trình đào tạo - Khóa học ${store.state.grade?.code}`}>
      <MyDataTable
        columns={columns}
        data={query.data!}
        renderTopToolbarCustomActions={() => (
          <Group>
            {/* <F_nugmpmukta_Import /> */}
          </Group>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <F_nugmpmukta_ViewUpdate values={row.original} />
          </MyCenterFull>
        )}
      />
    </Fieldset>
  )
}
