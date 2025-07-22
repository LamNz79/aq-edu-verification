import { SimpleGrid, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MyDateInput, MyNumberInput, MyTextArea } from 'aq-fe-framework/components';
import { MyButtonCreateUpdate, MyTextInput } from 'aq-fe-framework/core';
import React from 'react'

export default function AccreditationRoadmapCreateOrUpdate({ data }: { data?: any }) {
    const form = useForm({
        initialValues: data ?? {},
    });
    return (
        <MyButtonCreateUpdate
            onSubmit={() => { return false }}
            form={form}
            isUpdate={!!data}
            modalProps={{ size: "70%" }}
            scrollAreaAutosizeProps={{ h: "auto" }}
        >
            <SimpleGrid cols={2} spacing="md">
                <Stack>
                    <MyNumberInput label="Thứ tự" {...form.getInputProps("id")} />
                    <MyTextInput label="Mã Lộ trình" {...form.getInputProps("roadmapCode")} />
                    <MyTextInput label="Tên Lộ trình" {...form.getInputProps("roadmapName")} />
                </Stack>
                <Stack>
                    <MyDateInput label="Thời gian Bắt đầu" {...form.getInputProps("startDate")} />
                    <MyDateInput label="Thời gian Kết thúc" {...form.getInputProps("endDate")} />
                    <MyTextArea label="Ghi chú" {...form.getInputProps("note")} minRows={2} />
                </Stack>
            </SimpleGrid>
        </MyButtonCreateUpdate>
    )
}
