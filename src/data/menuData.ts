import { I0LinkItem } from "@/components/Layouts/BasicAppShell/BasicAppShell";

export const menuData: I0LinkItem[] = [
  {
    label: "Quản lí hệ thống",
    links: [
      { pageId: 1, name: "Account management", label: "Quản lí tài khoản", link: "core71678" },
      // { label: "Danh mục quyền", link: "47643", status: "Prototype" },
      { pageId: 2, name: "Access control level", label: "Phân quyền cấp đơn vị", link: "core38677" },
      { pageId: 3, name: "Access control", label: "Phân quyền sử dụng", link: "core83092" },
      { name: "Document categories", label: "Danh mục loại văn bản", link: "core18256" },
      { pageId: 4, name: "Security regulations", label: "Quy định an toàn/ bảo mật thông tin", link: "core76318", status: "Default" },
      { pageId: 5, name: "System updates", label: "Thông tin xây dựng, cải tiến, bảo trì hệ thống", link: "core16209", status: "Default" },
      { pageId: 6, name: "User guide", label: "Tài liệu hướng dẫn sử dụng", link: "core40207", status: "Default" },
    ],
  },
  {
    label: "Văn bản - Quy định",
    links: [
      { pageId: 7, name: "Organizational regulations", label: "Văn bản - Quy định tổ chức", link: "core26965", status: "Default" },
      { pageId: 8, name: "Workflow process", label: "Quy trình xử lý công việc", link: "core27311", status: "Default" },
      { pageId: 9, name: "Form templates", label: "Tài liệu biểu mẫu", link: "core12196", status: "Default" },
    ],
  },
  {
    label: "Danh sách Bộ tiêu chuẩn",
    link: "4-2",
  },
  {
    label: "Danh sách tiêu chuẩn",
    link: "4-2",
  },
  {
    label: "Danh sách tiêu chí",
    link: "4-2",
  },
  {
    label: "Chu kỳ kiểm định",
    link: "5lrwp21o3u",
  },
  {
    label: "Đơn vị chủ trì tiêu chuẩn",
    link: "4-2",
  },
  {
    label: "Đơn vị chủ trì tiêu chí",
    link: "4-2",
  },
  {
    label: "Danh mục bộ đếm",
    link: "6j8jkftgnc",
  },
  {
    label: "Danh mục hệ thống",
    links: [
      { pageId: 1000, name: "", label: "Danh mục đơn vị", link: "", status: "Menu" },
      { pageId: 1001, name: "List of evidence types", label: " Danh mục loại minh chứng", link: "4iahruyrpf", status: "Prototype" },
      { pageId: 1002, name: "Rating scale list", label: "Danh mục thang đánh giá", link: "4ozfpuyh8g", status: "Prototype" },
    ],
  },

];