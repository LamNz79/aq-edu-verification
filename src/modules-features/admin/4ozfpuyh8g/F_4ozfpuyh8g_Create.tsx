"use client";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import MyCheckbox from "@/components/Checkbox/MyCheckbox";
import MyNumberInput from "@/components/Inputs/NumberInput/MyNumberInput";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import useQ_COEGrade_GetAll from "@/hooks/query-hooks/COEGrade/useQ_COEGrade_GetAll";
import { utils_notification_show } from "@/utils/notification";
import { Flex, Group, Textarea, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";


export interface I_4ozfpuyh8g_Create {
    thuTu: number | null; // Thứ tự
    danhGia: string; // Đánh giá
    xepLoaiTiengAnh: string; // Xếp loại tiếng Anh
    diem: number | null; // Điểm
    note: string;
    isNotAchieved: boolean; // Là không đạt?
}


export default function F_4ozfpuyh8g_Create() {
    const discModalCreate = useDisclosure();
    const [fileData, setFileData] = useState<any[]>([]);
    const gradeQuery = useQ_COEGrade_GetAll();

    // form single data
    const form = useForm<I_4ozfpuyh8g_Create>({
        initialValues: {
            thuTu: null,
            danhGia: "",
            xepLoaiTiengAnh: "",
            diem: null,
            isNotAchieved: false,
            note: ""
        },
        validate: {
            thuTu: (value) => (value ? null : "Không được để trống"),
            danhGia: (value) => (value ? null : "Không được để trống"),
        },
    });

    // form multuple data
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: [],
        },
    });

    // effect fileData variable change
    useEffect(() => {
        form_multiple.setValues({ importedData: fileData });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fileData]);

    // Element properties
    const inputWidth = "70%";
    const pbInput = 10;

    return (
        <Group>
            <MyButtonModal
                crudType="create"
                title="Thêm thang đánh giá"
                disclosure={discModalCreate}
            >
                <form
                    onSubmit={form.onSubmit((value) => {
                        utils_notification_show({ crudType: "create" });
                        form.reset();
                        discModalCreate[1].close();
                    })}
                >
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        pb={pbInput}
                    >
                        <Text>Thứ tự <Text span c="red" inherit>*</Text> </Text>
                        <MyNumberInput min={0} hideControls w={inputWidth} {...form.getInputProps("thuTu")} />
                    </Flex>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        pb={pbInput}
                    >
                        <Text>Đánh giá <Text span c="red" inherit>*</Text> </Text>
                        <MyTextInput w={inputWidth} {...form.getInputProps("danhGia")} />
                    </Flex>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        pb={pbInput}
                    >
                        <Text>Đánh giá Eg</Text>
                        <MyTextInput w={inputWidth} {...form.getInputProps("xepLoaiTiengAnh")} />
                    </Flex>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        pb={pbInput}
                    >
                        <Text>{"Điểm >="}</Text>
                        <MyNumberInput min={0} hideControls w={inputWidth} {...form.getInputProps("diem")} />
                    </Flex>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        pb={pbInput}
                    >
                        <Text>Không đạt</Text>
                        <MyCheckbox w={inputWidth} {...form.getInputProps("isNotAchieved")} />
                    </Flex>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        pb={pbInput}
                    >
                        <Text>Ghi chú</Text>
                        <Textarea w={inputWidth} {...form.getInputProps("note")} />
                    </Flex>
                    <Group grow mt={5}>
                        <MyButton crudType="create" type="submit" />
                    </Group>
                </form>
            </MyButtonModal>
        </Group>
    );
}
