"use client";

import { SimpleGrid, Stack } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import {
    MyDateInput,
    MyFileInput,
    MySelect,
    MyTextArea,
    MyTextInput,
} from "aq-fe-framework/components";

export default function GenralInfoForm({ form }: { form: any }) {
    return (
        <>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={24}>
                <Stack>
                    <MyTextInput label="Số quyết định" {...form.getInputProps("decisionNumber")} />
                    <MyDateInput label="Ngày quyết định" {...form.getInputProps("decisionDate")} />
                    <MyFileInput label="File Quyết định thành lập" {...form.getInputProps("startYear")} />
                </Stack>
                <Stack>
                    <MySelect
                        label="Chương trình đào tạo áp dụng"
                        data={programDataOption}
                        {...form.getInputProps("appliedProgram")} />
                    <MySelect
                        label="Khóa đào tạo áp dụng"
                        data={courseDataOption}
                        {...form.getInputProps("appliedCohort")} />
                    <MyTextInput label="Người ký" {...form.getInputProps("signer")} />
                </Stack>
            </SimpleGrid>
            <MyTextArea label="Tên quyết định" {...form.getInputProps("decisionTitle")} />
        </>
    );
}

const mockDataProgram = [
    {
        id: 1,
        code: "7480201",
        name: "Kỹ thuật Phần mềm",
        managingFaculty: "Khoa Công nghệ Thông tin",
        educationLevel: "Đại học",
        educationType: "Chính quy",
        standardDuration: 4,
        startYear: 2010,
    },
    {
        id: 2,
        code: "7510301H",
        name: "Quản trị Kinh doanh (Chương trình Chất lượng cao)",
        managingFaculty: "Viện Kinh tế và Quản lý",
        educationLevel: "Đại học",
        educationType: "Chính quy",
        standardDuration: 4,
        startYear: 2015,
    },
    {
        id: 3,
        code: "7480101C",
        name: "Khoa học Máy tính (Chương trình Tiên tiến)",
        managingFaculty: "Khoa Công nghệ Thông tin",
        educationLevel: "Đại học",
        educationType: "Chính quy",
        standardDuration: 4,
        startYear: 2012,
    },
    {
        id: 4,
        code: "6480201",
        name: "Kỹ thuật Điện tử (Thạc sĩ)",
        managingFaculty: "Khoa Điện Tử",
        educationLevel: "Thạc sĩ",
        educationType: "Chính quy",
        standardDuration: 2,
        startYear: 2018,
    },
    {
        id: 5,
        code: "7810103V",
        name: "Quản trị Dịch vụ Du lịch và Lữ hành (Từ xa)",
        managingFaculty: "Khoa Du lịch",
        educationLevel: "Đại học",
        educationType: "Từ xa",
        standardDuration: 4.5,
        startYear: 2020,
    },
    {
        id: 6,
        code: "7480201C",
        name: "CNTT (Chương trình Tiên tiến)",
        managingFaculty: "Khoa Du lịch",
        educationLevel: "Đại học",
        educationType: "Chính quy",
        standardDuration: 4.5,
        startYear: 2020,
    }
];


const programDataOption = mockDataProgram.map(item => ({
    value: item.code,
    label: `${item.code} - ${item.name}`
}))


const mockDataCourse = [
    {
        id: 1,
        courseCode: "K.IT24",
    },
    {
        id: 2,
        courseCode: "K.QTKD23",
    },
    {
        id: 3,
        courseCode: "K.CNTT20",
    },
    {
        id: 4,
        courseCode: "K.DL22",
    },
    {
        id: 5,
        courseCode: "K60",
    },
    {
        id: 6,
        courseCode: "K61",
    },
    {
        id: 7,
        courseCode: "K62",
    },
    {
        id: 8,
        courseCode: "K20",
    },
];


const courseDataOption = mockDataCourse.map(item => ({
    value: item.courseCode,
    label: `${item.courseCode}`
}))