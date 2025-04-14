function Education() {
    try {
        return (
            <div className="mt-12" data-name="education-section">
                <h2 className="section-title education">EDUCATION</h2>
                <div className="space-y-8">
                    <div data-name="education-item">
                        <div className="text-red-500">2024-2025</div>
                        <div className="font-bold">Certificate in software Engineering</div>
                        <div className="text-gray-600">KENYA School OF SOFTWARE AND PROFESSIONAL STUDIES (SSP)</div>
                    </div>
                    <div data-name="education-item">
                        <div className="text-red-500">2025-2026</div>
                        <div className="font-bold">Diploma in web development</div>
                        <div className="text-gray-600"> School of Design, The New School</div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
