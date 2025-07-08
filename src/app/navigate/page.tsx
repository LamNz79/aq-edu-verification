"use client"

import { useS_Global } from "@/stores/useS_Global"
import { Button, Card, Center } from "@mantine/core"
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function QualityAssessmentPage() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)
    const store = useS_Global()
    const router = useRouter()
    const assessmentTypes = [
        {
            id: "education",
            title: "KIỂM ĐỊNH CHẤT LƯỢNG",
            subtitle: "CƠ SỞ GIÁO DỤC",
            description: "Đánh giá toàn diện chất lượng hoạt động của các cơ sở giáo dục",
            icon: GraduationCap,
            gradient: "from-blue-500 to-purple-600",
            bgGradient: "from-blue-50 to-purple-50",
        },
        {
            id: "program",
            title: "KIỂM ĐỊNH CHẤT LƯỢNG",
            subtitle: "CHƯƠNG TRÌNH ĐÀO TẠO",
            description: "Đánh giá chất lượng các chương trình đào tạo và giảng dạy",
            icon: BookOpen,
            gradient: "from-emerald-500 to-teal-600",
            bgGradient: "from-emerald-50 to-teal-50",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="container mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                        <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">Chọn hình thức kiểm định</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Lựa chọn loại hình kiểm định chất lượng mà bạn muốn thực hiện
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Assessment Options */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {assessmentTypes.map((type) => {
                        const IconComponent = type.icon
                        return (
                            <Card
                                key={type.id}
                                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 overflow-hidden ${hoveredCard === type.id ? "scale-105" : ""
                                    }`}
                                onMouseEnter={() => setHoveredCard(type.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <Card className="p-0">
                                    <div className={`bg-gradient-to-br ${type.bgGradient} p-8 relative overflow-hidden`}>
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-white"></div>
                                            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white"></div>
                                        </div>

                                        {/* Icon */}
                                        <Center>
                                            <div
                                                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${type.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <IconComponent className="w-10 h-10 text-white" />
                                            </div>
                                        </Center>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h2 className="text-2xl text-center font-bold text-gray-800 mb-2 leading-tight">{type.title}</h2>
                                            <h3
                                                className={`text-xl text-center font-semibold bg-gradient-to-r ${type.gradient} bg-clip-text text-transparent mb-4`}
                                            >
                                                {type.subtitle}
                                            </h3>
                                            <p className="text-gray-600 text-center mb-8 leading-relaxed">{type.description}</p>

                                            {/* Action Button */}
                                            <Button
                                                onClick={() => {
                                                    if (type.id == "education") {
                                                        store.setProperty("accreditationType", "Institutional")
                                                    }
                                                    if (type.id == "program") {
                                                        store.setProperty("accreditationType", "Program")
                                                    }
                                                    router.push("/auth/login")
                                                }}
                                                className={`w-full bg-gradient-to-r ${type.gradient} hover:shadow-lg transition-all duration-300 group-hover:shadow-xl text-white border-0 h-12 text-lg font-semibold`}
                                            >
                                                Chọn loại kiểm định này
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Card>
                        )
                    })}
                </div>

                {/* Additional Info Section */}
                <div className="mt-20 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Cần hỗ trợ thêm thông tin?</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn trong quá trình kiểm định chất lượng
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="outline" className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 h-12 px-8">
                                Liên hệ hỗ trợ
                            </Button>
                            <Button variant="outline" className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 h-12 px-8">
                                Tài liệu hướng dẫn
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
