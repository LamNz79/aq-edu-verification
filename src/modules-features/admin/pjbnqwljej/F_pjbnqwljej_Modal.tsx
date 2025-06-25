"use client"
import baseAxios from '@/api/baseAxios';
import { MRT_ColumnDef } from 'mantine-react-table';
import { Fieldset, Group, Stack, Text, Textarea } from '@mantine/core';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { MyButtonModal, MyDataTable, MyFieldset, MyTextEditor } from 'aq-fe-framework/components';
import { useEffect, useState } from 'react';
import MyFlexColumn from '@/components/Layouts/FlexColumn/MyFlexColumn';
import MyButtonViewPDF from '@/components/Buttons/ButtonViewPDF/MyButtonViewPDF';
import { U0DateToDDMMYYYString } from '@/utils/date';
interface Evidence {
    code: string;              // Mã minh chứng
    name: string;              // Tên minh chứng
    fileCode: string;          // Mã file minh chứng
    validFrom: Date;           // Ngày hiệu lực
    validTo: Date;             // Ngày hết hạn
    fileUrl?: string;          // Đường dẫn file (nếu có)
    relatedUrl?: string;       // Đường dẫn liên kề (nếu có)
    status: "Còn hạn" | "Hết hạn"; // Trạng thái
}
interface F_pjbnqwljej_Read {
    id: number;
    codeTieuChuan: string;
    codeTieuChi: string;
    requireCode: string;
    requireName: string;
    result: string;
    reportDate: Date;
    deadlineDate: Date;
    personUpdate?: string;
    updateDate?: Date;
    programName: string;
    regulationNumber: string;
    regulationDate: string;
    facultyName: string;
    currentYear: number;
    nextYear: number;
    evidences: Evidence[];
}

export default function F_rdrmqcfvux_Update({ data }: { data: F_pjbnqwljej_Read }) {
    const disclosure = useDisclosure();


    const evidenceColumns: MRT_ColumnDef<Evidence>[] = [
        {
            header: "Mã minh chứng",
            accessorKey: "code",
        },
        {
            header: "Tên minh chứng",
            accessorKey: "name",
        },
        {
            header: "Mã file minh chứng",
            accessorKey: "fileCode",
        },
        {
            header: "Ngày hiệu lực",
            accessorFn: row => U0DateToDDMMYYYString(row.validFrom),
            id: "validFrom",
        },
        {
            header: "Ngày hết hạn",
            accessorFn: row => U0DateToDDMMYYYString(row.validTo),
            id: "validTo",
        },
        {
            header: "Xem file",
            enableSorting: false,
            size: 90,
            mantineTableBodyCellProps: {
                align: 'center',
            },
            accessorFn: (row) =>
                row.fileUrl == null || row.fileUrl == "" ? "" : <MyButtonViewPDF />,
        },
        {
            header: "Xem liên kết",
            accessorKey: "relatedUrl",
            // Cell: ({ cell }) => {
            //     const url = cell.getValue();
            //     return url ? (
            //         <a href={url} target="_blank" rel="noopener noreferrer">Xem</a>
            //     ) : null;
            // },
        },
        {
            header: "Trạng thái",
            accessorKey: "status",
        }
    ];


    const form = useForm<F_pjbnqwljej_Read>({

        initialValues: data,
    });




    return (
        <MyButtonModal
            disclosure={disclosure}
            variant='subtle'
            modalSize="100%"
            label='Xem'
            title='Chi tiết khắc phục/ cải tiến'
        >
            <Stack gap={0}>
                <Text>
                    <Text fw={500} span>Kết quả:</Text> {data.result}
                </Text>
                <Text>
                    <Text fw={500} span>Nội dung cần khắc phục/ cải tiến:</Text> Minh chứng chưa đúng nội dung báo cáo
                </Text>
            </Stack>

            <MyFlexColumn>
                <MyTextEditor
                    label='Tổng hợp báo cáo yêu cầu/ mốc chuẩn'
                    value={generateDemoBaoCaoMocChuan({
                        programName: data.programName,
                        regulationNumber: data.regulationNumber,
                        regulationDate: data.regulationDate,
                        facultyName: data.facultyName,
                        currentYear: data.currentYear,
                        nextYear: data.nextYear
                    })}
                    onChange={(content: string) => { console.log(content) }}></MyTextEditor>
            </MyFlexColumn>

            <MyFieldset title="Danh sách minh chứng">
                <MyDataTable
                    enableRowSelection={true}
                    enableRowNumbers={true}
                    columns={evidenceColumns}
                    data={data.evidences || []}
                /></MyFieldset>
        </ MyButtonModal>
    )
}

function generateDemoBaoCaoMocChuan({
    programName,
    regulationNumber,
    regulationDate,
    facultyName,
    currentYear,
    nextYear,
}: {
    programName: string;
    regulationNumber: string;
    regulationDate: string;
    facultyName: string;
    currentYear: number;
    nextYear: number;
}) {
    const template = `<p><strong>Tên Tiêu chí: </strong>Chuẩn đầu ra của CTĐT được xây dựng, rà soát và điều chỉnh theo quy trình định trước; trong đó có sự tham gia của các bên liên quan.</p><p><strong>1. Mô tả hiện trạng</strong></p><p>(Phần này mô tả thực tế cách cơ sở đào tạo thực hiện tiêu chí. Dữ liệu này sẽ được tổng hợp từ các minh chứng và mô tả của cán bộ, giảng viên trong quá trình thu thập minh chứng và đánh giá ban đầu.)</p><p>&nbsp;</p><p>"Hiện tại, Chuẩn đầu ra (CĐR) của Chương trình đào tạo (CTĐT) ${programName} được xây dựng và rà soát định kỳ theo quy trình được ban hành tại Quy định số ${regulationNumber} ngày ${regulationDate} của Hiệu trưởng về "Quy trình xây dựng, rà soát và điều chỉnh CĐR CTĐT".</p><p>&nbsp;</p><p>Quy trình này bao gồm các bước chính:</p><p><strong>Bước 1:</strong>&nbsp;Đề xuất rà soát/xây dựng CĐR: Đơn vị phụ trách CTĐT (Khoa ${facultyName}) tổng hợp phản hồi từ các bên liên quan (doanh nghiệp sử dụng lao động, cựu người học, người học, giảng viên) thông qua các cuộc khảo sát, phỏng vấn, hội thảo định kỳ 2 năm/lần hoặc khi có thay đổi lớn về công nghệ, nhu cầu xã hội.</p><p><strong>Bước 2:</strong> Xây dựng/rà soát dự thảo CĐR: Tổ chuyên môn/Bộ môn của Khoa ${facultyName} dựa trên kết quả khảo sát và định hướng phát triển ngành để xây dựng dự thảo CĐR mới hoặc điều chỉnh CĐR hiện có. Dự thảo này được xây dựng bám sát Khung trình độ Quốc gia Việt Nam và tham khảo các CĐR của các CTĐT tương đương có uy tín trong nước và quốc tế.</p><p><strong>Bước 3:</strong>&nbsp;Lấy ý kiến các bên liên quan: Dự thảo CĐR được gửi lấy ý kiến rộng rãi từ các đối tượng:</p><ul><li><p>Bên sử dụng lao động: Thông qua các buổi tọa đàm, hội thảo với các doanh nghiệp đối tác, hoặc gửi phiếu khảo sát trực tuyến.</p></li><li><p>Cựu người học: Gửi email khảo sát hoặc phỏng vấn trực tiếp.</p></li><li><p>Người học hiện tại: Khảo sát trực tuyến, đối thoại sinh viên.</p></li><li><p>Giảng viên: Họp bộ môn, hội thảo cấp Khoa.</p></li><li><p>Hội đồng Khoa học và Đào tạo cấp trường.</p></li></ul><p><strong>Bước 4:&nbsp;</strong>Hoàn thiện và trình duyệt: Tổng hợp ý kiến góp ý, chỉnh sửa và hoàn thiện CĐR. Dự thảo cuối cùng được trình Hội đồng Khoa học và Đào tạo cấp trường thẩm định và trình Hiệu trưởng ký ban hành.</p><p><strong>Bước 5: </strong>Ban hành và công bố: CĐR được Hiệu trưởng ký quyết định ban hành và công bố công khai trên website của trường, của khoa và trong đề cương chi tiết học phần.</p><p>Các phiên bản CĐR được lưu trữ đầy đủ tại Khoa và Phòng Đào tạo. Minh chứng cho quy trình này bao gồm các biên bản họp, phiếu khảo sát ý kiến, báo cáo tổng hợp ý kiến, quyết định ban hành CĐR."</p><p>&nbsp;</p><p><strong>2. Điểm mạnh</strong></p><p>(Phần này nêu bật những khía cạnh tích cực, những việc đã làm tốt liên quan đến tiêu chí.)</p><p>&nbsp;</p><p>Quy trình rõ ràng và được thể chế hóa: Nhà trường đã ban hành quy định cụ thể về quy trình xây dựng, rà soát CĐR, đảm bảo tính hệ thống và minh bạch.</p><p>Sự tham gia đa dạng của các bên liên quan: Quy trình khuyến khích và có cơ chế thu hút sự tham gia tích cực của các bên liên quan quan trọng như doanh nghiệp, cựu người học, người học, và giảng viên, giúp CĐR phản ánh đúng nhu cầu xã hội và thị trường lao động.</p><p>Tính định kỳ và linh hoạt: CĐR được rà soát định kỳ 2 năm/lần, đồng thời có thể điều chỉnh đột xuất khi có yếu tố bên ngoài tác động, thể hiện sự chủ động của CTĐT trong việc thích ứng với môi trường thay đổi.</p><p>Tuân thủ quy định cấp quốc gia: Việc xây dựng CĐR bám sát Khung trình độ Quốc gia Việt Nam đảm bảo tính pháp lý và chuẩn hóa.</p><p><strong>3. Điểm tồn tại</strong></p><p>(Phần này chỉ ra những hạn chế, thiếu sót cần khắc phục để cải thiện tiêu chí.)</p><p>&nbsp;</p><p>Tỷ lệ phản hồi từ một số nhóm bên liên quan (ví dụ: cựu người học ở xa) trong các đợt khảo sát chưa thực sự cao, ảnh hưởng đến mức độ đại diện của ý kiến thu được.</p><p>Việc tổng hợp và phân tích dữ liệu từ các khảo sát ý kiến đôi khi còn thủ công, tốn thời gian và có thể bỏ sót một số thông tin quan trọng.</p><p>Chưa có cơ chế cụ thể để theo dõi tác động của việc điều chỉnh CĐR đến chất lượng người học sau khi tốt nghiệp một cách hệ thống.</p><p><strong>4. Kế hoạch hành động</strong></p><p>(Phần này đưa ra các giải pháp cụ thể để khắc phục điểm tồn tại, nâng cao chất lượng. Đây là đầu vào cho Module Quản lý Kế hoạch Cải tiến.)</p><p>&nbsp;</p><p>Mở rộng kênh thu thập ý kiến: Phát triển thêm các công cụ khảo sát trực tuyến thân thiện hơn, kết hợp tổ chức các buổi hội thảo/tọa đàm trực tuyến để tăng cường sự tham gia của cựu người học và doanh nghiệp ở các địa phương khác.</p><p>Thời gian thực hiện:<strong> </strong>Quý 3 năm ${currentYear}.</p><p>Đơn vị/Cá nhân chịu trách nhiệm: Phòng Đảm bảo Chất lượng, Khoa ${facultyName}.</p><p></p><p>Tối ưu hóa quy trình phân tích dữ liệu: Ứng dụng công cụ phân tích dữ liệu chuyên nghiệp (hoặc sử dụng tính năng của EAQ nếu có) để tự động hóa việc tổng hợp và phân tích ý kiến góp ý, đảm bảo tính khách quan và hiệu quả.</p><p>Thời gian thực hiện: Quý 4 năm ${currentYear}.</p><p>Đơn vị/Cá nhân chịu trách nhiệm: Phòng Công nghệ thông tin, Phòng Đảm bảo Chất lượng.</p><p></p><p>Xây dựng bộ chỉ số theo dõi tác động của CĐR: Phát triển các chỉ số định lượng để đánh giá hiệu quả của CĐR sau khi điều chỉnh, bao gồm tỷ lệ việc làm, mức độ hài lòng của nhà tuyển dụng, năng lực cạnh tranh của sinh viên tốt nghiệp. Dữ liệu này sẽ được thu thập và phân tích thường xuyên.</p><p>Thời gian thực hiện: Năm ${nextYear}.</p><p>Đơn vị/Cá nhân chịu trách nhiệm: Phòng Đảm bảo Chất lượng, Phòng Khảo thí và Đảm bảo Chất lượng. </p>`;

    return template;
}

