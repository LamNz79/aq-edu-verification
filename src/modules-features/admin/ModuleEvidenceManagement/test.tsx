"use client";

import { useQuery } from "@tanstack/react-query";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MyButtonCreate } from "aq-fe-framework/components";

export default function ButtonName() {

  const query = useQuery({
    queryKey: [""],
    queryFn: () => { return mockData; },
  });

  const form = useForm<IDataType>({
    initialValues: {
    },
    validate: {
    }
  });

  return (
    <MyButtonCreate
      objectName="Title"
      form={form}
      onSubmit={() => {
      }}
    >
      children
    </MyButtonCreate>
  );
}

const mockData: IDataType[] = [
];