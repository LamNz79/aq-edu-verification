"use client"
import { MyActionIconModal } from '@/components/ActionIcons/ActionIconModal/MyActionIconModal';
import { MyButton } from '@/components/Buttons/Button/MyButton';
import MyCheckbox from '@/components/Checkbox/MyCheckbox';
import MyNumberInput from '@/components/Inputs/NumberInput/MyNumberInput';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import useM_COEClass_update from '@/hooks/mutation-hooks/COEClass/useM_COEClass_Update';
import { utils_notification_show } from '@/utils/notification';
import { Flex, Group, Textarea, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { I_4ozfpuyh8g_Read } from './F_4ozfpuyh8g_Read';


export default function F_4ozfpuyh8g_Update({ data }: { data: I_4ozfpuyh8g_Read}) {
    const [fileData, setFileData] = useState<any[]>([]);
    const disc = useDisclosure()
    const form = useForm<I_4ozfpuyh8g_Read>({
        initialValues: data,
        validate: {
            thuTu: (value) => value ? null : 'Không được để trống',
            danhGia: (value) => value ? null : 'Không được để trống',

        }
    });

    // Element properties
    const inputWidth = "70%";
    const pbInput = 10;

    return (
        <Group>
            <MyActionIconModal
                disclosure={disc}
                crudType='update'
            >
                <form onSubmit={form.onSubmit(value => {
                    const body = {
                        id: value.id,
                        thuTu: value.thuTu,
                        danhGia: value.danhGia,
                        xepLoaiTiengAnh: value.xepLoaiTiengAnh,
                        diem: value.diem,
                        note: value.note,
                        isNotAchieved: value.isNotAchieved,
                    }
                    // Gửi data lên backend ?
                    console.log(data);
                    utils_notification_show({ crudType: 'update' })
                    disc[1].close()
                    
                })}>

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
                        <MyCheckbox defaultChecked={form.getValues().isNotAchieved} w={inputWidth} {...form.getInputProps("isNotAchieved")} />
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
                        <MyButton crudType="update" type="submit" />
                    </Group>
                </form>
            </MyActionIconModal>
        </Group>
    );
}
