"use client";

import { MyPageContent } from "aq-fe-framework/components";
import EvaluationFormTable from "@/modules-features/admin/ModuleEvaluationForm/EvaluationFormTable";

export default function Page() {
  return (
    <MyPageContent title="Phiếu Đánh giá Tiêu chí của Đoàn đánh giá ngoài (Biểu 11)">
      <EvaluationFormTable />
    </MyPageContent>
  );
}
