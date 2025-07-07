import { useForm } from "@mantine/form";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";

interface IFormUpdateForm {
  content: string;
}

export default function CurrentReport() {
  const form = useForm<IFormUpdateForm>({
    initialValues: {
      ...mockContent,
    },
    validate: { content: (v) => (v ? null : "Không được để trống") },
  });

  return (
    <MyFieldset title="Nội dung báo cáo hiện tại">
      <MyTextEditor
        value={form.values.content}
        contentHeight={"220px"}
        error={form.errors.content as string | undefined}
        onChange={() => {}}
      />
    </MyFieldset>
  );
}

const mockContent: IFormUpdateForm = {
    content: `
    <p style="font-size: 14px;">
      Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. 
      Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 9 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hòa, tỉnh Đồng Nai. 
      Trên diện tích 86.908,8 m ^ 2 cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trường, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phòng đọc, phòng máy tính tra cứu thông tin 
       <a href="#">H5.05.02.01</a>.
    </p>
    <p style="font-size: 14px;">
      Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. 
      Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường 
      <a href="#">H5.05.02.02</a>.
    </p>
      <p style="font-size: 14px;">
     Công đoàn Trường phối kết hợp với các phòng ban trong Trường tổ chức các hoạt động hỗ trợ, thiện nguyện như hỗ trợ sinh viên, GV có hoàn cảnh khó khăn, các hoạt động về tinh thần cho
      NV, GV, luôn lấy con người làm trung tâm truyền giáo dục, sự đoàn ngũ nhân NV, GV.
       Trường Công đoàn Khoa còn tổ chức vận động và Ban
        chủ nhiệm Khoa cải thiện điều kiện việc làm, chăm lo đời sống cho NV, GV trong Khoa. Thu hút NV, GV tham gia các hoạt động do Công đoàn Trường phát động
         <a href="#"">H5.05.02.03</a>. </p>
  `,
  };