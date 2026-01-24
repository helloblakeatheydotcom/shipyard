window.PAGE_SPECS = {
    "admin_schools": [
        {
            targetId: "pageTitle",
            title: "Page Info",
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
            type: "Navigation Tab",
            description: "Tab to access School Management.",
            logic: "",
            defaults: "Inactive by default.",
            interaction: "Click: Navigates to Admin_Schools.html",
            offset: { top: "-5px", right: "-15px" },
            errors: []
        }, 
        {
            targetId: "addSchoolBtn",
            title: "Add School Button",
            type: "Button",
            description: "Primary button to add a new school.",
            logic: "Must pass current client_id as URL parameter.",
            defaults: "Visible and Enabled (Active). Primary Button (primary-blue background, white text).",
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
            logic: "Active: Renders as Green Pill (status-active-bg, status-active-text). Inactive: Renders as Gray Pill (status-inactive-bg, status-inactive-text).",
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
    ],
    "admin_schools_users_modal": [
        {
            targetId: "usersModalHeader",
            title: "Modal Header",
            type: "Header",
            description: "The title and subtitle area of the modal.",
            logic: `
                <ul>
                    <li><b>Title:</b> "Users at [School Name]." (Dynamic)</li>
                    <li><b>Subtitle:</b>"Below are the Active user accounts at [School Name]." (Dynamic)</li>
                </ul>
                `,
            defaults: "",
            interaction: "None",
            offset: { top: "0px", right: "0px" },
            errors: []
        },
        {
            targetId: "usersListContainer",
            title: "Users List",
            type: "List Container",
            
            // DESCRIPTION: The "What"
            description: "Scrollable list of user rows.",
            
            // LOGIC: The "Rules" & "Data" (The heavy lifting)
            logic: `
                <ul>
                    <li><b>Layout:</b> 'Name' is First Name Last Name, bold (e.g. <b>John Doe</b>). 'Last login' is right-aligned and formated as date/time relative to now.</li>
                    <li><b>Badge:</b> Status 'Active' renders as Green Pill (status-active-bg, status-active-text) and 'Inactive' as Gray Pill (status-inactive-bg, status-inactive-text).</li>
                    <li><b>Contact Details:</b> Display 'Phone' and 'Email' with icons
                    <li><b>Empty State:</b> If array is empty, show "No users found" message.</li>
                </ul>
            `,
            
            // DEFAULTS: Initial state
            defaults: "Sorted by Last Name (ASC).",
            
            // INTERACTION: Triggers (Since clicking a user does nothing, this is None)
            interaction: "None (Rows are read-only)."
        },
        {
            targetId: "usersModalCloseBtn",
            title: "Close Button",
            type: "Button",
            description: "Primary button in the footer.",
            logic:  `
                <ul>
                    <li><b>Style:</b> Primary Button (primary-blue background, white text).</li>
                    <li><b>Position:</b> Right-aligned in the footer.</li>
                </ul>
            `,
            defaults: "",
            interaction: "Click: Closes the modal and returns focus to the schoolsTable.",
            offset: { top: "-5px", right: "-5px" },
            errors: []
        }
    ],
    "admin_schools_deactivate_modal": [
        {
            targetId: "deactivateModalHeader",
            title: "Deactivate Header",
            type: "Modal Header",
            description: "Title and confirmation subtitle.",
            logic: `
                <b>Dynamic Text:</b>
                <ul>
                    <li><b>Title:</b> "Deactivate <b>[School Name]</b>"</li>
                    <li><b>Subtitle:</b> "This will mark the school <b>INACTIVE</b> (as of [Current Date] at [Current Time])."</li>
                </ul>
            `,
            defaults: "Date format: 'January 23, 2026 at 5:35 PM'",
            interaction: "None."
        },
        {
            targetId: "deactivateWarningCard",
            title: "Impact Warning",
            type: "Alert Box",
            description: "Summary of open items preventing a clean break.",
            logic: `
                <b>Data Query:</b>
                Queries the database for specific open records linked to this <code>school_id</code>:
                <ul>
                    <li><b>Invoices:</b> Status = 'Not Started', 'Created', 'Submitted', 'Approved', or 'Returned'</li>
                    <li><b>Applications:</b> Status = 'Initial Review', 'Final Review', 'Returned to Parent', 'DHS Review', 'School Review', 'Approved', or 'Pending Acceptance'</li>
                    <li><b>Statements:</b> Status = 'Not Started', 'Created', or 'Submitted'</li>
                </ul>
                <br>
                <b>Visibility:</b>
                If all counts are 0, hide this box entirely.
            `,
            defaults: "Background: inset-card-bg. Icon: Alert Triangle.",
            interaction: "None."
        },
        {
            targetId: "deactivateImpactGrid",
            title: "Impact Details",
            type: "Static Content",
            description: "Two-column grid explaining the consequences of deactivation.",
            logic: `
                <b>Content: </b>Static, hardcoded text.
                <br><br>
                <b>Layout:</b>
                Display as a 2-column grid.
                <ul>
                    <li><b>Left Col:</b> "What stops" and "What continues"</li>
                    <li><b>Right Col:</b> "Users"</li>
                </ul>
            `,
            interaction: "None."
        },
        {
            targetId: "btnDeactivateConfirm",
            title: "Action Buttons",
            type: "Button",
            description: "Final confirmation controls.",
            logic: `
                <b>Cancel Button:</b>
                Style: Secondary (status-inactive-bg, status-inactive-text).
                <br><br>
                <b>Deactivate Button:</b>
                Style: <b>Destructive/Danger</b> (danger-red background, White text).
            `,
            interaction: `
                <b>Cancel Click:</b> Closes the modal immediately. No data is changed.
                <br>
                <b>Deactivate Click:</b> Sets status to 'Inactive', closes modal, and triggers table refresh.
            `
        }
    ],
    "admin_schools_reactivate_modal": [
        {
            targetId: "reactivateModalHeader",
            title: "Reactivate Header",
            type: "Modal Header",
            description: "Title and confirmation subtitle.",
            logic: `
                <b>Dynamic Text:</b>
                <ul>
                    <li><b>Title:</b> "Reactivate <b>[School Name]</b>"</li>
                    <li><b>Subtitle:</b> "This will mark the school <b>ACTIVE</b> (as of [Current Date] at [Current Time])."</li>
                </ul>
            `,
            defaults: "Date format: 'January 23, 2026 at 2:35 PM'",
            interaction: "None."
        },
        {
            targetId: "reactivateImpactGrid",
            title: "Impact Details",
            type: "Static Content",
            description: "Two-column grid explaining the consequences of reactivation.",
            logic: `
                <b>Content:</b>
                Static, hardcoded text.
                <br><br>
                <b>Layout:</b>
                Display as a 2-column grid.
                <ul>
                    <li><b>Left Col:</b> "What starts" and "What continues"</li>
                    <li><b>Right Col:</b> "Users"</li>
                </ul>
            `,
            interaction: "None."
        },
        {
            targetId: "btnReactivateConfirm",
            title: "Action Buttons",
            type: "Button",
            description: "Final confirmation controls.",
            logic: `
                <b>Cancel Button:</b>
                Style: Secondary (status-inactive-bg, status-inactive-text).
                <br><br>
                <b>Reactivate Button:</b>
                Style: <b>Primary</b> (primary-blue background, White text).
            `,
            interaction: `
                <b>Cancel Click:</b> Closes the modal immediately. No data is changed.
                <br>
                <b>Reactivate Click:</b> Sets status to 'Active', closes modal, and triggers table refresh.
            `
        }
    ],
    "add_school": [
        {
            targetId: "pageTitle",
            title: "Page Info",
            type: "Page Header",
            description: "Header containing the page title and breadcrumb navigation.",
            logic: "",
            defaults: "",
            interaction: "",
            offset: { top: "0px", right: "0px" },
            errors: [],
            specialMarker: "purple-star"
        },
        {
            targetId: "schoolInfoSection", 
            title: "School Information",
            type: "Form Section",
            description: "General demographic data for the school.",
            logic: `
                <b>Required Fields (*):</b>
                <ul>
                    <li><b>School Name:</b> <code>type="text"</code></li>
                    <li><b>Phone Number:</b> <code>type="tel"</code>. Enforce <code>(xxx) xxx-xxxx</code> mask.</li>
                    <li><b>Address & City:</b> <code>type="text"</code></li>
                    <li><b>State:</b> <code>&lt;select&gt;</code> Dropdown.</li>
                    <li><b>Zip Code:</b> <code>type="text"</code> (See logic below).</li>
                </ul>
                <br>
                <b>Zip Code Logic:</b>
                <ul>
                    <li><b>Conditional Mask:</b> Accept 5 digits. If user types a 6th digit, automatically insert hyphen (format as <code>xxxxx-xxxx</code>).</li>
                    <li><b>Validation:</b> Error if length is not exactly 5 or 9 digits.</li>
                </ul>
                <br>
                <b>Optional Fields:</b>
                <ul>
                    <li><b>Email Address:</b> <code>type="email"</code>. (Validate format if entered).</li>
                    <li><b>Website:</b> <code>type="url"</code>. (Validate URL format if entered).</li>
                </ul>
            `,
            defaults: "Fields are empty on load, except for <b>State</b> which defaults to Oklahoma.",
            errors: [
                { condition: "Empty Field", text: "This field is required." },
                { condition: "Phone Mask", text: "Phone Number must be 10 digits." },
                { condition: "Invalid Zip", text: "Zip Code must be 5 or 9 digits." }
            ],
            interaction: `
                <b>Navigation:</b> Tab key moves focus in order.
                <br>
                <b>Validation Trigger:</b> Validate individual fields <b>On Blur</b>.
            `
        },
       {
            targetId: "primaryContactSection",
            title: "Primary Contact",
            type: "Form Section",
            description: "Designated point of contact for the school.",
            logic: `
                <b>Required Fields (*):</b>
                <ul>
                    <li><b>Primary Contact Name:</b> <code>type="text"</code>.</li>
                    <li><b>Primary Contact Phone:</b> <code>type="tel"</code>. Enforce <code>(xxx) xxx-xxxx</code> mask.</li>
                    <li><b>Primary Contact Email:</b> <code>type="email"</code>. Validate format (check for @ and .domain).</li>
                </ul>
            `,
            defaults: "Fields are empty on load.",
            errors: [
                { condition: "Empty Field", text: "This field is required." },
                { condition: "Invalid Email", text: "Please enter a valid email address (e.g. name@domain.com)." },
                { condition: "Phone Mask", text: "Phone Number must be 10 digits." }
            ],
            interaction: `
                <b>Navigation:</b> Tab key moves focus in order.
                <br>
                <b>Validation Trigger:</b> Validate individual fields <b>On Blur</b>.
            `
        },
       {
            targetId: "fileUploadArea",
            title: "Affidavit Upload",
            type: "File Uploader",
            description: "Drag-and-drop zone for the Private School Affidavit.",
            logic: `
                <b>Constraints:</b>
                <ul>
                    <li><b>File Types:</b> PDF, JPG, PNG only.</li>
                    <li><b>Max Size:</b> 10MB.</li>
                    <li><b>Multiple Files:</b> No (Single file only).</li>
                </ul>
                <br>
                <b>Success State:</b>
                Replace "Click to upload" text with the filename and a "Remove" (X) icon.
            `,
            errors: [
                    { condition: "Wrong File Type", text: "Only PDF, JPG, and PNG files are allowed." },
                    { condition: "File Too Large", text: "File size must be under 10MB." },
                    { condition: "Upload Failure", text: "Network error. Please try again." }
            ],
            interaction: `
                    <b>Validation Trigger:</b> Run checks <b>Immediately</b> upon file selection or drop.
                    <br>
                    <b>Click:</b> Opens system file browser.
                    <br>
                    <b>Drag & Drop:</b> Highlights border on hover.
            `
        }
    ]
};