"use client";
import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";
import { ITrainingCourseListViewModel } from "./interface";

export default function TrainingCourseListDelete({
  trainingCourse,
}: {
  trainingCourse: ITrainingCourseListViewModel;
}) {
  return (
    <MyActionIconDelete
      contextData={trainingCourse.code}
      onSubmit={() => {}}
    ></MyActionIconDelete>
  );
}
