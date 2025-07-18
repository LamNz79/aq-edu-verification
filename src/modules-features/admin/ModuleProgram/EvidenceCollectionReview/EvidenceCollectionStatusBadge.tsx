import { IconClock, IconChecks } from "@tabler/icons-react";
import { Badge } from "@mantine/core";

export enum EnumCriteriaAssignmentStatus {
  NotChecked = 1,
  Checked = 2,
  RequiredChanging = 3,
}

export function EvidenceCollectionStatusBadge({ status }: { status: number }) {
    switch (status) {
        case 1:
            return (
                <>
                    <Badge
                        w={"100%"}
                        leftSection={<IconClock />}
                        variant="light" color="gray" radius="xs">
                        Chưa kiểm duyệt
                    </Badge>
                </>
            );
        case 2:
            return (
                <>
                    <Badge
                        w={"100%"}
                        leftSection={<IconClock />}
                        variant="light" color="green" radius="xs">
                        Đã kiểm duyệt
                    </Badge>
                </>
            );
        case 3:
            return (
                <>
                    <Badge
                        w={"100%"}
                        leftSection={<IconChecks />}
                        variant="light" color="orange" radius="xs">
                        Yêu cầu bổ sung hiệu chỉnh
                    </Badge>
                </>
            );
            
        default:
            return (
                <>
                </>
            );
    }
}
