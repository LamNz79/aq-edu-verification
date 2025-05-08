import { I0LinkItem } from "@/components/Layouts/BasicAppShell/BasicAppShell";

export const menuData: I0LinkItem[] = [
  { pageId: 111, label: "Dashboard", link: "obf4m08gkx", status: "Prototype" },
  {
    label: "Quản lý hệ thống",
    links: [
      { pageId: 1, name: "Account management", label: "Quản lí tài khoản", link: "core71678" },
      { pageId: 2, name: "Access control level", label: "Phân quyền cấp đơn vị", link: "core38677" },
      { pageId: 3, name: "Access control", label: "Phân quyền sử dụng", link: "core83092" },
      { pageId: 4, name: "Document categories", label: "Danh mục loại văn bản", link: "core18256" },
      { pageId: 5, name: "Security regulations", label: "Quy định an toàn/ bảo mật thông tin", link: "core76318", status: "Default" },
      { pageId: 6, name: "System updates", label: "Thông tin xây dựng, cải tiến, bảo trì hệ thống", link: "core16209", status: "Default" },
      { pageId: 7, name: "User guide", label: "Tài liệu hướng dẫn sử dụng", link: "core40207", status: "Default" }
    ],
  },

  {
    label: "Văn bản – Quy định",
    links: [
      { pageId: 21, name: "Organizational regulations", label: "Văn bản – Quy định tổ chức", link: "core26965", status: "Default" },
      { pageId: 22, name: "Workflow process", label: "Quy trình xử lý công việc", link: "core27311", status: "Default" },
      { pageId: 23, name: "Form templates", label: "Tài liệu biểu mẫu", link: "core12196", status: "Default" },
    ],
  },

  {
    label: "Quản lý Bộ tiêu chuẩn",
    links: [
      { pageId: 31, name: "Standard list", label: "Danh sách Bộ tiêu chuẩn", link: "mc1b1zpbg6", status: "Prototype" },
      { pageId: 32, name: "Standard structure", label: "Cấu trúc bộ tiêu chuẩn", link: "po2maj8sm7", status: "Prototype" },
    ],
  },

  {
    label: "Kế hoạch và phân công",
    links: [
      { pageId: 41, name: "Inspection cycle", label: "Chu kỳ kiểm định", link: "5lrwp21o3u", status: "Prototype" },
      { pageId: 42, name: "Preparation roadmap", label: "Lộ trình chuẩn bị", link: "vpouokrvmt", status: "Prototype" },
      { pageId: 43, name: "Report management", label: "Quản lý kỳ báo cáo", link: "vrdjnzpfmc", status: "Prototype" },
      { pageId: 44, name: "Assignment", label: "Phân công phụ trách mốc chuẩn", link: "raolvysdbf", status: "Prototype" },
      { pageId: 45, name: "Recurring tasks", label: "Thiết lập nhiệm vụ báo cáo định kỳ", link: "grtzbp3rjk", status: "Prototype" },
    ],
  },

  {
    label: "Quản lý minh chứng",
    links: [
      { pageId: 51, name: "Evidence repository", label: "Kho minh chứng", link: "x19IQVXguk", status: "Prototype" },
    ],
  },

  {
    label: "Báo cáo tự đánh giá",
    links: [
      { pageId: 61, name: "Draft report", label: "Soạn nội dung báo cáo", link: "79t4hwd85i", status: "Prototype" },
      { pageId: 62, name: "Summary report", label: "Tổng hợp báo cáo mốc chuẩn", link: "o4e65ehgty", status: "Prototype" },
      { pageId: 63, name: "Export report", label: "Xuất báo cáo tự đánh giá", link: "", status: "Default" },
    ],
  },

  {
    label: "Khắc phục/ cải tiến kết quả đánh giá",
    links: [
      { pageId: 71, name: "Evaluation result", label: "Ghi nhận kết quả đánh giá", link: "vcd16qt9lf", status: "Prototype" },
      { pageId: 72, name: "Improvement plan", label: "Kế hoạch khắc phục/ cải tiến", link: "xwuj3dvbgs", status: "Prototype" },
      { pageId: 73, name: "Monitoring improvements", label: "Theo dõi thực hiện khắc phục/ cải tiến", link: "pjbnqwljej", status: "Prototype" },
    ],
  },
  // { label: "Danh sách tiêu chuẩn", link: "yqdijiutfg", status: "Prototype" },
  // { label: "Danh sách tiêu chí", link: "b99o1d0u5q", status: "Prototype" },
  // { label: "Danh sách mốc chuẩn", link: "txn1uriow1", status: "Prototype" },
  // { label: "Chu kỳ kiểm định", link: "5lrwp21o3u", status: "Prototype" },
  // { label: "Đơn vị chủ trì tiêu chuẩn", link: "7gdid7o8tk", status: "Prototype" },
  // { label: "Đơn vị chủ trì tiêu chí", link: "z7xgafshhg", status: "Prototype"  },
  // { label: "Phân công phụ trách mốc chuẩn", link: "i3sm0z5ns4", status: "Prototype" },
  // { label: "Danh sách minh chứng", link: "nxiyjlnrik", status: "Prototype" },
  {
    label: "Danh mục hệ thống",
    links: [
      { pageId: 999, name: "", label: "Cấu hình thông tin chủ quản", link: "k683h5xrg3", status: "Prototype" },
      { pageId: 1000, name: "", label: "Danh mục đơn vị", link: "o4e65ewrwy", status: "Prototype" },
      // { pageId: 1001, name: "List of evidence types", label: "Danh mục loại minh chứng", link: "4iahruyrpf", status: "Prototype" },
      // { pageId: 1002, name: "Rating scale list", label: "Danh mục thang đánh giá", link: "4ozfpuyh8g", status: "Prototype" },
      { pageId: 1003, name: "", label: "Danh mục cấu hình mail", link: "zwgpy0521g", status: "Prototype" },
      { pageId: 1006, name: "", label: "Danh mục bộ đếm", link: "6j8jkftgnc", status: "Prototype" },
    ],
  },
];
