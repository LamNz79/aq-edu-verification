import { I0LinkItem } from "@/components/Layouts/BasicAppShell/BasicAppShell";

export const menuData_Program: I0LinkItem[] = [
  {
    pageId: 111,
    label: "Dashboard",
    link: "obf4m08gkx",
    status: "Prototype",
    description:
      "Hiển thị tổng quan các số liệu và hoạt động chính của hệ thống.",
  },
  {
    label: "Quản lý hệ thống",
    links: [
      {
        pageId: 1,
        name: "Account management",
        label: "Quản lí tài khoản",
        link: "core71678",
      },
      {
        pageId: 2,
        name: "Access control level",
        label: "Phân quyền cấp đơn vị",
        link: "core38677",
      },
      {
        pageId: 3,
        name: "Access control",
        label: "Phân quyền sử dụng",
        link: "core83092",
      },
      {
        pageId: 4,
        name: "Document categories",
        label: "Danh mục loại văn bản",
        link: "core18256",
      },
      {
        pageId: 5,
        name: "Security regulations",
        label: "Quy định an toàn/ bảo mật thông tin",
        link: "core76318",
        status: "Default",
      },
      {
        pageId: 6,
        name: "System updates",
        label: "Thông tin xây dựng, cải tiến, bảo trì hệ thống",
        link: "core16209",
        status: "Default",
      },
      {
        pageId: 7,
        name: "User guide",
        label: "Tài liệu hướng dẫn sử dụng",
        link: "core40207",
        status: "Default",
      },
    ],
  },

  {
    label: "Văn bản – Quy định",
    links: [
      {
        pageId: 21,
        name: "Organizational regulations",
        label: "Văn bản – Quy định tổ chức",
        link: "core26965",
        status: "Default",
        description:
          "Quản lý và tra cứu các văn bản, quy định nội bộ của tổ chức.",
      },
      {
        pageId: 22,
        name: "Workflow process",
        label: "Quy trình xử lý công việc",
        link: "core27311",
        status: "Default",
        description:
          "Theo dõi và cập nhật quy trình xử lý công việc trong tổ chức.",
      },
      {
        pageId: 23,
        name: "Form templates",
        label: "Tài liệu biểu mẫu",
        link: "core12196",
        status: "Default",
        description:
          "Lưu trữ và quản lý các biểu mẫu sử dụng trong các quy trình.",
      },
    ],
  },

  {
    label: "Bộ tiêu chuẩn",
    links: [
      {
        pageId: 31,
        name: "Standard list",
        label: "Quản lý Bộ tiêu chuẩn",
        link: "standards-management",
        status: "Prototype",
        description:
          "Danh sách các bộ tiêu chuẩn áp dụng trong hoạt động kiểm định.",
      },
      {
        pageId: 32,
        name: "Configuration criteria indicators requirements",
        label: "Cấu hình Tiêu chí, Chỉ báo, Yêu cầu",
        link: "standards-config",
        status: "Prototype",
      },
      {
        pageId: 32,
        name: "Standard structure",
        label: "Cấu trúc bộ tiêu chuẩn",
        link: "po2maj8sm7",
        status: "Prototype",
        description:
          "Xây dựng và quản lý cấu trúc chi tiết của từng bộ tiêu chuẩn.",
      },
      {
        pageId: 33,
        name: "Standard Version History",
        label: "Lịch sử phiên bản tiêu chuẩn",
        link: "standard-version-history",
        status: "Prototype",
        description: "Lịch sử phiên bản tiêu chuẩn.",
      },
    ],
  },
  {
    label: "Chương trình Đào tạo (CTĐT)",
    links: [
      { pageId: 81, name: "Program List", label: "Danh sách Chương trình đào tạo", link: "program-list", status: "Prototype", description: "Danh sách các chương trình đào tạo đã được tạo." },
      {
        label: "Lịch sử kiểm định",
        links: [
          { pageId: 82, name: "Quality Inspection Certificate", label: "Giấy Chứng nhận Kiểm định Chất lượng CTĐT (Biểu 12)", link: "quality-inspection-certificate", status: "Prototype", description: "Giấy Chứng nhận Kiểm định Chất lượng CTĐT.", },
          { pageId: 83, name: "Evaluation form", label: "Phiếu Đánh giá Tiêu chí của Đoàn đánh giá ngoài (Biểu 11)", link: "evaluation-form", status: "Prototype", description: "Phiếu Đánh giá Tiêu chí của Đoàn đánh giá ngoài.", },
        ],
      },
      { pageId: 83, name: "Training Course List", label: "Danh sách Khóa đào tạo", link: "training-course-list", status: "Prototype", },
    ],
  },
  {
    label: "Quản lý Báo cáo Định kỳ (6 tháng)",
    links: [
      {
        label: "Chu kỳ báo cáo định kỳ",
        links: [
          { label: "Thiết lập Kỳ Báo cáo Định kỳ", name: "", link: "none-43252", description: "", status: "Menu" },
        ],
      },
      {
        label: "Phân công phụ trách báo cáo định kỳ",
        links: [
          { label: "Phân công phụ trách báo cáo tiêu chí", name: "Assign Person in Charge of Criteria Report", link: "criteria-report-assignment", description: "", status: "Prototype" },
          { label: "Phân công phụ trách báo cáo yêu cầu/ mốc chuẩn", name: "Assign Person in Charge of Requirement/Standard Report", link: "requirement-report-assignment", description: "", status: "Prototype" },
        ],
      },
      {
        label: "Thực hiện báo cáo định kỳ",
        links: [
          { label: "Soạn thảo báo cáo theo Yêu cầu/ Mốc chuẩn", name: "", link: "none-567282", description: "", status: "Menu" },
          { label: "Tổng hợp báo cáo theo Tiêu chí", name: "", link: "none-6732746", description: "", status: "Menu" },
        ],
      },
      {
        label: "Giám sát thực hiên báo cáo định kỳ",
        links: [
          { label: "Theo dõi Soạn Thảo Báo cáo theo Yêu cầu", name: "", link: "none-5308976", description: "", status: "Menu" },
          { label: "Theo dõi Tổng hợp Báo cáo theo Tiêu chí", name: "", link: "none-6569824", description: "", status: "Menu" },
        ],
      },
    ],
  },
  {
    label: "Chu kỳ Tự đánh giá & Kiểm định",
    links: [
      {
        label: "Quản lý Lộ trình Chuẩn bị Kiểm định",
        links: [
          { label: "Quản lý Quyết định Thành lập Hội đồng Tự đánh giá CTĐT (Biểu 01)", name: "", link: "management-self-assessment-decision-council", description: "", status: "Prototype" },
          { label: "Quản lý Kế hoạch Tự đánh giá CTĐT (Biểu 02)", name: "", link: "", description: "", status: "Menu" },
          { label: "Nhóm Phân công Nhiệm vụ theo Tiêu chí", name: "", link: "", description: "", status: "Menu" },
          { label: "Quản lý Kế hoạch Tự đánh giá CTĐT (Biểu 02)", name: "", link: "manage-training-program-self-assessment-plan", description: "", status: "Prototype" },
        ],
      },
      {
        label: "Tự đánh giá Tiêu chí",
        links: [
          { label: "Phân tích và Xử lý Thông tin, Minh chứng (Biểu 03)", name: "", link: "analysis-and-processing-proof-03", description: "", status: "Prototype" },
          { label: "Kiểm tra phân tích tiêu chí", name: "", link: "check-criteria-analysis", description: "", status: "Prototype" },
          { label: "Tổng hợp danh sách minh chứng dự kiến", name: "", link: "evidence-list-summary-expected", description: "", status: "Prototype" },
          { label: "Ghi nhận Kết quả Thu thập Minh chứng Thực tế", name: "", link: "record-results-collect-real-world-evidence", description: "", status: "Prototype" },
          { label: "Kiểm duyệt Minh chứng thu thập", name: "", link: "evidence-collection-review", description: "", status: "Prototype" },
        ],
      },
      {
        label: "Báo cáo Tự đánh giá (Cuối chu kỳ 5 năm)",
        links: [
          { label: "Phiếu Tự đánh giá Tiêu chí (Biểu 04)", name: "Self assessment form 04", link: "self-assessment-form-04", description: "", status: "Prototype" },
          { label: "Phê duyệt Phiếu Tự đánh giá", name: "", link: "approve-self-evaluation-form", description: "Phê duyệt Phiếu Tự đánh giá.", status: "Prototype" },
          { label: "Xuất phiếu đánh giá tiêu chí", name: "Export Evaluation Criteria Form", link: "export-evaluation-criteria-form", description: "", status: "Prototype" },
          { label: "Danh sách Báo cáo Tự đánh giá", name: "List of Self-Assessment Reports", link: "self-assessment-report", description: "", status: "Prototype" },
        ],
      },
      {
        label: "Giám sát Thực hiện Tự đánh giá",
        links: [
          { label: "Theo dõi Tiến độ Tự đánh giá Tiêu chí", name: "", link: "", description: "", status: "Menu" },
          { label: "Xem Nhiệm vụ của tôi/đơn vị tôi", name: "", link: "", description: "", status: "Menu" },
        ],
      },
    ],
  },
  {
    label: "Quản lý Đợt Đánh giá ngoài",
    links: [
      { label: "Quản lý Kế hoạch Đánh giá ngoài CTĐT (Biểu 07)", name: "Manage External Evaluation Plan for Programs (Form 07)", link: "program-external-eval-plan-07", status: "Prototype", description: "" },
      { label: "Quản lý Biên bản Ghi nhớ sau Khảo sát Sơ bộ CTĐT (Biểu 08)", name: "Manage Memorandum after Preliminary Program Survey (Form 08)", link: "program-survey-memo-08", status: "Prototype", description: "" },
      { label: "Quản lý Biên bản Hoàn thành Đợt Khảo sát Chính thức CTĐT (Biểu 09)", name: "Official Survey Completion Report (Form 09)", link: "official-survey-completion-report-09", status: "Prototype", description: "" },
      { label: "Quản lý Báo cáo Đánh giá ngoài CTĐT (Biểu 10)", name: "", link: "none-234234", status: "Menu", description: "" },
      { label: "Quản lý  Bảng Tổng hợp Kết quả Tự đánh giá và Đánh giá ngoài (Biểu 11)", name: "", link: "none-234332424", status: "Menu", description: "" },
      { label: "Quản lý Nhận xét về Hồ sơ Thẩm định Kết quả Đánh giá CLCTĐT (Biểu 13)", name: "Manage Comments on Program Quality Evaluation Dossier Review (Form 13)", link: "program-eval-comments-13", status: "Prototype", description: "" },
      { label: "Quản lý Nghị quyết của Hội đồng Kiểm định Chất lượng Giáo dục (Biểu 14)", name: "Manage Resolutions of the Education Quality Accreditation Council (Form 14)", link: "accreditation-council-resolution-14", status: "Prototype", description: "" },
      { label: "Giấy Chứng nhận Kiểm định Chất lượng CTĐT", name: "", link: "none-89053775", status: "Menu", description: "" },
    ],
  },
  {
    label: "Kết quả Đánh giá ngoài",
    links: [
      { label: "Nhập Đánh giá Tiêu chí của Đoàn đánh giá ngoài", name: "", link: "none-63141745566", status: "Menu", description: "" },
    ],
  },
  {
    label: "Kế hoạch Cải tiến Chất lượng",
    links: [
      { label: "Quản lý Kế hoạch Cải tiến", name: "", link: "none-631417455661", status: "Menu", description: "" },
      { label: "Cập nhật cải tiến theo tiêu chí", name: "", link: "none-631417455662", status: "Menu", description: "" },
      { label: "Cập nhật Báo cáo Giữa Chu kỳ Kiểm định Chất lượng CTĐT (Biểu 15)", name: "", link: "none-631417455663", status: "Menu", description: "" },
      { label: "Quản lý Báo cáo Giữa Chu kỳ Kiểm định Chất lượng CTĐT (Biểu 15)", name: "", link: "management-mid-cycle-quality-assurance-report", status: "Prototype", description: "" },
      { label: "Theo dõi Tiến độ Hoạt động Cải tiến", name: "", link: "none-631417455664", status: "Menu", description: "" },
      { label: "Xuất Báo cáo Thực hiện Cải tiến", name: "", link: "none-631417455665", status: "Menu", description: "" },
    ],
  },
  {
    label: "Kho Minh chứng",
    links: [
      { label: "Quản lý Minh chứng", name: "", link: "none-6314174556615", status: "Menu", description: "" },
    ],
  },
  {
    label: "Kế hoạch và phân công",
    links: [
      {
        pageId: 41,
        name: "Inspection cycle",
        label: "Chu kỳ kiểm định",
        link: "5lrwp21o3u",
        status: "Prototype",
        description: "Thiết lập và quản lý chu kỳ kiểm định định kỳ.",
      },
      {
        pageId: 42,
        name: "Preparation roadmap",
        label: "Lộ trình chuẩn bị",
        link: "vpouokrvmt",
        status: "Prototype",
        description:
          "Lập kế hoạch và theo dõi lộ trình chuẩn bị cho kiểm định.",
      },
      {
        pageId: 43,
        name: "Establish Council",
        label: "Thành lập hội đồng",
        link: "establish-council",
        status: "Prototype",
        description: "Thành lập hội đồng kiểm định theo quy định.",
      },
      {
        pageId: 44,
        name: "Self assessment plan",
        label: "Kế hoạch tự đánh giá",
        link: "self-assessment-plan",
        status: "Prototype",
        description: "Lập kế hoạch tự đánh giá theo quy định.",
      },
      {
        pageId: 45,
        name: "Analysis form",
        label: "Phiếu phân tích tiêu chí",
        link: "analysis-form",
        status: "Prototype",
        description: "Phiếu phân tích tiêu chí theo quy định.",
      },
      {
        pageId: 43,
        name: "Report management",
        label: "Quản lý kỳ báo cáo",
        link: "vrdjnzpfmc",
        status: "Prototype",
        description: "Tổng hợp và quản lý thông tin kỳ báo cáo kiểm định.",
      },
      {
        pageId: 47,
        name: "Assignment",
        label: "Phân công phụ trách mốc chuẩn",
        link: "raolvysdbf",
        status: "Prototype",
        description:
          "Phân công cán bộ phụ trách từng mốc chuẩn trong tiêu chuẩn.",
      },
      {
        pageId: 48,
        name: "Recurring tasks",
        label: "Thiết lập nhiệm vụ báo cáo định kỳ",
        link: "grtzbp3rjk",
        status: "Prototype",
        description:
          "Tạo và quản lý các nhiệm vụ báo cáo định kỳ theo mốc thời gian.",
      },
    ],
  },

  {
    label: "Quản lý minh chứng",
    links: [
      {
        pageId: 51,
        name: "Evidence repository",
        label: "Kho minh chứng",
        link: "x19IQVXguk",
        status: "Prototype",
        description: "Lưu trữ và tra cứu minh chứng phục vụ công tác đánh giá.",
      },
      {
        pageId: 52,
        name: "Evidence management",
        label: "Quản lý minh chứng",
        link: "evidence-management",
        status: "Prototype",
        description: "Lưu trữ và tra cứu minh chứng phục vụ công tác đánh giá.",
      }
    ],
  },

  {
    label: "Báo cáo tự đánh giá",
    links: [
      {
        pageId: 61,
        name: "Draft report",
        label: "Soạn nội dung báo cáo",
        link: "79t4hwd85i",
        status: "Prototype",
        description:
          "Soạn thảo nội dung báo cáo tự đánh giá theo từng mốc chuẩn.",
      },    
      {
        pageId: 62,
        name: "Summary report",
        label: "Tổng hợp báo cáo mốc chuẩn",
        link: "o4e65ehgty",
        status: "Prototype",
        description: "Tổng hợp các nội dung đã soạn thảo theo từng mốc chuẩn.",
      },
      {
        pageId: 63,
        name: "Export report",
        label: "Xuất báo cáo tự đánh giá",
        link: "k25w91d9v2",
        status: "Prototype",
        description:
          "Xuất file báo cáo tự đánh giá để phục vụ các công tác liên quan.",
      },
    ],
  },

  {
    label: "Khắc phục/ cải tiến kết quả đánh giá",
    links: [
      {
        pageId: 71,
        name: "Evaluation result",
        label: "Ghi nhận kết quả đánh giá",
        link: "vcd16qt9lf",
        status: "Prototype",
        description: "Nhập và lưu trữ kết quả đánh giá từ các đợt kiểm định.",
      },
      {
        pageId: 72,
        name: "Improvement plan",
        label: "Kế hoạch khắc phục/ cải tiến",
        link: "xwuj3dvbgs",
        status: "Prototype",
        description:
          "Lập kế hoạch hành động khắc phục và cải tiến sau đánh giá.",
      },
      {
        pageId: 73,
        name: "Monitoring improvements",
        label: "Theo dõi thực hiện khắc phục/ cải tiến",
        link: "pjbnqwljej",
        status: "Prototype",
        description: "Theo dõi tiến độ và kết quả thực hiện kế hoạch cải tiến.",
      },
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
      {
        pageId: 999,
        name: "",
        label: "Cấu hình thông tin chủ quản",
        link: "k683h5xrg3",
        status: "Prototype",
        description:
          "Cài đặt và cập nhật thông tin của đơn vị chủ quản hệ thống.",
      },
      {
        pageId: 1000,
        name: "",
        label: "Danh mục đơn vị",
        link: "o4e65ewrwy",
        status: "Prototype",
        description: "Quản lý danh sách các đơn vị trực thuộc hoặc liên quan.",
      },
      // { pageId: 1001, name: "List of evidence types", label: "Danh mục loại minh chứng", link: "4iahruyrpf", status: "Prototype"},
      // { pageId: 1002, name: "Rating scale list", label: "Danh mục thang đánh giá", link: "4ozfpuyh8g", status: "Prototype"},
      {
        pageId: 1003,
        name: "",
        label: "Danh mục cấu hình mail",
        link: "zwgpy0521g",
        status: "Prototype",
        description: "Thiết lập cấu hình gửi/nhận email của hệ thống.",
      },
      {
        pageId: 1006,
        name: "",
        label: "Danh mục bộ đếm",
        link: "6j8jkftgnc",
        status: "Prototype",
        description: "Quản lý các bộ đếm phục vụ đánh số văn bản, nhiệm vụ,...",
      },
    ],
  },
];
