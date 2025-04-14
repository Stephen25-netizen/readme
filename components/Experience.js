function Experience() {
    try {
        const experiences = [
            {
                period: "2022 - Present",
                title: "Senior Art Director",
                company: "Pentagram Design, San Francisco"
            },
            {
                period: "2020 - 2022",
                title: "software engineer",
                company: "IDEO, New York"
            },
            {
                period: "2018 - 2020",
                title: "Senior Graphic Designer",
                company: "Wolff Olins, New York"
            },
            {
                period: "2016 - 2018",
                title: "Web developer",
                company: "Collins, New York"
            }
        ];

        const organizations = [
            {
                period: "2023 - Present",
                title: "Board Member",
                organization: "AIGA San Francisco Chapter"
            },
            {
                period: "2021 - Present",
                title: "Mentor",
                organization: "Women in Design, San Francisco"
            },
            {
                period: "2019 - 2021",
                title: "Creative Director",
                organization: "Design Week NYC"
            },
            {
                period: "2017 - 2019",
                title: "Committee Member",
                organization: "Type Directors Club"
            }
        ];

        return (
            <div className="mt-12" data-name="experience-section">
                <h2 className="section-title experience">EXPERIENCE</h2>
                <div className="relative">
                    <div className="timeline-line"></div>
                    <div className="space-y-8 pl-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative" data-name="experience-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-red-500">{exp.period}</div>
                                <div className="font-bold">{exp.title}</div>
                                <div className="text-gray-600">{exp.company}</div>
                            </div>
                        ))}
                        {organizations.map((org, index) => (
                            <div key={index} className="relative" data-name="organization-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-red-500">{org.period}</div>
                                <div className="font-bold">{org.title}</div>
                                <div className="text-gray-600">{org.organization}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
