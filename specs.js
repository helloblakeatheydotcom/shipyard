window.PAGE_SPECS = {
    "admin_schools": [
        {
            targetId: "pageTitle",
            title: "Page Info",
            label: "1",
            type: "",
            description: "",
            logic: "",
            defaults: "",
            interaction: "",
            offset: { top: "0px", right: "0px" },
            errors: [],
            specialMarker: "purple-star"
        },
        {
            targetId: "tabUsers",
            title: "Users Tab",
            label: "2",
            type: "Navigation Tab",
            description: "Tab to access User Management.",
            logic: "",
            defaults: "Selected by default when navigating to the Settings page.",
            interaction: "Click: Navigates to Admin_Users.html.",
            offset: { top: "-4px", right: "-12px" },
            errors: []
        },
        {
            targetId: "tabSchools",
            title: "Schools Tab",
            label: "3",
            type: "Navigation Tab",
            description: "Tab to access School Management.",
            logic: "",
            defaults: "Inactive by default.",
            interaction: "Click: Switches to Schools view.",
            offset: { top: "-5px", right: "-15px" },
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
            offset: { top: "-2px", right: "-2px" },
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
            targetId: "schoolSearchInput",
            title: "School Search",
            label: "1",
            type: "Text Input",
            description: "Text input for filtering the schools list.",
            logic: "Filters rows where 'School Name' OR 'Contact Name' contains the string (Case-insensitive).",
            defaults: "Empty. Placeholder: 'Search by Name or Contact...'",
            interaction: "Real-time filtering with a 300ms debounce (waits for typing to stop before filtering).",
            offset: { top: "-3px", right: "0px" },
            errors: []
        },
        {
            targetId: "activeUsersHeader",
            title: "Active Users List",
            type: "Table Column",
            description: "Column listing active 'Private School' users assigned to this school.",
            logic: `
            <b>Display Rules:</b>
            <ul>
                <li> > <b>2 Users:</b> Show first 2 names + count badge (e.g., 'John Doe, Jane Doe, +3 more').</li>
                <li> <b>0 Users:</b> Display 'No active accounts'"</li>
            </ul>
            `,
            defaults: "Display first and last name of up to 2 users and then display a count of users above 2. (names or count).",
            interaction: "None.",
            offset: { top: "-3px", right: "0px" },
            errors: []
        },
        {
            targetId: "statusHeader",
            title: "Status Column",
            type: "Table Column",
            description: "Column showing the school's operational status",
            logic: "Active: Renders as Green Pill (bg-green-100, text-green-800). Inactive: Renders as Gray Pill (bg-gray-100, text-gray-800).",
            defaults: "Sortable (future enhancement).",
            interaction: "None.",
            offset: { top: "-3px", right: "0px" },
            errors: []
        },
        {
            targetId: "actionsHeader",
            title: "Actions Column",
            type: "Table Column",
            description: "Kebab menu for administrative actions.",
            logic: "Menu Items: 'Edit School', 'View Users'. Conditional: If Status is 'Active', show 'Deactivate School'. If Status is 'Inactive', show 'Reactivate School'. ",
            defaults: "Always visible.",
            interaction: "Click: Toggles the visibility of the dropdown menu. Clicking outside closes it.",
            offset: { top: "-3px", right: "0px" },
            errors: []
        }
    ]
};