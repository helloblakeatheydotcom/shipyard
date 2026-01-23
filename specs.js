window.PAGE_SPECS = {
    "admin_schools": [
        {
            targetId: "schoolSearchInput",
            title: "School Search",
            type: "Text Input",
            description: "Text input for filtering the schools list.",
            logic: "Filters rows by School Name. Case-insensitive partial match.",
            defaults: "Empty string. Placeholder: 'Search'",
            interaction: "Input: Filters table immediately.",
            offset: { top: "0px", right: "0px" },
            errors: []
        },
        {
            targetId: "addSchoolBtn",
            title: "Add School Button",
            type: "Button",
            description: "Primary button to add a new school.",
            logic: "Must pass current client_id as URL parameter.",
            defaults: "Visible and Enabled (Active)",
            interaction: "Click: Navigates to Add_School.html.",
            offset: { top: "0px", right: "0px" },
            errors: []
        },
        {
            targetId: "statusHeader",
            title: "Status Column",
            type: "Table Column",
            description: "Column showing the school's status.",
            logic: "Displays 'Active' or 'Inactive'.",
            defaults: "Sortable (future enhancement).",
            interaction: "None.",
            offset: { top: "-2px", right: "0px" },
            errors: []
        },
        {
            targetId: "tabUsers",
            title: "Users Tab",
            type: "Navigation Tab",
            description: "Tab to access User Management.",
            logic: "",
            defaults: "Selected by default when navigating to the Settings page.",
            interaction: "Click: Navigates to Admin_Users.html.",
            offset: { top: "-7px", right: "-2px" },
            errors: []
        },
        {
            targetId: "tabSchools",
            title: "Schools Tab",
            type: "Navigation Tab",
            description: "Tab to access School Management.",
            logic: "",
            defaults: "Inactive by default.",
            interaction: "Click: Switches to Schools view.",
            offset: { top: "-7px", right: "-2px" },
            errors: []
        },
        {
            targetId: "schoolsCard",
            title: "Schools List Table",
            type: "Data Table",
            description: "Main table displaying all schools in the system.",
            logic: "Includes pagination controls and column sorting.",
            defaults: "Sorted by School Name (ASC). Default 10 rows per page.",
            interaction: "Click Header: Sorts table. Pagination buttons: Change page.",
            offset: { top: "0px", right: "0px" },
            errors: []
        },
        {
            targetId: "activeUsersHeader",
            title: "Active Users List",
            type: "Table Column",
            description: "Column listing active users.",
            logic: "Shows active 'Private School' users assigned to the school.",
            defaults: "Summary view (names or count).",
            interaction: "None.",
            offset: { top: "-3px", right: "0px" },
            errors: []
        },
        {
            targetId: "actionsHeader",
            title: "Actions Column",
            type: "Table Column",
            description: "Column for administrative actions.",
            logic: "Actions: Edit School, View Users, Deactivate/Reactivate.",
            defaults: "Always visible.",
            interaction: "Click: Opens dropdown menu.",
            offset: { top: "-2px", right: "0px" },
            errors: []
        }
    ]
};